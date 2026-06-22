import { Component, inject, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { IPlayer } from '../../models/player.interface';
import { ClassIcon } from '../class-icon/class-icon';
import { GameManagerService } from '../../services/game-manager.service';
import { InterfaceDigitsPipe } from '../../pipes/interface-digits-pipe';
import { XpRemainingPipe } from '../../pipes/xp-remaining-pipe';

@Component({
  selector: 'app-player-summary',
  imports: [NgClass, ClassIcon, InterfaceDigitsPipe, XpRemainingPipe],
  templateUrl: './player-summary.html',
  styleUrl: './player-summary.scss',
})
export class PlayerSummary {
  public readonly player = input.required<IPlayer>();
  public readonly GameManagerService = inject(GameManagerService);
}
