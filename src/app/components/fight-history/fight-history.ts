import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-fight-history',
  imports: [DatePipe],
  templateUrl: './fight-history.html',
  styleUrl: './fight-history.scss',
})
export class FightHistory {
  public readonly now = Date.now();
}
