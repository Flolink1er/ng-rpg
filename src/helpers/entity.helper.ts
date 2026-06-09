import { ENEMY_DATA } from '../app/data/enemy.data';
import { EnemyRaceType, KindEnemy } from '../app/enums/enemy-race-type.enum';
import { MapType } from '../app/enums/map-type.enum';
import { IEnemy, IEnemyInstance } from '../app/models/enemy.interface';

export class EntityHelper {
  private static _enemiesTemplate: IEnemy[] = ENEMY_DATA;
  private static BOSS_RATIO = 2;
  private static ELITE_RATIO = 1.3;

  public static KindMap: Record<number, KindEnemy> = {
    0: KindEnemy.Normal,
    1: KindEnemy.Elite,
    2: KindEnemy.Boss,
  };

  public static RatioMap: Record<KindEnemy, number> = {
    [KindEnemy.Normal]: 1,
    [KindEnemy.Elite]: EntityHelper.ELITE_RATIO,
    [KindEnemy.Boss]: EntityHelper.BOSS_RATIO,
  };

  public static RaceMapForest: Record<number, EnemyRaceType> = {
    0: EnemyRaceType.Gobelin,
    1: EnemyRaceType.Loup,
    2: EnemyRaceType.Troll,
  };

  public static RaceMapDungeon: Record<number, EnemyRaceType> = {
    0: EnemyRaceType.Squelette,
    1: EnemyRaceType.MageSombre,
    2: EnemyRaceType.Liche,
  };

  public static RaceMapMountain: Record<number, EnemyRaceType> = {
    0: EnemyRaceType.Harpie,
    1: EnemyRaceType.Golem,
    2: EnemyRaceType.Dragon,
  };

  public static getKindByNumbers(randNum: number[]): KindEnemy[] {
    return randNum.map((n) => EntityHelper.KindMap[n] ?? KindEnemy.Normal);
  }

  public static getRaceByNumbers(randNum: number[], zone: MapType): EnemyRaceType[] {
    switch (zone) {
      case MapType.Forest:
        return randNum.map((n) => EntityHelper.RaceMapForest[n] ?? EnemyRaceType.Gobelin);
        break;
      case MapType.Dungeon:
        return randNum.map((n) => EntityHelper.RaceMapDungeon[n] ?? EnemyRaceType.Gobelin);
        break;
      case MapType.Mountain:
        return randNum.map((n) => EntityHelper.RaceMapMountain[n] ?? EnemyRaceType.Gobelin);
        break;
      default:
        return randNum.map((n) => EntityHelper.RaceMapForest[n] ?? EnemyRaceType.Gobelin);
        break;
    }
  }

  public static enemyRaceToInstance(race: EnemyRaceType, kind: KindEnemy): IEnemyInstance {
    const template = EntityHelper._enemiesTemplate.find((template) => template.race === race)!;
    const ratio = EntityHelper.RatioMap[kind];
    return {
      ...template,
      characteristics: {
        ...template.characteristics,
        hp: template.characteristics.hp * ratio,
        mana: template.characteristics.mana * ratio,
        def: template.characteristics.def * ratio,
        atk: template.characteristics.atk * ratio,
      },
      currentHp: template.characteristics.hp * ratio,
      currentMp: template.characteristics.mana * ratio,
      lvl: 1,
      kind: kind,
    };
  }
}
