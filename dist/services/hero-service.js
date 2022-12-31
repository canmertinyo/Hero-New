"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroService = void 0;
class HeroService {
    constructor() {
        this.characters = [];
    }
    addCharacter(character) {
        return this.characters.push(character);
    }
    logAllCharacters() {
        this.characters.forEach((hero => console.log(hero)));
    }
    logFlags(flag) {
        return this.characters.filter(hero => hero.flag != flag ? null : JSON.stringify(hero, null, 4));
    }
    logSpecificClass(heroType) {
        return this.characters.filter(hero => hero.classes != heroType ? null : JSON.stringify(hero, null, 4));
    }
}
exports.HeroService = HeroService;
