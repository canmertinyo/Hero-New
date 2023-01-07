import { Classes } from '../enums'
import { Item } from './index'
import { NameGenerator, RandomCouponCode } from '../services'
import food from '../json/food.json'
import cities from '../json/cities.json'
import { Coupon } from '../database/schemas/coupon'
import { Document } from 'mongoose'
import { ICharacter } from '../interfaces/character-interface'

export abstract class Character {
  public inventory: Item[] = []
  public classes?: Classes
  public randomIndex = Math.floor(Math.random() * 3)
  public randomCouponCode = new RandomCouponCode()
  private nameGenerator = new NameGenerator()

  constructor(public options: ICharacter) {}

  public eat(value: number): number | string {
    if (this.options.maxFoodLevel - (value + this.options.foodLevel) <= -1) {
      const foodName = this.nameGenerator.generate(food.foodItems, 'foodName')

      return `hey adventurer, ${this.options.name} you can't eat anymore of this ${foodName}! You reach the maximum capacity.`
    }
    return (this.options.foodLevel += value)
  }

  public attack(character: Character): string | undefined {
    if (!character) return
    console.log(`${this.options.name} is attacking to ${character.options.name}`)
  }

  public move(status: boolean): string {
    const cityName = this.nameGenerator.generate(cities, 'name')

    return status == true
      ? `${this.options.name} is moving to ${cityName}`
      : `${this.options.name} is idling right now.`
  }

  public addItem(items: Item): number | string {
    const result = `${items.itemName} succesfully added to ${this.options.name}'s inventory`
    return this.inventory.push(items), result
  }

  public respawn(): void {
    //void denmiş ama return ile değer dönmüşüm. Onları düzelt
    if (this.options.health <= 0) {
      let timer = 6
      const mainInterval: NodeJS.Timer = setInterval(() => {
        timer--
        console.log(`${this.options.name} is respawning in ${timer} seconds`)
        if (timer <= 0) {
          console.log(`${this.options.name} is respawned.`)
          return (this.options.health = 100), clearInterval(mainInterval)
        }
      }, 1000)
    } else {
      return console.log(`${this.options.name} is alive!`)
    }
  }

  public deleteItem(itemId: Item): void {
    const findIndex = this.inventory.indexOf(itemId)
    if (findIndex > -1) {
      this.inventory.splice(findIndex, 1)
    }
  }

  public async createCoupon(): Promise<Document> {
    const generateCouponCode = this.randomCouponCode.generate()
    const result: Document = await Coupon.create({
      coupon: generateCouponCode,
      ownedBy: this.options.name
    })
    return result
  }

  public async logAllCoupons(): Promise<unknown> {
    return Coupon.find({ ownedBy: this.options.name })
  }
}
