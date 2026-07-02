export enum ItemType {
  ALL = 'Tout',
  POTION = 'Potion',
  ARME = 'Arme',
  ARMURE = 'Armure',
  ACCESSOIRE = 'Accessoire',
}

export enum ItemRarity {
  COMMON = 'Common',
  RARE = 'Rare',
  EPIC = 'Epic',
  LEGENDARY = 'Legendary',
  MYTHIC = 'Mythic',
}

export const IconByItemType: Record<ItemType, string> = {
  [ItemType.ALL]: '',
  [ItemType.POTION]: '🧪',
  [ItemType.ARME]: '🗡️',
  [ItemType.ARMURE]: '🛡️',
  [ItemType.ACCESSOIRE]: '💍',
};

export enum EquipableSlot {
  WEAPON = 'Weapon',
  ARMOR = 'Armor',
  ACCESSORY = 'Accessory',
}
