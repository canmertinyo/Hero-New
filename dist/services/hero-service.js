"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroService = void 0;
class HeroService {
    constructor() {
        this.characters = [];
    }
    addCharacter(character) {
        return JSON.stringify(this.characters.push(character), null, 5);
    }
    logAllCharacters() {
        return this.characters.forEach((hero => console.log(hero)));
    }
    logFlags(flag) {
        return this.characters.filter(hero => hero.flag != flag ? null : JSON.stringify(hero, null, 4));
    }
    logSpecificClass(heroType) {
        console.log(this.characters.filter(hero => hero.classes != heroType ? null : JSON.stringify(hero)));
    }
}
exports.HeroService = HeroService;
