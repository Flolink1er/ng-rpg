import { EquipableSlot, ItemRarity, ItemType } from '../enums/item-type.enum';
import { ICharacteristics } from './character.interface';

export interface IInventoryItem {
  name: string;
  icon: string;
  type: ItemType;
  description: string;
  rarity: ItemRarity;
}

export interface IInventoryItemUsable extends IInventoryItem {}

export interface IInventoryItemEquipable extends IInventoryItem {
  slot: EquipableSlot;
  effect?: number[];
  statTarget?: keyof ICharacteristics[];
}

export interface IInventoryItemInstance extends IInventoryItem {
  amount: number;
}

export interface IShopItemInstance extends IInventoryItem {
  cost: number;
}
