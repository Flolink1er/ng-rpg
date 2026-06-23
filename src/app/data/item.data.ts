import { IconByItemType, ItemRarity, ItemType } from '../enums/item-type.enum';
import { IInventoryItemInstance } from '../models/item.interface';

export const ITEMS: IInventoryItemInstance[] = [
  {
    name: 'Petite Potion de soin',
    type: ItemType.POTION,
    description: 'Restaure 30 PV',
    rarity: ItemRarity.COMMON,
    amount: 10,
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
  {
    name: 'Amulette de Gauldur',
    type: ItemType.ACCESSOIRE,
    description: 'Augmente vos charactéristique de 30%',
    rarity: ItemRarity.LEGENDARY,
    amount: 1,
    icon: IconByItemType.Accessoire,
  },
  {
    name: 'Masque de voleur',
    type: ItemType.ARMURE,
    description: 'Augmente votre vitesse de 5, or gagné +5%',
    rarity: ItemRarity.EPIC,
    amount: 1,
    icon: IconByItemType.Armure,
  },
  {
    name: 'Potion Berserk',
    type: ItemType.POTION,
    description:
      "Réduit vos pv de moitié mais vous infligez le double de dégâts jusqu'à la fin du combat",
    rarity: ItemRarity.RARE,
    amount: 5,
    icon: IconByItemType.Potion,
  },
  {
    name: 'Observatum Destinae',
    type: ItemType.ACCESSOIRE,
    description: `Le destin vous apparait tel un flux de données asynchrone, vous ne subissez aucun dégâts pendant un combat.
      \n(Se recharge après 3 combats)`,
    rarity: ItemRarity.MYTHIC,
    amount: 1,
    icon: IconByItemType.Potion,
  },
];
