import { Component } from '@angular/core';
import { USER_CHOICES_CLASS } from '../../data/class.data';

@Component({
  selector: 'app-create-character-page',
  imports: [],
  templateUrl: './create-character-page.html',
  styleUrl: './create-character-page.scss',
})
export class CreateCharacterPage {
  public readonly data = USER_CHOICES_CLASS;
}
