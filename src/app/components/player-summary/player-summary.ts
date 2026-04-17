import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { IPlayer } from '../../models/player.interface';
import { IconByType } from '../../enums/class-type.enum';

@Component({
  selector: 'app-player-summary',
  imports: [NgClass],
  templateUrl: './player-summary.html',
  styleUrl: './player-summary.scss',
})
export class PlayerSummary {
  public readonly player = input.required<IPlayer>();
  public IconByType = IconByType;
}
