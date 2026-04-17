import { Component, inject } from '@angular/core';
import { GameHeader } from "../../components/game-header/game-header";
import { player1 } from '../../data/player.mock';
import { ActivatedRoute } from '@angular/router';
import { GameManagerService } from '../../services/game-manager.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-city-page',
  imports: [GameHeader],
  templateUrl: './city-page.html',
  styleUrl: './city-page.scss',
})
export class CityPage {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly playerService = inject(PlayerService);
  public readonly gameManagerService = inject(GameManagerService);


  constructor(){
    this.activatedRoute.params.subscribe((params) =>{
      const playerPseudo = params['pseudo'];
      const player = this.playerService.getUserByPseudo(playerPseudo);
      if(player){
        this.gameManagerService.initGame(player);
        console.log("========GAME INIT========", player);
      }else{
        console.log("=======PLAYER NOT FOUND========");

      }
    });
  }
}
