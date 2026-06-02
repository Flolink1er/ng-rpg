import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GameManagerService } from '../../services/game-manager.service';
import { GameState } from '../../enums/game-state.enum';
import { LogEntryService } from '../../services/log-entry.service';
import { LogEntry } from '../../models/log-entry.interface';

@Component({
  selector: 'app-fight-history',
  imports: [DatePipe],
  templateUrl: './fight-history.html',
  styleUrl: './fight-history.scss',
})
export class FightHistory implements OnInit {
  public logs: LogEntry[] = [];
  public readonly now = Date.now();
  public readonly gameManagerService = inject(GameManagerService);
  public readonly logEntryService = inject(LogEntryService);
  public readonly GameState = GameState;

  public ngOnInit(): void {
    this.logs = [...this.logEntryService.logEntries];
  }
}
