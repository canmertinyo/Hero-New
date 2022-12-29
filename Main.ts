import { Archer } from "./components/Archer";
import { Items } from "./components/Items";
import { Mage } from "./components/Mage";
import { Shaman } from "./components/Shaman";
import { Warrior } from "./components/Warrior";
import { Classes } from "./enums/Classes";
import { HeroManager } from "./services/HeroManager";

const shaman1 = new Shaman("yidu", 200, 150, 0);
const shaman2 = new Shaman("Crazy_shaman", 200, 10, 0);
const mage1 = new Mage("deadly", 100, 150, 0);
const warrior1 = new Warrior("pabblo", 100, 150, 0);
const archer1 = new Archer("absolute archer", 100, 150, 0);

const heroManager = new HeroManager();


//item section +
const bigSword = new Items("Big Two Handed Sword", Classes.Warrior, 238238);
const longBow = new Items("Long Bow", Classes.Archer, 102023);

//item section -


warrior1.addItem(bigSword);
archer1.addItem(longBow);


heroManager.addCharacter(shaman1)
heroManager.addCharacter(shaman2)
heroManager.addCharacter(mage1)
heroManager.addCharacter(warrior1)
heroManager.addCharacter(archer1)
heroManager.logAllCharacters();


