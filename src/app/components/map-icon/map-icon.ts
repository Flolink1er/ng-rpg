import { Component, input } from '@angular/core';
import { ZoneInfo } from '../../models/map.interface';
import { MapType } from '../../enums/map-type.enum';

@Component({
  selector: 'app-map-icon',
  imports: [],
  templateUrl: './map-icon.html',
  styleUrl: './map-icon.scss',
})
export class MapIcon {
  public map = input<ZoneInfo>();
  public readonly MapType = MapType;
}
