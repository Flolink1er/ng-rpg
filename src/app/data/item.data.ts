import { IconByItemType, ItemRarity, ItemType } from '../enums/item-type.enum';
import { IInventoryItemInstance } from '../models/item.interface';

export const ITEMS: IInventoryItemInstance[] = [
  {
    name: 'Petite Potion de soin',
    type: ItemType.POTION,
    description: 'Restaure 30 PV',
    rarity: ItemRarity.COMMON,
    amount: 5,
    icon: IconByItemType.Potion,
  },
  {
    name: 'Épée en bois',
    type: ItemType.ARME,
    description: 'Inflige 5 de dégats',
    rarity: ItemRarity.RARE,
    amount: 1,
    icon: IconByItemType.Arme,
  },
  {
    name: 'Bouclier Miroir',
    type: ItemType.ARMURE,
    description: 'Réduit les dégats reçus de 50% et renvoie 25% des dégats infligés',
    rarity: ItemRarity.LEGENDARY,
    amount: 1,
    icon: IconByItemType.Armure,
  },
];
