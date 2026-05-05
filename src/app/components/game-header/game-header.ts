import { Component, inject, input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { PlayerService } from '../../services/player.service';
import { GameManagerService } from '../../services/game-manager.service';

@Component({
  selector: 'app-game-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './game-header.html',
  styleUrl: './game-header.scss',
})
export class GameHeader {
  public readonly router= inject(Router);
  public readonly money = input.required<number>();
  public readonly lvl = input.required<number>();
  public readonly pseudo = input.required<string>();
  public readonly gameManager = inject(GameManagerService);


  public onSave():void{

  }

  public onExit():void{
    if(confirm('Si vous quittez maintenant toute progression non sauvegardée sera perdue. Voulez-vous continuez ?')){
      this.gameManager.resetGame();
      this.router.navigateByUrl('/landing');
    }
  }
}
