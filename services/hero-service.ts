import { Character } from '../components'
import { characterModel } from '../database/models/character-models'
import { Classes, Flag } from '../enums'
import { Document } from 'mongoose'

export class HeroService {
  public characters: Character[] = []

  public addCharacter(character: Character): string {
    return JSON.stringify(this.characters.push(character), null, 5)
  }

  public logAllCharacters(): void {
    return this.characters.forEach((hero) => console.log(hero))
  }

  public logFlags(flag: Flag): Character[] {
    return this.characters.filter((hero) =>
      hero.options.flag != flag ? null : JSON.stringify(hero, null, 4)
    )
  }

  public logSpecificClass(heroType: Classes): void {
    console.log(
      this.characters.filter((hero) => (hero.classes != heroType ? null : JSON.stringify(hero)))
    )
  }

  public async addCharacterToDatabase(character: Character): Promise<Document> {
    const result: Document = await characterModel.create({
      name: character.options.name,
      level: character.options.level,
      maxFoodLevel: character.options.maxFoodLevel,
      foodLevel: character.options.foodLevel,
      health: character.options.health,
      flag: character.options.flag
    })
    return result
  }
}
