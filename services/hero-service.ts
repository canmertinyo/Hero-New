import { Character } from "../components/Character";
import { Classes } from "../enums/Classes";
import { Flag } from "../enums/Flag";

export class HeroService {
    characters: Character[] = [];
    addCharacter(character: Character) {
         return this.characters.push(character)
    }

    logAllCharacters() {
        this.characters.forEach((hero => {
            console.log(hero)
        }));
    }

    logFlags(flag: Flag) {
        return this.characters.filter(hero => hero.flag != flag ? null:JSON.stringify(hero,null,4));
    }

    logSpecificClass(heroType : Classes) {
        return this.characters.filter(hero => hero.classes != heroType ? null:JSON.stringify(hero,null,4));
    }
}