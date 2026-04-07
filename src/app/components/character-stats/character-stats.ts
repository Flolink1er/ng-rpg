import { Component, input } from '@angular/core';
import { ICharacter } from '../../models/character.interface';

@Component({
  selector: 'app-character-stats',
  imports: [],
  templateUrl: './character-stats.html',
  styleUrl: './character-stats.scss',
})
export class CharacterStats {
  public character = input.required<ICharacter>();

}
