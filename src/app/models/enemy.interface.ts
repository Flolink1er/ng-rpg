import { EnemyRaceType, KindEnemy } from '../enums/enemy-race-type.enum';
import { MapType } from '../enums/map-type.enum';
import { IBaseEntity, IBaseInstance } from './character.interface';

export interface IEnemy extends IBaseEntity {
  race: EnemyRaceType;
  xpReward: number;
  goldReward: number;
  zone: MapType;
}

export interface IEnemyInstance extends IEnemy, IBaseInstance {
  kind: KindEnemy;
}
