"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archer_1 = require("./components/Archer");
const Items_1 = require("./components/Items");
const Mage_1 = require("./components/Mage");
const Shaman_1 = require("./components/Shaman");
const Warrior_1 = require("./components/Warrior");
const Classes_1 = require("./enums/Classes");
const HeroManager_1 = require("./services/HeroManager");
const shaman1 = new Shaman_1.Shaman("yidu", 200, 150, 0, 100);
const shaman2 = new Shaman_1.Shaman("Crazy_shaman", 200, 10, 0, 100);
const mage1 = new Mage_1.Mage("deadly", 100, 150, 0, 0);
const warrior1 = new Warrior_1.Warrior("pabblo", 100, 150, 0, 0);
const archer1 = new Archer_1.Archer("absolute archer", 100, 150, 0, 0);
const heroManager = new HeroManager_1.HeroManager();
//item section +
const bigSword = new Items_1.Items("Big Two Handed Sword", Classes_1.Classes.Warrior, 238238);
const longBow = new Items_1.Items("Long Bow", Classes_1.Classes.Archer, 102023);
const minBell = new Items_1.Items("Antique Bell", Classes_1.Classes.Shaman, 238123);
//item section -
warrior1.addItem(bigSword);
archer1.addItem(longBow);
shaman1.addItem(minBell);
heroManager.addCharacter(shaman1);
heroManager.addCharacter(shaman2);
heroManager.addCharacter(mage1);
heroManager.addCharacter(warrior1);
heroManager.addCharacter(archer1);
heroManager.logAllCharacters();
// warrior1.respawn(false);
//console.log(archer1.respawn())
console.log(shaman1.eat(100));
console.log(shaman1.eat(50));
console.log(shaman1.eat(50));
console.log(shaman1.health);
console.log(shaman1.respawn());
