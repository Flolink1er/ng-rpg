import { Component } from '@angular/core';
import { USER_CHOICES_CLASS } from '../../data/class.data';
import { ClassType } from '../../enums/class-type.enum';
import { ICharacter } from '../../models/character.interface';
import { NgClass } from '@angular/common';
import { CharacterCard } from "../../components/character-card/character-card";

@Component({
  selector: 'app-create-character-page',
  imports: [NgClass, CharacterCard],
  templateUrl: './create-character-page.html',
  styleUrl: './create-character-page.scss',
})
export class CreateCharacterPage {
  public readonly data = USER_CHOICES_CLASS;
  public readonly ClassType = ClassType;

  public selectedCharacter ?: ICharacter;

  public onSelect(character: ICharacter){
    if (this.selectedCharacter?.type === character.type){
      this.selectedCharacter = undefined;
    }else{
      this.selectedCharacter = character;
      this.setTheme(this.selectedCharacter?.type);
    }
  }

  setTheme(classe: string) {
  const root = document.documentElement;

  if (classe === 'warrior') {
    root.style.setProperty('--primary', '#F97316'); // orange
    root.style.setProperty('--secondary', '#DC2626'); // rouge
  }

  if (classe === 'mage') {
    root.style.setProperty('--primary', '#00E5FF'); // cyan
    root.style.setProperty('--secondary', '#7C3AED'); // violet
  }

  if (classe === 'rogue') {
    root.style.setProperty('--primary', '#22C55E'); // vert
    root.style.setProperty('--secondary', '#4ADE80');
  }
}
}
