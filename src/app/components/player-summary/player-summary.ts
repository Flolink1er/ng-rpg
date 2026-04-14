import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player-summary',
  imports: [NgClass],
  templateUrl: './player-summary.html',
  styleUrl: './player-summary.scss',
})
export class PlayerSummary {
  player = input.required<Player>();
}
