import { Component, inject } from '@angular/core';
import { GameManagerService } from '../../services/game-manager.service';
import { GameHeader } from '../../components/game-header/game-header';
import { FightCharacterCard } from '../../components/fight-character-card/fight-character-card';
import { FightHistory } from '../../components/fight-history/fight-history';
import { FightActions } from '../../components/fight-actions/fight-actions';
import { GameState } from '../../enums/game-state.enum';
import { LogEntry } from '../../models/log-entry.interface';
import { LogEntryService } from '../../services/log-entry.service';

@Component({
  selector: 'app-fight-page',
  imports: [GameHeader, FightCharacterCard, FightHistory, FightActions],
  templateUrl: './fight-page.html',
  styleUrl: './fight-page.scss',
})
export class FightPage {
  public readonly gameManagerService = inject(GameManagerService);
  public readonly GameState = GameState;
  public readonly logEntryService = inject(LogEntryService);

  constructor() {
    this.gameManagerService.startFight();
  }
}
