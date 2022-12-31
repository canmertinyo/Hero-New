import { Archer } from './components/Archer';
import { CreateCharacter } from './components/CreateCharacter';
import { Items } from './components/Items';
import { Mage } from './components/Mage';
import { Shaman } from './components/Shaman';
import { Warrior } from './components/Warrior';
import { Wolf } from './components/Wolf';
import { Classes } from './enums/Classes';
import { Flag } from './enums/Flag';
import { RandomCouponCode } from './services/generate-random-code';
import { HeroService } from './services/hero-service';


const heroService = new HeroService();

const shaman1 = new CreateCharacter(new Shaman("yidu1", 200, 150, 0, 100, Flag.Chunjo));
const archer1 = new CreateCharacter(new Archer("archer", 200, 150, 0, 0, Flag.Shinso));
const warrior1 = new CreateCharacter(new Warrior("ocean avenue", 200, 150, 0, 0, Flag.Chunjo));
const mage1 = new CreateCharacter(new Mage("stunning Mage", 100, 130, 140, 100, Flag.Jinnu));
const newCharacterWolf = new CreateCharacter(new Wolf("ugly wolf", 40, 100, 0, 100, Flag.Jinnu));


//item section +
const bigSword = new Items("Big Two Handed Sword", Classes.Warrior, 238238);
const longBow = new Items("Long Bow", Classes.Archer, 102023);
const minBell = new Items("Antique Bell", Classes.Shaman, 238123);
const mageStaff = new Items("Staff Basic", Classes.Mage, 2389123);
const mageBigStaff = new Items("Exclusive Staff", Classes.Shaman, 23892323);
//item section -

heroService.addCharacter(shaman1.character)
heroService.addCharacter(archer1.character)
heroService.addCharacter(warrior1.character)
heroService.addCharacter(mage1.character)


shaman1.character.addItem(minBell);
archer1.character.addItem(longBow);
warrior1.character.addItem(bigSword);
shaman1.character.addItem(mageBigStaff);
//heroService.logAllCharacters()
// console.log(archer1.character.eat(50));
// console.log(archer1.character.eat(50));
// console.log(archer1.character.eat(50));
// warrior1.character.attack(shaman1.character)
// console.log(mage1.character.addItem(mageStaff));
//warrior1.character.respawn();
// newCharacterWolf.character.attack(archer1.character)
// console.log(newCharacterWolf.character.move(true))
// shaman1.character.respawn();    
// console.log(archer1.character.eat(50)); //can't eat anymore.
// shaman1.character.deleteItem(minBell);
// console.log(heroService.logSpecificClass(Classes.Shaman))
// console.log(heroService.logAllCharacters())

shaman1.character.useCoupon();