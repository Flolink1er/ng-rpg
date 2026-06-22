export enum ItemType {
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
}

export const IconByItemType: Record<ItemType, string> = {
  [ItemType.POTION]: '🧪',
  [ItemType.ARME]: '🗡️',
  [ItemType.ARMURE]: '🛡️',
  [ItemType.ACCESSOIRE]: '💍',
};
