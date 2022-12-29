"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroManager = void 0;
class HeroManager {
    constructor() {
        this.characters = [];
    }
    addCharacter(character) {
        this.characters.push(character);
    }
    logAllCharacters() {
        this.characters.forEach((hero => {
            console.log(hero);
        }));
    }
}
exports.HeroManager = HeroManager;
