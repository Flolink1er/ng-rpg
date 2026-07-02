import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { IPlayer } from '../models/player.interface';
import { GameState } from '../enums/game-state.enum';
import { Random } from './random.service';
import { IEnemy, IEnemyInstance } from '../models/enemy.interface';
import { ENEMY_DATA } from '../data/enemy.data';
import { EnemyRaceType, KindEnemy } from '../enums/enemy-race-type.enum';
import { from, map, Observable, zip } from 'rxjs';
import { EntityHelper } from '../helpers/entity.helper';
import { MapType } from '../enums/map-type.enum';
import { LogEntryService } from './log-entry.service';
import { InterfaceDigitsPipe } from '../pipes/interface-digits-pipe';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class GameManagerService {
  private _currentPlayer?: IPlayer;
  private _gameState: WritableSignal<GameState> = signal(GameState.NONE);
  private _enemiesTemplate: IEnemy[] = ENEMY_DATA;
  private _enemies: IEnemyInstance[] = [];
  private _currentEnemy: WritableSignal<IEnemyInstance | undefined> = signal(undefined);
  private readonly randomService = inject(Random);
  private readonly logEntryService = inject(LogEntryService);
  private readonly router = inject(Router);

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
    return this._currentEnemy()!;
  }

  public get state(): WritableSignal<GameState> {
    return this._gameState!;
  }

  private getRandomEnemiesType(zone: MapType): Observable<EnemyRaceType[]> {
    return this.randomService
      .generateIntegerAndGetData(5, 0, 2)
      .pipe(map((values) => EntityHelper.getRaceByNumbersAndZone(values, zone)));
  }

  private getRandomEnemiesKind(): Observable<KindEnemy[]> {
    return this.randomService
      .generateIntegerAndGetData(5, 0, 2)
      .pipe(map((values) => EntityHelper.getKindByNumbers(values)));
  }

  public startFight(zone: MapType): void {
    this.logEntryService.addLog('system', '⚔️', 'Combat démarré !');
    let race$ = this.getRandomEnemiesType(zone);
    let kind$ = this.getRandomEnemiesKind();
    zip(race$, kind$)
      .pipe(map(([race, kind]) => ({ race, kind })))
      .subscribe((values) => {
        this._enemies = values.race.map((race, i) => {
          const kind = i >= 3 ? values.kind[i] : KindEnemy.Normal;
          return EntityHelper.enemyRaceToInstance(race, kind);
        });

        this._gameState?.set(GameState.FIGHT_INIT as GameState);
        this.startNewFight();
      });
  }

  private startNewFight(): void {
    this._gameState.set(this.handleInitFight());
    this._gameState.set(this.handleTurnDecide());
    if (this._gameState() === GameState.ENEMY_TURN) {
      this.fightLoop();
    }
  }

  private handleInitFight(): GameState {
    this._currentEnemy.set(this._enemies.shift());
    this.logEntryService.addLog(
      'info',
      'ℹ️',
      `Un ${this.currentEnemy!.name} de niveau ${this.currentEnemy!.lvl} est apparu prêt à en découdre !`,
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
          `${this.currentEnemy!.currentHp <= 0 ? this.currentPlayer.pseudo : this.currentEnemy!.name} a remporté le combat !`,
        );
        this.returnToMap(true);
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
          `${this.currentEnemy!.currentHp <= 0 ? this.currentPlayer.pseudo : this.currentEnemy!.name} a remporté le combat !`,
        );
        this.handleReward(this.currentEnemy.goldReward, this.currentEnemy.xpReward);

        if (this._enemies.length >= 1) {
          this.startNewFight();
        } else {
          this._gameState.set(GameState.NONE);
          this.returnToMap(false);
        }
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
      `${this._currentPlayer?.pseudo} a perdu : ${this.digitPipe(atk)} hp`,
    );
  }

  private applyPlayerAttack(): void {
    this._gameState.set(GameState.APPLY_EFFECT);
    const atk = this.checkPlayerDamage();
    this.currentEnemy!.currentHp -= atk;
    this.logEntryService.addLog(
      'player',
      '⚔️',
      `${this._currentPlayer?.pseudo} a infligé ${this.digitPipe(atk)} de dégâts`,
    );
  }

  private handleReward(gold: number, xp: number): void {
    this.currentPlayer.money += gold;
    this.currentPlayer.currentXp += xp;
    this.logEntryService.addLog(
      'system',
      '🪙',
      `Félicitation, Vous avez reçu un montant de ${gold} or et de ${xp} XP !`,
    );

    let currentLvl = this.currentPlayer.lvl;
    if (this.currentPlayer.currentXp >= this.xpForNextLevel(currentLvl)) {
      console.log(this._currentPlayer?.currentXp, 'Niveau passé !');
      this.currentPlayer.lvl += 1;

      this.currentPlayer.characteristics.atk *= 1.1;
      this.currentPlayer.characteristics.def *= 1.1;
      this.currentPlayer.characteristics.speed *= 1.1;
      this.currentPlayer.characteristics.hp *= 1.1;
      this.currentPlayer.characteristics.mana *= 1.1;

      this.currentPlayer.currentHp = this.currentPlayer.characteristics.hp;
      this.currentPlayer.currentMp = this.currentPlayer.characteristics.mana;
    }
  }

  public xpForNextLevel(level: number) {
    return 500 * Math.pow(2.5, level - 1);
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
      this._currentPlayer!.characteristics.speed >= this.currentEnemy!.characteristics.speed
        ? GameState.PLAYER_TURN
        : GameState.ENEMY_TURN;
    this.logEntryService.addLog(
      'system',
      '📜',
      `${turn == GameState.PLAYER_TURN ? this._currentPlayer?.pseudo : this.currentEnemy!.name} commence !`,
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

  public returnToMap(restoreLife: boolean): void {
    if (restoreLife) {
      this.currentPlayer.currentHp = this.currentPlayer.characteristics.hp;
      this.currentPlayer.currentMp = this.currentPlayer.characteristics.mana;
      this.currentPlayer.money *= 0.5;
    }

    console.log('Enemies :', this._enemies);

    this.logEntryService.reset();
    this.router.navigateByUrl('/map');
  }

  private digitPipe(value: number, digits = 0): number {
    if (value > 0 && value < 1) {
      return 1;
    } else if (value < 0) {
      return 0;
    } else {
      return +value.toFixed(digits);
    }
  }
}
