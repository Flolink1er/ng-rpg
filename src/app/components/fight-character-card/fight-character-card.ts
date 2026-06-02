import { Component, computed, inject, input } from '@angular/core';
import { IPlayer } from '../../models/player.interface';
import { NgClass } from '@angular/common';
import { IBaseEntity } from '../../models/character.interface';
import { ClassIcon } from "../class-icon/class-icon";
import { ENEMY_DATA } from '../../data/enemy.data';
import { Random } from '../../services/random.service';
import { GameManagerService } from '../../services/game-manager.service';
import { EnemyIcon } from "../enemy-icon/enemy-icon";

@Component({
  selector: 'app-fight-character-card',
  imports: [NgClass, ClassIcon, EnemyIcon],
  templateUrl: './fight-character-card.html',
  styleUrl: './fight-character-card.scss',
})
export class FightCharacterCard {
  // public readonly entity = input.required<IBaseEntity>();
  public gameManagerService = inject(GameManagerService);
  public readonly isPlayer = input.required<boolean>();
  public readonly player = computed(()=> this.gameManagerService.currentPlayer);
  public readonly enemy = computed(()=> this.gameManagerService.currentEnemy)
  public ENEMYDATATEMPLATE = '_blank'
}
