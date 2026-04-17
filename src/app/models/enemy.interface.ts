import { EnemyRaceType } from "../enums/enemy-race-type.enum";
import { IBaseEntity, IBaseInstance } from "./character.interface";

export interface IEnemy extends IBaseEntity {
  race : EnemyRaceType;
}

export interface IEnemyInstance extends IEnemy, IBaseInstance{
  kind : 'normal' | 'elite' | 'boss';
}
