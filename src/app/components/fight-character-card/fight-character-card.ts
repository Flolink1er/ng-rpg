import { Component, input } from '@angular/core';
import { IPlayer } from '../../models/player.interface';
import { NgClass } from '@angular/common';
import { IBaseEntity } from '../../models/character.interface';

@Component({
  selector: 'app-fight-character-card',
  imports: [NgClass],
  templateUrl: './fight-character-card.html',
  styleUrl: './fight-character-card.scss',
})
export class FightCharacterCard {
  // public readonly entity = input.required<IBaseEntity>();
  public readonly isPlayer = input.required<boolean>();
  public readonly player = input.required<IPlayer>();
}
