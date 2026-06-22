import { Component, computed, input } from '@angular/core';
import { Player } from '../../models/player';
import { ICharacteristics } from '../../models/character.interface';
import { IPlayer } from '../../models/player.interface';
import { InterfaceDigitsPipe } from '../../pipes/interface-digits-pipe';

@Component({
  selector: 'app-player-inventory-summary',
  imports: [InterfaceDigitsPipe],
  templateUrl: './player-inventory-summary.html',
  styleUrl: './player-inventory-summary.scss',
})
export class PlayerInventorySummary {
  public readonly player = input.required<IPlayer>();
}
