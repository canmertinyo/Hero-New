"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archer_1 = require("./components/Archer");
const Items_1 = require("./components/Items");
const Mage_1 = require("./components/Mage");
const Shaman_1 = require("./components/Shaman");
const Warrior_1 = require("./components/Warrior");
const Classes_1 = require("./enums/Classes");
const HeroManager_1 = require("./services/HeroManager");
const shaman1 = new Shaman_1.Shaman("yidu", 200, 150, 0);
const shaman2 = new Shaman_1.Shaman("Crazy_shaman", 200, 10, 0);
const mage1 = new Mage_1.Mage("deadly", 100, 150, 0);
const warrior1 = new Warrior_1.Warrior("pabblo", 100, 150, 0);
const archer1 = new Archer_1.Archer("absolute archer", 100, 150, 0);
const heroManager = new HeroManager_1.HeroManager();
//item section +
const bigSword = new Items_1.Items("Big Two Handed Sword", Classes_1.Classes.Warrior, 238238);
const longBow = new Items_1.Items("Long Bow", Classes_1.Classes.Archer, 102023);
//item section -
warrior1.addItem(bigSword);
archer1.addItem(longBow);
heroManager.addCharacter(shaman1);
heroManager.addCharacter(shaman2);
heroManager.addCharacter(mage1);
heroManager.addCharacter(warrior1);
heroManager.addCharacter(archer1);
heroManager.logAllCharacters();
