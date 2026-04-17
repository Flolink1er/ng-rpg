import { Component, inject } from '@angular/core';
import { GameHeader } from "../../components/game-header/game-header";
import { PlayerInventorySummary } from "../../components/player-inventory-summary/player-inventory-summary";
import { PlayerInventoryBag } from '../../components/player-inventory-bag/player-inventory-bag';
import { RouterLink } from '@angular/router';
import { GameManagerService } from '../../services/game-manager.service';

@Component({
  selector: 'app-inventory-page',
  imports: [GameHeader, PlayerInventorySummary, PlayerInventoryBag, RouterLink],
  templateUrl: './inventory-page.html',
  styleUrl: './inventory-page.scss',
})
export class InventoryPage {
  public readonly gameManagerService = inject(GameManagerService);

}
