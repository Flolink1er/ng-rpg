import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { IPlayer } from '../models/player.interface';
import { GameState } from '../enums/game-state.enum';
import { Random } from './random.service';
import { IEnemy, IEnemyInstance } from '../models/enemy.interface';
import { ENEMY_DATA } from '../data/enemy.data';
import { EnemyRaceType, KindEnemy } from '../enums/enemy-race-type.enum';
import { from, map, Observable, zip } from 'rxjs';
import { EntityHelper } from '../../helpers/entity.helper';
import { MapType } from '../enums/map-type.enum';
import { LogEntryService } from './log-entry.service';
import { InterfaceDigitsPipe } from '../pipes/interface-digits-pipe';

@Injectable({ providedIn: 'root' })
export class GameManagerService {
  private _currentPlayer?: IPlayer;
  private _gameState: WritableSignal<GameState> = signal(GameState.NONE);
  private _enemiesTemplate: IEnemy[] = ENEMY_DATA;
  private _enemies: IEnemyInstance[] = [];
  private _currentEnemy?: IEnemyInstance;
  private readonly randomService = inject(Random);
  private readonly logEntryService = inject(LogEntryService);
  private readonly digitPipe = inject(InterfaceDigitsPipe);

  public initGame(player: IPlayer): void {
    this._currentPlayer = player;
  }

  public resetGame() {
    this._currentPlayer = undefined;
  }

  public get isInit(): boolean {
    return !!this._currentPlayer;
  }

  public get currentPlayer(): IPlayer {
    return this._currentPlayer!;
  }

  public get currentEnemy(): IEnemyInstance {
    return this._currentEnemy!;
  }

  public get state(): WritableSignal<GameState> {
    return this._gameState!;
  }

  private getRandomEnemiesType(): Observable<EnemyRaceType[]> {
    return this.randomService
      .generateIntegerAndGetData(5, 0, this._enemiesTemplate.length - 1)
      .pipe(map((values) => EntityHelper.getRaceByNumbers(values, MapType.Forest)));
  }

  private getRandomEnemiesKind(): Observable<KindEnemy[]> {
    return this.randomService
      .generateIntegerAndGetData(5, 0, this._enemiesTemplate.length - 1)
      .pipe(map((values) => EntityHelper.getKindByNumbers(values)));
  }

  public startFight(): void {
    this.logEntryService.addLog('system', '⚔️', 'Combat démarré !');
    let race$ = this.getRandomEnemiesType();
    let kind$ = this.getRandomEnemiesKind();
    zip(race$, kind$)
      .pipe(map(([race, kind]) => ({ race, kind })))
      .subscribe((values) => {
        values.race.map((race, index) => {
          let newEnemy = EntityHelper.enemyRaceToInstance(
            race,
            values.kind[index],
          ) as IEnemyInstance;
          this._enemies!.push(newEnemy);
        });

        this._gameState?.set(GameState.FIGHT_INIT as GameState);
        this._gameState.set(this.handleInitFight());
        this._gameState.set(this.handleTurnDecide());
        if (this._gameState() === GameState.ENEMY_TURN) {
          this.fightLoop();
        }
      });
  }

  private handleInitFight(): GameState {
    this._currentEnemy = this._enemies.shift();
    this.logEntryService.addLog(
      'info',
      'ℹ️',
      `Un ${this._currentEnemy!.name} de niveau ${this._currentEnemy?.lvl} est apparu prêt à en découdre !`,
    );
    return GameState.TURN_DECIDE;
  }

  public fightLoop(): void {
    if (this._gameState() === GameState.ENEMY_TURN) {
      this.applyEnemyAttack();
      if (this.checkEnd()) {
        this._gameState.set(GameState.FIGHT_END);
        this.logEntryService.addLog(
          'system',
          '📜',
          `${this.currentEnemy!.currentHp <= 0 ? this.currentPlayer.pseudo : this._currentEnemy?.name} a remporté le combat !`,
        );
      } else {
        this._gameState.set(GameState.PLAYER_TURN);
        this.logEntryService.addLog(
          'system',
          '📜',
          `Au tour de ${this.currentPlayer.pseudo}, ça va chauffer...`,
        );
      }
    } else if (this._gameState() === GameState.PLAYER_TURN) {
      this.applyPlayerAttack();
      if (this.checkEnd()) {
        this._gameState.set(GameState.FIGHT_END);
        this.logEntryService.addLog(
          'system',
          '📜',
          `${this.currentEnemy!.currentHp <= 0 ? this.currentPlayer.pseudo : this._currentEnemy?.name} a remporté le combat !`,
        );
      } else {
        setTimeout(() => {
          this._gameState.set(GameState.ENEMY_TURN);
          this.logEntryService.addLog(
            'system',
            '📜',
            `Au tour de ${this.currentEnemy.name}, attention !`,
          );
          this.fightLoop();
        }, 500);
      }
    }
  }

  private checkEnd(): boolean {
    return this.currentEnemy!.currentHp <= 0 || this.currentPlayer!.currentHp <= 0;
  }

  private applyEnemyAttack(): void {
    this._gameState.set(GameState.APPLY_EFFECT);
    const atk = this.checkEnemyDamage();
    this.currentPlayer!.currentHp -= atk;
    this.logEntryService.addLog(
      'enemy',
      '⚔️',
      `${this._currentPlayer?.pseudo} a perdu : ${this.digitPipe.transform(atk)} hp`,
    );
  }

  private applyPlayerAttack(): void {
    this._gameState.set(GameState.APPLY_EFFECT);
    const atk = this.checkPlayerDamage();
    this._currentEnemy!.currentHp -= atk;
    this.logEntryService.addLog(
      'player',
      '⚔️',
      `${this._currentPlayer?.pseudo} a infligé ${this.digitPipe.transform(atk)} de dégâts`,
    );
  }

  private checkEnemyDamage(): number {
    const atk = this.currentEnemy.characteristics.atk;
    return this.currentPlayer.characteristics.def > atk ? atk / 2 : atk;
  }

  private checkPlayerDamage(): number {
    const def = this.currentEnemy.characteristics.def;
    const atk = this.currentPlayer.characteristics.atk;
    return atk < def ? atk / 2 : atk;
  }

  private handleTurnDecide(): GameState {
    const turn =
      this._currentPlayer!.characteristics.speed >= this._currentEnemy!.characteristics.speed
        ? GameState.PLAYER_TURN
        : GameState.ENEMY_TURN;
    this.logEntryService.addLog(
      'system',
      '📜',
      `${turn == GameState.PLAYER_TURN ? this._currentPlayer?.pseudo : this._currentEnemy?.name} commence !`,
    );
    return turn;
  }

  private handlePlayerTurn(): GameState {
    return GameState.ENEMY_TURN;
  }

  private handleEnemyTurn(): GameState {
    return GameState.APPLY_EFFECT;
  }

  private handleApplyEffect(): GameState {
    return GameState.CHECK_END;
  }

  private handleCheckEnd(): GameState {
    return GameState.FIGHT_END;
  }
}
