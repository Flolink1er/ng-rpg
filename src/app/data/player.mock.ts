import { ClassType } from "../enums/class-type.enum";
import { Player } from "../models/player";

export const player1 : Player = new Player(
  'Luinil',
  {
    type: ClassType.Mage,
    name: 'Mage',
    description: 'Lanceur de sorts avec une puissance magique dévastatrice.',
    features: ['Gros dégâts', 'Sorts puissants', 'Soin'],
    characteristics: {
      atk: 20,
      def: 5,
      speed: 10,
      hp: 70,
      mana: 100,
    }
  },
  5
)
