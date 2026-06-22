import { ItemRarity, ItemType } from '../enums/item-type.enum';
import { ICharacteristics } from './character.interface';

export interface IInventoryItem {
  name: string;
  icon: string;
  type: ItemType;
  description: string;
  rarity: ItemRarity;
  effect?: number;
  statTarget?: keyof ICharacteristics;
  cost?: number;
}

export interface IInventoryItemInstance extends IInventoryItem {
  amount: number;
}

export interface IInventoryBag {}
