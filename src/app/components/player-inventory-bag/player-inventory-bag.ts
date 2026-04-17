import { Component, input } from '@angular/core';
import { Player } from '../../models/player';
import { IPlayer } from '../../models/player.interface';

@Component({
  selector: 'app-player-inventory-bag',
  imports: [],
  templateUrl: './player-inventory-bag.html',
  styleUrl: './player-inventory-bag.scss',
})
export class PlayerInventoryBag {
  public readonly player = input.required<IPlayer>();

}
