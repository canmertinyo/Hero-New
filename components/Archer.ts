import { Classes, Flag } from '../enums'
import { ICharacter } from '../interfaces/character-interface'
import { Character } from './character'

export class Archer extends Character {
  public classes?: Classes

  constructor(public options: ICharacter) {
    super(options)
    this.classes = Classes.Archer
  }
}
