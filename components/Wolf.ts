import { CharacterType, Flag } from '../enums'
import { ICharacter } from '../interfaces/character.interface'
import { Character } from './index'

export class Wolf extends Character {
  public characterType?: CharacterType

  constructor(public options: ICharacter) {
    super(options)
    this.characterType = CharacterType.Wolf
  }
}
