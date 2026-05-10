import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ZoneInfo } from '../../models/map.interface';
import { MapDifficulty, MapType } from '../../enums/map-type.enum';
import { MapIcon } from "../map-icon/map-icon";

@Component({
  selector: 'app-map-selector',
  imports: [RouterLink, NgClass, MapIcon],
  templateUrl: './map-selector.html',
  styleUrl: './map-selector.scss',
})
export class MapSelector {
  public readonly lvl = input.required<number>();

  public readonly zoneSelected = output<ZoneInfo>();

  public readonly MapDifficulty = MapDifficulty;

  public readonly zones: ZoneInfo[] = [
    {
      id: MapType.Forest,
      name: 'Forêt des Ombres',
      description: 'Une forêt mystérieuse peuplée de créatures sauvages.',
      icon: '🌲',
      difficulty: MapDifficulty.Facile,
      difficultyColor: '#2ecc71',
      minLevel: 1,
      enemies: 'Loups, Gobelins, Trolls',
    },
    {
      id: MapType.Dungeon,
      name: 'Donjon Maudit',
      description: 'Un donjon sombre abritant des morts-vivants et des mages noirs.',
      icon: '🏚️',
      difficulty: MapDifficulty.Moyen,
      difficultyColor: '#f39c12',
      minLevel: 3,
      enemies: 'Squelettes, Mages Sombres, Liche',
    },
    {
      id: MapType.Mountain,
      name: 'Montagnes du Chaos',
      description: 'Des sommets dangereux habités par des créatures légendaires.',
      icon: '⛰️',
      difficulty: MapDifficulty.Difficile,
      difficultyColor: '#e74c3c',
      minLevel: 5,
      enemies: 'Harpies, Golems, Dragon',
    },
  ];
}
