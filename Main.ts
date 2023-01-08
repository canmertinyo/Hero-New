import { Archer, Item, Mage, Shaman, Warrior } from './components'
import { connectToDatabase } from './database'
import { Classes, Flag } from './enums'
import { HeroService } from './services'

async function run(): Promise<void> {
  connectToDatabase()
  //Bu senin dediğin tarz ?
  const shaman2 = new Shaman({
    name: 'stunning mage',
    level: 200,
    maxFoodLevel: 200,
    foodLevel: 0,
    flag: Flag.Jinnu,
    health: 15
  })
  //Bu kalıtım kullanılarak yapılan hali?
  const shaman1 = new Shaman(
    (Shaman.prototype.options = {
      name: 'can',
      level: 200,
      maxFoodLevel: 150,
      foodLevel: 0,
      flag: Flag.Shinso,
      health: 100
    })
  )
  const archer = new Archer({
    name: 'archer1',
    level: 200,
    maxFoodLevel: 150,
    foodLevel: 0,
    flag: Flag.Shinso,
    health: 100
  })
  const mage = new Mage({
    name: 'mage',
    level: 200,
    maxFoodLevel: 150,
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
  const heroService = new HeroService()
  const bigSword = new Item('Big Two Handed Sword', Classes.Warrior, 238238)
  const longBow = new Item('Long Bow', Classes.Archer, 102023)
  const minBell = new Item('Antique Bell', Classes.Shaman, 238123)
  const mageBigStaff = new Item('Exclusive Staff', Classes.Shaman, 23892323)
  heroService.addCharacter(shaman1)
  heroService.addCharacter(archer)
  heroService.addCharacter(mage)
  heroService.addCharacter(warrior)
  shaman1.addItem(minBell)
  shaman1.addItem(mageBigStaff)
  console.log(shaman1.move(true))

  heroService.addCharacterToDatabase(shaman1)
  await shaman1.createCoupon()
  await archer.createCoupon()
  await mage.createCoupon()
  await warrior.createCoupon()
  await shaman2.createCoupon()
}

run()
