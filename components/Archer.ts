import { CharacterType, Flag } from '../enums'
import { ICharacter } from '../interfaces/character-interface'
import { Character } from './character'

export class Archer extends Character {
  public characterType?: CharacterType

  constructor(public options: ICharacter) {
    super(options)
    this.characterType = CharacterType.Archer
  }
}
