import { Archer } from "./components/Archer";
import { Character } from "./components/Character";
import { CreateCharacter } from "./components/CreateCharacter";
import { Items } from "./components/Items";
import { Mage } from "./components/Mage";
import { Shaman } from "./components/Shaman";
import { Warrior } from "./components/Warrior";
import { Classes } from "./enums/Classes";
import { Flag } from "./enums/Flag";
import { HeroService } from "./services/hero-service";

const heroService = new HeroService();

const shaman1 = new CreateCharacter(new Shaman("yidu1", 200, 150, 0, 100, Flag.Chunjo));
const archer1 = new CreateCharacter(new Archer("archer", 200, 150, 0, 0, Flag.Shinso));
const warrior1 = new CreateCharacter(new Warrior("warrior", 200, 150, 0, 0, Flag.Chunjo));
const mage1 = new CreateCharacter(new Mage("stunning Mage", 100, 130, 140, 100,Flag.Jinnu));





//item section +
const bigSword = new Items("Big Two Handed Sword", Classes.Warrior, 238238);
const longBow = new Items("Long Bow", Classes.Archer, 102023);
const minBell = new Items("Antique Bell", Classes.Shaman, 238123);
const mageStaff = new Items("Staff Basic", Classes.Mage, 2389123)
//item section -


console.log(archer1.character.eat(50));
console.log(archer1.character.eat(50));
console.log(archer1.character.eat(50));
console.log(archer1.character.eat(50));


warrior1.character.attack(shaman1.character)
console.log(mage1.character.addItem(mageStaff));
heroService.addCharacter(shaman1.character)
heroService.addCharacter(archer1.character)
heroService.addCharacter(warrior1.character)
heroService.addCharacter(mage1.character)

heroService.logAllCharacters()