import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PlayerService } from '../../services/player.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink, NgClass],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
    public readonly playerService = inject(PlayerService);
}
