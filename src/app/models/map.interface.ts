import { MapType } from '../enums/map-type.enum';
import { ZoneMap } from '../enums/zone.enum';

export interface ZoneInfo {
  id: MapType;
  name: string;
  description: string;
  icon: string;
  difficulty: string;
  difficultyColor: string;
  minLevel: number;
  enemies: string;
  zone: MapType;
}
