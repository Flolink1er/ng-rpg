import { ClassType } from "../enums/class-type.enum";

export interface ICharacter {
  type: ClassType;
  name: string;
  description: string;
  features: string[];
  characteristics: ICharacteristics
}

export interface ICharacteristics {
  atk: number;
  def: number;
  speed: number;
  hp: number;
  mana: number;
}
