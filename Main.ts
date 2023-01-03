import { Archer } from './components/Archer';
import { Item } from './components/Item';
import { Mage } from './components/Mage';
import { Shaman } from './components/Shaman';
import { Warrior } from './components/Warrior';
import { Wolf } from './components/Wolf';
import { Classes } from './enums/Classes';
import { Flag } from './enums/Flag';
import { HeroService } from './services/hero-service';

var mysql = require('mysql');


const heroService = new HeroService();

//mysql connection : 
const connectDatabase = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'smack1919'
});

connectDatabase.connect(function(err:Error) {
    if(err) throw err;
    console.log('Connected!');
})

const shaman1 = new Shaman("yidu1", 200, 150, 0, 100, Flag.Chunjo);
const archer1 = new Archer("archer", 200, 150, 0, 0, Flag.Shinso);
const warrior1 = new Warrior("ocean avenue", 200, 150, 0, 0, Flag.Chunjo);
const mage1 = new Mage("stunning Mage", 100, 130, 140, 100, Flag.Jinnu);
const newCharacterWolf = new Wolf("ugly wolf", 40, 100, 0, 100, Flag.Jinnu);


//item section +
const bigSword = new Item("Big Two Handed Sword", Classes.Warrior, 238238);
const longBow = new Item("Long Bow", Classes.Archer, 102023);
const minBell = new Item("Antique Bell", Classes.Shaman, 238123);
const mageStaff = new Item("Staff Basic", Classes.Mage, 2389123);
const mageBigStaff = new Item("Exclusive Staff", Classes.Shaman, 23892323);
//item section -


//random items 
const random1 = new Item("Daedric Bow",Classes.Archer, 232323);
const random2 = new Item("Forsworn Bow", Classes.Archer, 2372);
const random3 = new Item("Banded Iron Armor", Classes.Warrior, 238238);
export const randomItems:Item[] = [random1,random2,random3];


heroService.addCharacter(shaman1)
heroService.addCharacter(archer1)
heroService.addCharacter(warrior1)
heroService.addCharacter(mage1)


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