import { Component, inject } from '@angular/core';
import { GameHeader } from '../../components/game-header/game-header';
import { player1 } from '../../data/player.mock';
import { ActivatedRoute } from '@angular/router';
import { GameManagerService } from '../../services/game-manager.service';
import { PlayerService } from '../../services/player.service';
import { Shop } from '../../components/shop/shop';
import { Hostel } from '../../components/hostel/hostel';

@Component({
  selector: 'app-city-page',
  imports: [GameHeader, Shop, Hostel],
  templateUrl: './city-page.html',
  styleUrl: './city-page.scss',
})
export class CityPage {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly playerService = inject(PlayerService);
  public readonly gameManagerService = inject(GameManagerService);
  public readonly player = this.gameManagerService.currentPlayer;
}
