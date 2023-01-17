import { CharacterType } from '../enums'
import { ICharacter } from '../interfaces/character.interface'
import { Character } from './index'

export class Shaman extends Character {
  public characterType?: CharacterType

  constructor(public options: ICharacter) {
    super(options)
    this.characterType = CharacterType.Shaman
  }

  public heal(character: Character): void {
    if (!character) throw new Error('Character is empty!')
    console.log(`${this.options.name} is healing to ${character.options.name}`)
  }
}
