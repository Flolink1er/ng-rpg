import { IBaseInstance, ICharacter } from './character.interface';
import { IInventoryItemInstance } from './item.interface';

export interface IPlayer extends ICharacter, IBaseInstance {
  pseudo: string;
  money: number;
  currentXp: number;
  inventory: IInventoryItemInstance[];
}
