import { Component } from '@angular/core';
import { GameHeader } from "../../components/game-header/game-header";
import { player1 } from '../../data/player.mock';
import { PlayerInventorySummary } from "../../components/player-inventory-summary/player-inventory-summary";
import { PlayerInventoryBag } from '../../components/player-inventory-bag/player-inventory-bag';

@Component({
  selector: 'app-inventory-page',
  imports: [GameHeader, PlayerInventorySummary, PlayerInventoryBag],
  templateUrl: './inventory-page.html',
  styleUrl: './inventory-page.scss',
})
export class InventoryPage {
  public readonly player = player1;
}
