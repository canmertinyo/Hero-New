"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomItems = void 0;
const Archer_1 = require("./components/Archer");
const Item_1 = require("./components/Item");
const Mage_1 = require("./components/Mage");
const Shaman_1 = require("./components/Shaman");
const Warrior_1 = require("./components/Warrior");
const Wolf_1 = require("./components/Wolf");
const Classes_1 = require("./enums/Classes");
const Flag_1 = require("./enums/Flag");
const hero_service_1 = require("./services/hero-service");
var mysql = require('mysql');
const heroService = new hero_service_1.HeroService();
//mysql connection : 
const connectDatabase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'smack1919'
});
connectDatabase.connect(function (err) {
    if (err)
        throw err;
    console.log('Connected!');
});
const shaman1 = new Shaman_1.Shaman("yidu1", 200, 150, 0, 100, Flag_1.Flag.Chunjo);
const archer1 = new Archer_1.Archer("archer", 200, 150, 0, 0, Flag_1.Flag.Shinso);
const warrior1 = new Warrior_1.Warrior("ocean avenue", 200, 150, 0, 0, Flag_1.Flag.Chunjo);
const mage1 = new Mage_1.Mage("stunning Mage", 100, 130, 140, 100, Flag_1.Flag.Jinnu);
const newCharacterWolf = new Wolf_1.Wolf("ugly wolf", 40, 100, 0, 100, Flag_1.Flag.Jinnu);
//item section +
const bigSword = new Item_1.Item("Big Two Handed Sword", Classes_1.Classes.Warrior, 238238);
const longBow = new Item_1.Item("Long Bow", Classes_1.Classes.Archer, 102023);
const minBell = new Item_1.Item("Antique Bell", Classes_1.Classes.Shaman, 238123);
const mageStaff = new Item_1.Item("Staff Basic", Classes_1.Classes.Mage, 2389123);
const mageBigStaff = new Item_1.Item("Exclusive Staff", Classes_1.Classes.Shaman, 23892323);
//item section -
//random items 
const random1 = new Item_1.Item("Daedric Bow", Classes_1.Classes.Archer, 232323);
const random2 = new Item_1.Item("Forsworn Bow", Classes_1.Classes.Archer, 2372);
const random3 = new Item_1.Item("Banded Iron Armor", Classes_1.Classes.Warrior, 238238);
exports.randomItems = [random1, random2, random3];
heroService.addCharacter(shaman1);
heroService.addCharacter(archer1);
heroService.addCharacter(warrior1);
heroService.addCharacter(mage1);
shaman1.addItem(minBell);
archer1.addItem(longBow);
warrior1.addItem(bigSword);
shaman1.addItem(mageBigStaff);
//heroService.logAllCharacters()
// console.log(archer1.eat(50));
// console.log(archer1.eat(50));
// console.log(archer1.eat(50));
// warrior1.attack(shaman1.character)
// console.log(mage1.character.addItem(mageStaff));
//warrior1.respawn();
// newCharacterWolf.character.attack(archer1.character)
// console.log(newCharacterWolf.character.move(true))
// shaman1.character.respawn();    
// console.log(archer1.eat(50)); //can't eat anymore.
// shaman1.character.deleteItem(minBell);
// console.log(heroService.logSpecificClass(Classes.Shaman))
// console.log(heroService.logAllCharacters())
// shaman1.character.createCoupon();
// shaman1.character.useCoupon("2a892caa-8653-4658-9458-2dcb2115fd12");
// warrior1.character.createCoupon();
// warrior1.useCoupon("58a086fb-df07-4f56-ae59-35bfc52b091c")
console.log(warrior1.move(true));
