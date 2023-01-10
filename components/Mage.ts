import { CharacterType, Flag } from '../enums'
import { ICharacter } from '../interfaces/character-interface'
import { Character } from './index'

export class Mage extends Character {
  public characterType?: CharacterType

  constructor(public options: ICharacter) {
    super(options)
    this.characterType = CharacterType.Mage
  }
}
