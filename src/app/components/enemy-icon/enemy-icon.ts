import { Component, input } from '@angular/core';
import { EnemyRaceType } from '../../enums/enemy-race-type.enum';

@Component({
  selector: 'app-enemy-icon',
  imports: [],
  templateUrl: './enemy-icon.html',
  styleUrl: './enemy-icon.scss',
})
export class EnemyIcon {
  public readonly type = input<EnemyRaceType>();
  public readonly EnemyRaceType = EnemyRaceType;
}
