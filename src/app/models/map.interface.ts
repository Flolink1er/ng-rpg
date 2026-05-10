import { MapType } from "../enums/map-type.enum";

export interface ZoneInfo {
  id: MapType;
  name: string;
  description: string;
  icon: string;
  difficulty: string;
  difficultyColor: string;
  minLevel: number;
  enemies: string;
}
