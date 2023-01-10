import { Character } from '../components'
import { characterModel } from '../database/models/character-models'
import { CharacterType, Flag } from '../enums'
import { DuplicatedUsernameException } from '../exceptions/duplicated-character-exception'
import { ICharacter } from '../interfaces/character-interface'

export class HeroService {
  public characters: Character[] = []

  public async logAllCharacters(): Promise<void> {
    console.log(await characterModel.find({}).select('name level flag'))
  }

  public async logFlags(flag: Flag): Promise<void> {
    console.log(await characterModel.find({ flag: flag }))
  }

  public logSpecificClass(heroType: CharacterType): void {
    console.log(
      this.characters.filter((hero) =>
        hero.characterType != heroType ? null : JSON.stringify(hero)
      )
    )
  }

  public async createCharacter(character: Character): Promise<ICharacter> {
    const isCharacterExists = await characterModel.findOne({ name: character.options.name })

    if (isCharacterExists) {
      throw new DuplicatedUsernameException()
    }
    return characterModel.create({ ...character.options })
  }
}
