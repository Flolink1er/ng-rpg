import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { PlayerService } from '../../services/player.service';
import { GameManagerService } from '../../services/game-manager.service';
import { IPlayer } from '../../models/player.interface';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
    public readonly playerService = inject(PlayerService);
    public readonly gameManagerService = inject(GameManagerService);
    public readonly router = inject(Router);
    private themeService = inject(ThemeService);

    public initGameWithSavedPLayer(player : IPlayer): void{
      this.gameManagerService.initGame(player);
      this.themeService.setTheme(player.name);
      this.router.navigateByUrl('/map');
    }
}
