import { ClassType } from '../enums/class-type.enum';
import { ICharacter } from '../models/character.interface';

export const USER_CHOICES_CLASS: ICharacter[] = [
  {
    type: ClassType.Warrior,
    name: 'Guerrier',
    description: 'Tank robuste avec une grande résistance.',
    features: ['Haute défense', 'Beaucoup de PV', 'Durable'],
    characteristics: {
      atk: 15,
      def: 12,
      speed: 8,
      hp: 120,
      mana: 30,
    },
  },
  {
    type: ClassType.Mage,
    name: 'Sorcier',
    description: 'Lanceur de sorts avec une puissance magique dévastatrice.',
    features: ['Gros dégâts', 'Sorts puissants', 'Soin'],
    characteristics: {
      atk: 20,
      def: 5,
      speed: 10,
      hp: 70,
      mana: 100,
    },
  },
  {
    type: ClassType.Rogue,
    name: 'Voleur',
    description: 'Assassin agile qui frappe vite et fort.',
    features: ['Haute vitesse', 'Coups critiques', 'Esquive'],
    characteristics: {
      atk: 18,
      def: 8,
      speed: 15,
      hp: 90,
      mana: 50,
    },
  },
];
