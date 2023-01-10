import { Character } from '../components'
import { characterModel } from '../database/models/character-models'
import { Classes, Flag } from '../enums'
import { Document } from 'mongoose'
import { DuplicatedUsername } from '../exceptions/duplicated-character'

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

  public async createCharacter(character: Character): Promise<any> {
     (await characterModel.find()).filter(fn => {
      if(fn.name === character.options.name) {
         throw new DuplicatedUsername('This username is already taken!')
      }
    })
    const result: Document = await characterModel.create({...character.options})
        return result
  }
  
}
