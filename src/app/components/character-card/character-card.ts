import { Component, input, output } from '@angular/core';
import { ClassType } from '../../enums/class-type.enum';
import { ICharacter } from '../../models/character.interface';
import { ClassIcon } from "../class-icon/class-icon";
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-character-card',
  imports: [ClassIcon],
  templateUrl: './character-card.html',
  styleUrl: './character-card.scss',
})
export class CharacterCard {
  public readonly ClassType = ClassType;
  public readonly item = input.required<ICharacter>();
  public readonly isSelected = input.required<boolean>();

  public cardSelected = output<void>();

  constructor(public themeService: ThemeService){} //injection du service
}
