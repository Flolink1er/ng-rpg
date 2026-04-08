import { ICharacter } from "./character.interface";

export class Player{
  private readonly _name: string;
  private _hero: ICharacter;
  private _level: number;
  private _exp: number;
  private _currentHP: number;
  private _maxHP: number;


  constructor( name: string, hero : ICharacter, level: number, exp: number = 50, currentHP: number = hero.characteristics.hp/2+1, maxHP: number = hero.characteristics.hp){
    this._name = name;
    this._hero = hero;
    this._level = level;
    this._exp = exp;
    this._currentHP = currentHP;
    this._maxHP = maxHP;
  }

  public get name(): string{
    return this._name
  }

  public get hero(): ICharacter{
    return this._hero
  }

  public get level(): number{
    return this._level;
  }

  public get exp(): number{
    return this._exp;
  }

  public get currentHP(): number{
    return this._currentHP;
  }

  public get maxHP(): number{
    return this._maxHP;
  }
}
