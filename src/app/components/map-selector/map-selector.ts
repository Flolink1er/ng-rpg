import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-map-selector',
  imports: [RouterLink, NgClass],
  templateUrl: './map-selector.html',
  styleUrl: './map-selector.scss',
})
export class MapSelector {
  public readonly lvl = input.required<number>();

  public readonly zoneSelected = output<string>();
}
