import { ItemRarity, ItemType } from '../enums/item-type.enum';
import { IInventoryItemInstance, IShopItemInstance } from '../models/item.interface';

export class ItemHelper {
  static _RARITY_ORDER = [
    ItemRarity.MYTHIC,
    ItemRarity.LEGENDARY,
    ItemRarity.EPIC,
    ItemRarity.RARE,
    ItemRarity.COMMON,
  ];

  public static sortItemsByRarity<T extends IInventoryItemInstance | IShopItemInstance>(
    items: T[],
    direction: 'Asc' | 'Desc' = 'Desc',
  ): T[] {
    if (direction == 'Desc') {
      return [...items].sort(
        (a, b) =>
          ItemHelper._RARITY_ORDER.indexOf(a.rarity) - ItemHelper._RARITY_ORDER.indexOf(b.rarity),
      );
    } else {
      return [...items].sort(
        (a, b) =>
          ItemHelper._RARITY_ORDER.indexOf(b.rarity) - ItemHelper._RARITY_ORDER.indexOf(a.rarity),
      );
    }
  }

  public static filterItemsByCategory<T extends IInventoryItemInstance | IShopItemInstance>(
    items: T[],
    category: ItemType,
  ) {
    return items.filter((items) => items.type == category);
  }

  public static fromShopToInventory(item: IShopItemInstance): IInventoryItemInstance {
    return {
      ...item,
      amount: 1,
    };
  }
}
