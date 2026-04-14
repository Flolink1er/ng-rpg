import { Component } from '@angular/core';
import { GameHeader } from "../../components/game-header/game-header";
import { player1 } from '../../data/player.mock';

@Component({
  selector: 'app-city-page',
  imports: [GameHeader],
  templateUrl: './city-page.html',
  styleUrl: './city-page.scss',
})
export class CityPage {
  public readonly player = player1;
}
