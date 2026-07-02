import { Component, input, OnInit, signal } from '@angular/core';
import { IPlayer } from '../../models/player.interface';
import { IconByItemType, ItemRarity, ItemType } from '../../enums/item-type.enum';
import { TabulateDescriptionPipe } from '../../pipes/tabulate-description-pipe.ts-pipe';
import { ItemHelper } from '../../helpers/item.helper';
import { NgClass, NgComponentOutlet } from '@angular/common';
import { IInventoryItemInstance } from '../../models/item.interface';

@Component({
  selector: 'app-player-inventory-bag',
  imports: [TabulateDescriptionPipe, NgClass],
  templateUrl: './player-inventory-bag.html',
  styleUrl: './player-inventory-bag.scss',
})
export class PlayerInventoryBag implements OnInit {
  public readonly player = input.required<IPlayer>();
  public readonly ItemTypeList = Object.values(ItemType);
  public readonly ItemType = ItemType;
  public readonly IconByItemType = IconByItemType;
  public currentFilter = signal<ItemType>(ItemType.ALL);
  public itemsToShow = signal<IInventoryItemInstance[]>([]);

  ngOnInit() {
    this.itemsToShow.set(this.player().inventory);
  }

  public filterItems(category: ItemType) {
    if (category === ItemType.ALL) {
      this.itemsToShow.set(this.player().inventory);
    } else {
      this.itemsToShow.set(ItemHelper.filterItemsByCategory(this.player().inventory, category));
    }
    this.currentFilter.set(category);
  }
}
