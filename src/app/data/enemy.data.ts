import { EnemyRaceType } from "../enums/enemy-race-type.enum";
import { IEnemy, IEnemyInstance } from "../models/enemy.interface";

export const ENEMY_DATA: IEnemyInstance[] = [
  {
    name: 'Gobelin',
    description: 'Petite créature verte, rapide et sournoise.',
    characteristics: {
      atk: 2,
      def: 3,
      speed: 12,
      hp: 30,
      mana: 0,
    },
    race: EnemyRaceType.Gobelin,
    lvl: 1,
    currentHp: 30,
    currentMp: 0,
    kind: 'normal'
  },{
    name: 'Gobelin',
    description: 'Petite créature verte, rapide et sournoise.',
    characteristics: {
      atk: 2,
      def: 3,
      speed: 12,
      hp: 30,
      mana: 0,
    },
    race: EnemyRaceType.Gobelin,
    lvl: 1,
    currentHp: 30,
    currentMp: 0,
    kind: 'normal'
  },{
    name: 'Gobelin',
    description: 'Petite créature verte, rapide et sournoise.',
    characteristics: {
      atk: 2,
      def: 3,
      speed: 12,
      hp: 30,
      mana: 0,
    },
    race: EnemyRaceType.Gobelin,
    lvl: 1,
    currentHp: 30,
    currentMp: 0,
    kind: 'normal'
  },
  {
    name: 'Gobelin',
    description: 'Petite créature verte, rapide et sournoise.',
    characteristics: {
      atk: 2,
      def: 3,
      speed: 12,
      hp: 30,
      mana: 0,
    },
    race: EnemyRaceType.Gobelin,
    lvl: 1,
    currentHp: 30,
    currentMp: 0,
    kind: 'normal'
  },
  {
    name: 'Troll',
    description: 'Gros monstre avec une force brute, mais lent et particulièrement bête.',
    characteristics: {
      atk: 15 * 1.3,
      def: 10 * 1.3,
      speed: 5 * 1.3,
      hp: 80 * 1.3,
      mana: 0 * 1.3,
    },
    race: EnemyRaceType.Troll,
    lvl: 1,
    currentHp: 80 * 1.3,
    currentMp: 0,
    kind: 'elite'
  },
  {
    name: 'Loup',
    description: 'Animal sauvage rapide et agressif.',
    characteristics: {
      atk: 8 * 1.6,
      def: 8 * 1.6,
      speed: 15 * 1.6,
      hp: 50 * 1.6,
      mana: 0 * 1.6,
    },
    race: EnemyRaceType.Loup,
    lvl: 1,
    currentHp: 50 * 1.6,
    currentMp: 0,
    kind: 'boss'
  },
  {
    name: 'Squelette',
    description: 'Cadavre animé, résistant mais lent.',
    characteristics: {
      atk: 10,
      def: 15,
      speed: 5,
      hp: 60,
      mana: 0,
    },
    race: EnemyRaceType.Squelette,
    lvl: 1,
    currentHp: 60,
    currentMp: 0,
    kind: 'normal'
  },
  {
    name: 'Mage Sombre',
    description: 'Lanceur de sorts maléfique avec des attaques magiques puissantes.',
    characteristics: {
      atk: 15,
      def: 8,
      speed: 8,
      hp: 50,
      mana: 100,
    },
    race: EnemyRaceType.MageSombre,
    lvl: 1,
    currentHp: 50,
    currentMp: 100,
    kind: 'normal'
  },
  {
    name: 'Liche',
    description: 'Puissant sorcier mort-vivant ayant des pouvoirs dévastateurs.',
    characteristics: {
      atk: 20,
      def: 15,
      speed: 5,
      hp: 100,
      mana: 150,
    },
    race: EnemyRaceType.Liche,
    lvl: 1,
    currentHp: 100,
    currentMp: 150,
    kind: 'normal'
  },
  {
    name: 'Harpie',
    description: 'Créature volante rapide et agressive. Personnification de la tempête et du chaos.',
    characteristics: {
      atk: 12,
      def: 8,
      speed: 15,
      hp: 50,
      mana: 0,
    },
    race: EnemyRaceType.Harpie,
    lvl: 1,
    currentHp: 50,
    currentMp: 0,
    kind: 'normal'
  },
  {
    name: 'Golem',
    description: 'Créature de élémentale avec une défense élevée.',
    characteristics: {
      atk: 15,
      def: 20,
      speed: 5,
      hp: 100,
      mana: 0,
    },
    race: EnemyRaceType.Golem,
    lvl: 1,
    currentHp: 100,
    currentMp: 0,
    kind: 'normal'
  },
  {
    name: 'Dragon',
    description: 'Créature légendaire avec une puissance dévastatrice.',
    characteristics: {
      atk: 25,
      def: 25,
      speed: 10,
      hp: 200,
      mana: 200,
    },
    race: EnemyRaceType.Dragon,
    lvl: 1,
    currentHp: 200,
    currentMp: 200,
    kind: 'normal'
  }
]
