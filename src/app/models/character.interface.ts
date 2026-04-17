import { ClassType } from "../enums/class-type.enum";

export interface IBaseEntity{
  name: string;
  description: string;
  characteristics: ICharacteristics;
}

export interface ICharacter extends IBaseEntity {
  type: ClassType;
  features: string[];
}


export interface ICharacteristics {
  atk: number;
  def: number;
  speed: number;
  hp: number;
  mana: number;
}

export interface IBaseInstance {
  lvl: number,
  currentHp: number,
  currentMp: number,
}
