"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archer_1 = require("./components/Archer");
const Items_1 = require("./components/Items");
const Mage_1 = require("./components/Mage");
const Shaman_1 = require("./components/Shaman");
const Warrior_1 = require("./components/Warrior");
const Classes_1 = require("./enums/Classes");
const Flag_1 = require("./enums/Flag");
const hero_service_1 = require("./services/hero-service");
const shaman1 = new Shaman_1.Shaman("yidu", 200, 150, 0, 100, Flag_1.Flag.Chunjo);
const shaman2 = new Shaman_1.Shaman("Crazy_shaman", 200, 10, 0, 100, Flag_1.Flag.Chunjo);
const mage1 = new Mage_1.Mage("deadly", 100, 150, 0, 0, Flag_1.Flag.Chunjo);
const warrior1 = new Warrior_1.Warrior("pabblo", 100, 150, 0, 0, Flag_1.Flag.Shinso);
const archer1 = new Archer_1.Archer("absolute archer", 100, 150, 0, 0, Flag_1.Flag.Jinnu);
const heroService = new hero_service_1.HeroService();
//item section +
const bigSword = new Items_1.Items("Big Two Handed Sword", Classes_1.Classes.Warrior, 238238);
const longBow = new Items_1.Items("Long Bow", Classes_1.Classes.Archer, 102023);
const minBell = new Items_1.Items("Antique Bell", Classes_1.Classes.Shaman, 238123);
//item section -
warrior1.addItem(bigSword);
archer1.addItem(longBow);
shaman1.addItem(minBell);
heroService.addCharacter(shaman1);
heroService.addCharacter(shaman2);
heroService.addCharacter(mage1);
heroService.addCharacter(warrior1);
heroService.addCharacter(archer1);
// warrior1.respawn(false);
//console.log(archer1.respawn())
// console.log(shaman1.eat(100))
// console.log(shaman1.eat(50))
// console.log(shaman1.eat(50))
// console.log(shaman1.health)
// console.log(shaman1.respawn())
// heroService.logAllCharacters()
// console.log(heroService.logFlags(Flag.Chunjo))
// console.log(heroService.logFlags(Flag.Shinso))
console.log(heroService.logSpecificClass(Classes_1.Classes.Mage));
