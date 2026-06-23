import { Component, input } from '@angular/core';
import { Player } from '../../models/player';
import { IPlayer } from '../../models/player.interface';
import { IconByItemType, ItemRarity, ItemType } from '../../enums/item-type.enum';
import { ITEMS } from '../../data/item.data';
import { TabulateDescriptionPipe } from '../../pipes/tabulate-description-pipe.ts-pipe';

const RARITY_ORDER = [
  ItemRarity.MYTHIC,
  ItemRarity.LEGENDARY,
  ItemRarity.EPIC,
  ItemRarity.RARE,
  ItemRarity.COMMON,
];

@Component({
  selector: 'app-player-inventory-bag',
  imports: [TabulateDescriptionPipe],
  templateUrl: './player-inventory-bag.html',
  styleUrl: './player-inventory-bag.scss',
})
export class PlayerInventoryBag {
  public readonly player = input.required<IPlayer>();
  public readonly ItemTypeList = Object.values(ItemType);
  public readonly ItemType = ItemType;
  public readonly IconByItemType = IconByItemType;
  public readonly ITEMS = [...ITEMS].sort(
    (a, b) => RARITY_ORDER.indexOf(a.rarity) - RARITY_ORDER.indexOf(b.rarity),
  );
}
