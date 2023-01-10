import { Archer, Item, Mage, Shaman, Warrior } from './components'
import { connectToDatabase } from './database'
import { Classes, Flag } from './enums'
import { HeroService } from './services'

async function run(): Promise<void> {
  connectToDatabase()
  const shaman2 = new Shaman({
    name: 'stunning mage',
    level: 200,
    maxFoodLevel: 200,
    foodLevel: 0,
    flag: Flag.Jinnu,
    health: 15
  })
  const shaman1 = new Shaman({
    name: 'can',
    level: 200,
    maxFoodLevel: 150,
    foodLevel: 0,
    flag: Flag.Shinso,
    health: 100
  })
  const archer = new Archer({
    name: 'archer1',
    level: 200,
    maxFoodLevel: 150,
    foodLevel: 0,
    flag: Flag.Shinso,
    health: 100
  })
  const mage = new Mage({
    name: 'furkan',
    level: 31,
    maxFoodLevel: 31,
    foodLevel: 0,
    flag: Flag.Shinso,
    health: 100
  })

  const warrior = new Warrior({
    name: 'mage',
    level: 200,
    maxFoodLevel: 150,
    foodLevel: 0,
    flag: Flag.Shinso,
    health: 100
  })

  //blank username : 
  const warrior1 = new Warrior({
    name:'',
    level:100,
    maxFoodLevel:100,
    foodLevel:10,
    flag : Flag.Chunjo,
    health:100
  })
  const heroService = new HeroService()
  const bigSword = new Item('Big Two Handed Sword', Classes.Warrior, 238238)
  const longBow = new Item('Long Bow', Classes.Archer, 102023)
  const minBell = new Item('Antique Bell', Classes.Shaman, 238123)
  const mageBigStaff = new Item('Exclusive Staff', Classes.Shaman, 23892323)
  shaman1.addItem(minBell)
  shaman1.addItem(mageBigStaff)
  warrior.addItem(bigSword)
  archer.addItem(longBow)
  await heroService.createCharacter(warrior)
  

}

//trigger all components :
run()
