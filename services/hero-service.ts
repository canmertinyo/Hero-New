import { Character } from '../components/Character'
import { Classes } from '../enums/Classes'
import { Flag } from '../enums/Flag'

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
      hero.flag != flag ? null : JSON.stringify(hero, null, 4)
    )
  }

  public logSpecificClass(heroType: Classes): void {
    console.log(
      this.characters.filter((hero) => (hero.classes != heroType ? null : JSON.stringify(hero)))
    )
  }
}
