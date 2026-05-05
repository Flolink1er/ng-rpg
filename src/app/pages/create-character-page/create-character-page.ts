import { Component, inject } from '@angular/core';
import { USER_CHOICES_CLASS } from '../../data/class.data';
import { ClassType } from '../../enums/class-type.enum';
import { ICharacter } from '../../models/character.interface';
import { NgClass } from '@angular/common';
import { CharacterCard } from "../../components/character-card/character-card";
import { ThemeService } from '../../services/theme';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { IPlayer } from '../../models/player.interface';
import { GameManagerService } from '../../services/game-manager.service';

@Component({
  selector: 'app-create-character-page',
  imports: [NgClass, CharacterCard, ReactiveFormsModule],
  templateUrl: './create-character-page.html',
  styleUrl: './create-character-page.scss',
})
export class CreateCharacterPage {
  public readonly data = USER_CHOICES_CLASS;
  public readonly ClassType = ClassType;
  public readonly nameFormControl = new FormControl('', [Validators.required]);
  public readonly router = inject(Router);
  public readonly playerService = inject(PlayerService);
  public readonly gameManagerService = inject(GameManagerService);

  public selectedCharacter ?: ICharacter;

  constructor(private themeService: ThemeService){} //injection du service

  public onSelect(character: ICharacter){
    if (this.selectedCharacter?.type === character.type){
      this.selectedCharacter = undefined;
      this.themeService.setTheme('Default');
    }else{
      this.selectedCharacter = character;

      switch (this.selectedCharacter?.type){
        case ClassType.Mage :
          this.themeService.setTheme('Mage');
          break;
        case ClassType.Rogue :
          this.themeService.setTheme('Rogue');
          break;
        case ClassType.Warrior :
          this.themeService.setTheme('Warrior');
          break;
      }
    }
  }

  public createCharacter():void{
    if (this.nameFormControl.valid && this.selectedCharacter){
      const player : IPlayer = {
        ...this.selectedCharacter,
        pseudo: this.nameFormControl.value!,
        lvl : 1,
        currentHp: this.selectedCharacter.characteristics.hp,
        currentMp: this.selectedCharacter.characteristics.mana,
        currentXp: 0,
        money: 50
      };

      this.playerService.add(player);
      this.initGameWithNewUser(player.pseudo);
      this.router.navigateByUrl(`/map`);
    }
  }

  private initGameWithNewUser(playerPseudo: string){
    const player = this.playerService.getUserByPseudo(playerPseudo);
      if(player){
        this.gameManagerService.initGame(player);
      }
  }
}
