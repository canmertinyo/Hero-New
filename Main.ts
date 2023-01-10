import { Archer, Item, Mage, Shaman, Warrior } from './components'
import { connectToDatabase } from './database'
import { CharacterType, Flag } from './enums/'
import { HeroService } from './services'

async function run(): Promise<void> {
  connectToDatabase()
  const shaman2 = new Shaman({
    name: 'stunning mage',
    level: 200,
    maxFoodLevel: 200,
    foodLevel: 0,
    flag: Flag.Jinnu,
    health: 15,
    inventory: []
  })
  const shaman1 = new Shaman({
    name: 'can',
    level: 200,
    maxFoodLevel: 150,
    foodLevel: 0,
    flag: Flag.Shinso,
    health: 15,
    inventory: []
  })
  const archer = new Archer({
    name: 'archer1',
    level: 200,
    maxFoodLevel: 150,
    foodLevel: 0,
    flag: Flag.Shinso,
    health: 15,
    inventory: []
  })
  const mage = new Mage({
    name: 'furkan',
    level: 31,
    maxFoodLevel: 31,
    foodLevel: 0,
    flag: Flag.Shinso,
    health: 15,
    inventory: []
  })

  const warrior = new Warrior({
    name: 'mage',
    level: 200,
    maxFoodLevel: 150,
    foodLevel: 0,
    flag: Flag.Shinso,
    health: 15,
    inventory: []
  })

  //blank username :
  const warrior1 = new Warrior({
    name: '',
    level: 100,
    maxFoodLevel: 100,
    foodLevel: 10,
    flag: Flag.Chunjo,
    health: 15,
    inventory: []
  })
  const heroService = new HeroService()
  const bigSword = new Item('Big Two Handed Sword', CharacterType.Warrior, 238238)
  const longBow = new Item('Long Bow', CharacterType.Archer, 102023)
  const minBell = new Item('Antique Bell', CharacterType.Shaman, 238123)
  const mageBigStaff = new Item('Exclusive Staff', CharacterType.Shaman, 23892323)
  shaman1.addItem(minBell)
  shaman1.addItem(mageBigStaff)
  warrior.addItem(bigSword)
  archer.addItem(longBow)
  // await heroService.createCharacter(warrior)
  heroService.logAllCharacters()
}

//trigger all components :
run()
