import { Component, computed, input } from '@angular/core';
import { Player } from '../../models/player';
import { ICharacteristics } from '../../models/character.interface';

@Component({
  selector: 'app-player-inventory-summary',
  imports: [],
  templateUrl: './player-inventory-summary.html',
  styleUrl: './player-inventory-summary.scss',
})
export class PlayerInventorySummary {
  public readonly player = input.required<Player>();
}
