import { Classes, Flag } from '../enums'
import { Item } from './index'
import { NameGenerator, RandomCouponCode } from '../services'
import { randomItems } from '../main'
import food from '../json/food.json'
import cities from '../json/cities.json'
import { Coupon, couponSchema } from '../database/schemas/coupon'
import { connectToDatabase } from '../database/index'
import mongoose from 'mongoose'

export abstract class Character {
  public inventory: Item[] = []
  public classes?: Classes
  public randomIndex = Math.floor(Math.random() * 3)
  public randomCouponCode = new RandomCouponCode()
  private nameGenerator = new NameGenerator()

  constructor(
    public name: string,
    public level: number,
    public maxFoodLevel: number,
    public foodLevel: number,
    public health: number,
    public flag: Flag
  ) {}

  public eat(value: number): number | string {
    if (this.maxFoodLevel - (value + this.foodLevel) <= -1) {
      const foodName = this.nameGenerator.generate(food.foodItems, 'foodName')

      return `hey adventurer, ${this.name} you can't eat anymore of this ${foodName}! You reach the maximum capacity.`
    }
    return (this.foodLevel += value)
  }

  public attack(character: Character): string | undefined {
    if (!character) return
    console.log(`${this.name} is attacking to ${character.name}`)
  }

  public move(status: boolean): string {
    const cityName = this.nameGenerator.generate(cities, 'name')

    return status == true
      ? `${this.name} is moving to ${cityName}`
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

  public async createCoupon(_coupon: string): Promise<void> {
    connectToDatabase()
    const coupon = new Coupon({ coupon: _coupon })
    console.log('coupon has been created...')
    await coupon.save()
    // const couponTxt = '../json/coupon-codes.txt'
    // const read = readline.createInterface({
    //   input: fs.createReadStream(couponTxt)
    // })
    // read.on('line', (text: string) => {
    //   if (text === coupon) {
    //     this.addItem(randomItems[this.randomIndex])
    //     console.log(`${randomItems[this.randomIndex]} has been added to your inventory.`)
    //     console.log(this.inventory)
    //   }
    // })
  }
  public async getAllCoupons(): Promise<void> {
    await Coupon.find()
  }
}
