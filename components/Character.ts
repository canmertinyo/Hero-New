import { Classes } from '../enums/Classes'
import { Item } from './Item'
import { Flag } from '../enums/Flag'
import { RandomCityName } from '../json/city-generator'
import { RandomFoodName } from '../json/food-generator'
import { RandomCouponCode } from '../services/generate-random-code'
import { randomItems } from '../Main'
import fs from 'fs'
import readline from 'readline'

export abstract class Character {
  public inventory: Item[] = []
  public classes?: Classes
  public randomIndex = Math.floor(Math.random() * 3)
  public randomCouponCode = new RandomCouponCode()
  public randomCityName = new RandomCityName()
  public randomFoodName = new RandomFoodName()

  constructor(
    public name: string,
    public level: number,
    public maxFoodLevel: number,
    public foodLevel: number,
    public health: number,
    public flag: Flag
  ) {}

  public eat(value: number): number | string {
    const condition = !(this.maxFoodLevel - (value + this.foodLevel) <= -1)
      ? (this.foodLevel += value)
      : `hey adventurer, ${
          this.name
        } you can't eat anymore of this ${this.randomFoodName.generate()}! You reach the maximum capacity.`
    return condition
  }

  public attack(character: Character): string | undefined {
    if (!character) return
    console.log(`${this.name} is attacking to ${character.name}`)
  }

  public move(status: boolean): string {
    return status == true
      ? `${this.name} is moving to ${this.randomCityName.generate()}`
      : `${this.name} is idling right now.`
  }

  public addItem(items: Item): number | string {
    const result = `${items.itemName} succesfully added to ${this.name}'s inventory`
    return this.inventory.push(items), result
  }

  public respawn(): void {
    if (this.health <= 0) {
      let timer = 6
      const mainInterval: NodeJS.Timer = setInterval(() => {
        timer--
        console.log(`${this.name} is respawning in ${timer} seconds`)
        if (timer <= 0) {
          console.log(`${this.name} is respawned.`)
          return (this.health = 100), clearInterval(mainInterval)
        }
      }, 1000)
    } else {
      console.log(`${this.name} is alive!`)
    }
  }

  public deleteItem(itemId: Item): void {
    const findIndex = this.inventory.indexOf(itemId)
    if (findIndex > -1) {
      this.inventory.splice(findIndex, 1)
    }
  }

  public createCoupon(): string {
    return this.randomCouponCode.generate()
  }

  public useCoupon(coupon: string): void {
    const couponTxt = '../json/coupon-codes.txt'
    const read = readline.createInterface({
      input: fs.createReadStream(couponTxt)
    })
    read.on('line', (text: string) => {
      if (text === coupon) {
        this.addItem(randomItems[this.randomIndex])
        console.log(`${randomItems[this.randomIndex]} has been added to your inventory.`)
        console.log(this.inventory)
      }
    })
  }
}
