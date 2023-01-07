import { Classes, Flag } from '../enums'
import { ICharacter } from '../interfaces/character-interface'
import { Character } from './index'

export class Warrior extends Character {
  public classes?: Classes

  constructor(public options: ICharacter) {
    super(options)
    this.classes = Classes.Warrior
  }
}
