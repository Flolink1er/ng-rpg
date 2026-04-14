import { Component, inject, input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { Player } from '../../models/player';

@Component({
  selector: 'app-game-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './game-header.html',
  styleUrl: './game-header.scss',
})
export class GameHeader {
  public readonly router= inject(Router);
  public readonly player = input.required<Player>();

  public onSave():void{

  }

  public onExit():void{
    if(confirm('Si vous quittez maintenant toute progression non sauvegardée sera perdue. Voulez-vous continuez ?'))
    this.router.navigateByUrl('/landing');
  }
}
