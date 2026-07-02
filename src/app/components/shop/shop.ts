import { Component, inject, input } from '@angular/core';
import { SHOP_ITEMS } from '../../data/item.data';
import { TabulateDescriptionPipe } from '../../pipes/tabulate-description-pipe.ts-pipe';
import { IconByItemType, ItemType } from '../../enums/item-type.enum';
import { ItemHelper } from '../../helpers/item.helper';
import { IShopItemInstance } from '../../models/item.interface';
import { PlayerService } from '../../services/player.service';
import { IPlayer } from '../../models/player.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-shop',
  imports: [TabulateDescriptionPipe, NgClass],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop {
  public readonly items = ItemHelper.sortItemsByRarity(SHOP_ITEMS, 'Asc');
  public readonly IconByItemType = IconByItemType;
  public readonly ItemType = ItemType;
  public readonly PlayerService = inject(PlayerService);
  public readonly player = input.required<IPlayer>();

  public buyItem(item: IShopItemInstance) {
    if (this.player().money >= item.cost) {
      let boughtItem = ItemHelper.fromShopToInventory(item);
      this.PlayerService.addItem(this.player(), boughtItem);
      this.player().money -= item.cost;
    }
  }
}
