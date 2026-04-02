import { Component, input, output } from '@angular/core';
import { ClassType } from '../../enums/class-type.enum';
import { ICharacter } from '../../models/character.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.html',
  styleUrl: './character-card.scss',
})
export class CharacterCard {
  public readonly ClassType = ClassType;
  public readonly item = input.required<ICharacter>();
  public readonly isSelected = input.required<boolean>();

  public cardSelected = output<void>();



}
