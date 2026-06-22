import { Component, input } from '@angular/core';
import { Player } from '../../models/player';
import { IPlayer } from '../../models/player.interface';
import { IconByItemType, ItemType } from '../../enums/item-type.enum';
import { ITEMS } from '../../data/item.data';

@Component({
  selector: 'app-player-inventory-bag',
  imports: [],
  templateUrl: './player-inventory-bag.html',
  styleUrl: './player-inventory-bag.scss',
})
export class PlayerInventoryBag {
  public readonly player = input.required<IPlayer>();
  public readonly ItemTypeList = Object.values(ItemType);
  public readonly ItemType = ItemType;
  public readonly IconByItemType = IconByItemType;
  public readonly ITEMS = ITEMS;
}
