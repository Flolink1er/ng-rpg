import { Component } from '@angular/core';
import { player1 } from '../../data/player.mock';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-player-summary',
  imports: [NgClass],
  templateUrl: './player-summary.html',
  styleUrl: './player-summary.scss',
})
export class PlayerSummary {
  readonly player = player1;

}
