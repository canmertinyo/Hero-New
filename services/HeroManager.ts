import { Character } from "../components/Character";

export class HeroManager {
    characters:Character[] = [];
    addCharacter(character:Character) {
        this.characters.push(character)
    }

    logAllCharacters() {
        this.characters.forEach(( hero => {
            console.log(hero)
        }))
    }
}