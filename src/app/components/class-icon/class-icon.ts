import { Component, input } from '@angular/core';
import { ClassType } from '../../enums/class-type.enum';

@Component({
  selector: 'app-class-icon',
  imports: [],
  templateUrl: './class-icon.html',
  styleUrl: './class-icon.scss',
})
export class ClassIcon {
  public type = input<ClassType>();
  public readonly ClassType = ClassType;

}
