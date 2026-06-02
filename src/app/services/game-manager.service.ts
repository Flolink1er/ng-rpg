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

@Injectable({ providedIn: 'root' })
export class GameManagerService {
  private _currentPlayer?: IPlayer;
  private _gameState: WritableSignal<GameState> = signal(GameState.NONE);
  private _enemiesTemplate: IEnemy[] = ENEMY_DATA;
  private _enemies: IEnemyInstance[] = [];
  private _currentEnemy?: IEnemyInstance;
  private readonly randomService = inject(Random);
  private readonly logEntryService = inject(LogEntryService);

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

  public getRandomEnemiesType(): Observable<EnemyRaceType[]> {
    return this.randomService
      .generateIntegerAndGetData(5, 0, this._enemiesTemplate.length - 1)
      .pipe(map((values) => EntityHelper.getRaceByNumbers(values, MapType.Forest)));
  }

  public getRandomEnemiesKind(): Observable<KindEnemy[]> {
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

        console.log(this._enemies);

        this._gameState?.set(GameState.FIGHT_INIT as GameState);
        while (this._gameState!() !== GameState.FIGHT_END) {
          switch (this._gameState()) {
            case GameState.FIGHT_INIT:
              this._currentEnemy = this._enemies.shift();
              this._gameState.set(GameState.TURN_DECIDE);
              break;
            case GameState.TURN_DECIDE:
              this._gameState.set(this.handleTurnDecide());
              break;
            case GameState.PLAYER_TURN:
              this._gameState.set(this.handlePlayerTurn());
              break;
            case GameState.ENEMY_TURN:
              this._gameState.set(this.handleEnemyTurn());
              break;
            case GameState.APPLY_EFFECT:
              this._gameState.set(this.handleApplyEffect());
              break;
            case GameState.CHECK_END:
              this._gameState.set(this.handleCheckEnd());
              break;
            default:
              this._gameState.set(GameState.FIGHT_END);
              break;
          }
        }
      });
  }

  public handleTurnDecide(): GameState {
    this.logEntryService.addLog('system', '#', `État actuel : ${this._gameState()} `);
    return this._currentPlayer!.characteristics.speed >= this._currentEnemy!.characteristics.speed
      ? GameState.PLAYER_TURN
      : GameState.ENEMY_TURN;
  }

  public handlePlayerTurn(): GameState {
    this.logEntryService.addLog('system', '#', `État actuel : ${this._gameState()} `);
    return GameState.ENEMY_TURN;
  }

  public handleEnemyTurn(): GameState {
    this.logEntryService.addLog('system', '#', `État actuel : ${this._gameState()} `);
    return GameState.APPLY_EFFECT;
  }

  public handleApplyEffect(): GameState {
    this.logEntryService.addLog('system', '#', `État actuel : ${this._gameState()} `);
    return GameState.CHECK_END;
  }

  public handleCheckEnd(): GameState {
    this.logEntryService.addLog('system', '#', `État actuel : ${this._gameState()} `);
    return GameState.FIGHT_END;
  }
}
