import { Archer, Item, Mage, Shaman, Warrior } from './components'
import { connectToDatabase } from './database'
import { Classes, Flag } from './enums'
import { HeroService } from './services'

connectToDatabase()

async function run(): Promise<void> {
  const shaman1 = new Shaman('yidu1', 200, 150, 0, 100, Flag.Chunjo)
  const heroService = new HeroService()
  const archer1 = new Archer('archer', 200, 150, 0, 0, Flag.Shinso)
  const warrior1 = new Warrior('ocean avenue', 200, 150, 0, 0, Flag.Chunjo)
  const mage1 = new Mage('stunning Mage', 100, 130, 140, 100, Flag.Jinnu)
  const bigSword = new Item('Big Two Handed Sword', Classes.Warrior, 238238)
  const longBow = new Item('Long Bow', Classes.Archer, 102023)
  const minBell = new Item('Antique Bell', Classes.Shaman, 238123)
  const mageBigStaff = new Item('Exclusive Staff', Classes.Shaman, 23892323)
  heroService.addCharacter(shaman1)
  heroService.addCharacter(archer1)
  heroService.addCharacter(warrior1)
  heroService.addCharacter(mage1)
  shaman1.addItem(minBell)
  archer1.addItem(longBow)
  warrior1.addItem(bigSword)
  shaman1.addItem(mageBigStaff)
  console.log(warrior1.move(true))
  await shaman1.createCoupon()
  await shaman1.logAllCoupons()
}

run()
