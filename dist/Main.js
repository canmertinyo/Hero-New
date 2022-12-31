"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archer_1 = require("./components/Archer");
const CreateCharacter_1 = require("./components/CreateCharacter");
const Items_1 = require("./components/Items");
const Mage_1 = require("./components/Mage");
const Shaman_1 = require("./components/Shaman");
const Warrior_1 = require("./components/Warrior");
const Wolf_1 = require("./components/Wolf");
const Classes_1 = require("./enums/Classes");
const Flag_1 = require("./enums/Flag");
const hero_service_1 = require("./services/hero-service");
const heroService = new hero_service_1.HeroService();
const shaman1 = new CreateCharacter_1.CreateCharacter(new Shaman_1.Shaman("yidu1", 200, 150, 0, 100, Flag_1.Flag.Chunjo));
const archer1 = new CreateCharacter_1.CreateCharacter(new Archer_1.Archer("archer", 200, 150, 0, 0, Flag_1.Flag.Shinso));
const warrior1 = new CreateCharacter_1.CreateCharacter(new Warrior_1.Warrior("ocean avenue", 200, 150, 0, 0, Flag_1.Flag.Chunjo));
const mage1 = new CreateCharacter_1.CreateCharacter(new Mage_1.Mage("stunning Mage", 100, 130, 140, 100, Flag_1.Flag.Jinnu));
const newCharacterWolf = new CreateCharacter_1.CreateCharacter(new Wolf_1.Wolf("ugly wolf", 40, 100, 0, 100, Flag_1.Flag.Jinnu));
//item section +
const bigSword = new Items_1.Items("Big Two Handed Sword", Classes_1.Classes.Warrior, 238238);
const longBow = new Items_1.Items("Long Bow", Classes_1.Classes.Archer, 102023);
const minBell = new Items_1.Items("Antique Bell", Classes_1.Classes.Shaman, 238123);
const mageStaff = new Items_1.Items("Staff Basic", Classes_1.Classes.Mage, 2389123);
//item section -
console.log(archer1.character.eat(50));
console.log(archer1.character.eat(50));
console.log(archer1.character.eat(50));
console.log(archer1.character.eat(50));
warrior1.character.attack(shaman1.character);
console.log(mage1.character.addItem(mageStaff));
heroService.addCharacter(shaman1.character);
heroService.addCharacter(archer1.character);
heroService.addCharacter(warrior1.character);
heroService.addCharacter(mage1.character);
// heroService.logAllCharacters()
console.log(heroService.logSpecificClass(Classes_1.Classes.Archer));
// warrior1.character.respawn();
newCharacterWolf.character.attack(archer1.character);
console.log(newCharacterWolf.character.move(true));
