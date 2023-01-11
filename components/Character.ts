import { CharacterType } from '../enums'
import { Item } from './index'
import { NameGenerator, RandomCouponCode } from '../services'
import food from '../json/food.json'
import cities from '../json/cities.json'
import { ICharacter } from '../interfaces/character.interface'
import { Coupon } from '../database/models/coupon-model'
import { ICoupon } from '../interfaces/coupon.interface'

// joi

export abstract class Character {
  protected characterType?: CharacterType
  private randomCouponCode = new RandomCouponCode()
  private nameGenerator = new NameGenerator()

  constructor(public options: ICharacter) {
    options.inventory = []
  }

  public eat(value: number): void {
    const canCharacterEat = this.options.maxFoodLevel - (value + this.options.foodLevel) <= 0

    if (canCharacterEat) {
      const foodName = this.nameGenerator.generate(food.foodItems, 'foodName')
      console.log(
        `hey adventurer, ${this.options.name} you can't eat anymore of this ${foodName}! You reach the maximum capacity.`
      )
    }
    this.options.foodLevel += value
  }

  public attack(character: Character): string | undefined {
    if (!character) return
    console.log(`${this.options.name} is attacking to ${character.options.name}`)
  }

  public move(status: boolean): string {
    const cityName = this.nameGenerator.generate(cities, 'name')

    return status
      ? `${this.options.name} is moving to ${cityName}`
      : `${this.options.name} is idling right now.`
  }

  //bu kısım database'e aktarılacak array tabanlı calısma yok artık.
  // public addItem(items: Item): string {
  //   const result = `${items.itemName} succesfully added to ${this.options.name}'s inventory`
  //   this.options.inventory.push(items)
  //   return result
  // }

  public getAllItems(): Item[] {
    return this.options.inventory
  }

  public respawn(): void {
    if (this.options.health > 0) return
    let timer = 6
    const executeTimer = (): void => {
      timer--
      console.log(`${this.options.name} is respawning in ${timer} seconds`)
      if (timer <= 0) {
        console.log(`${this.options.name} is respawned.`)
        clearInterval(mainInterval)
        this.options.health = 100
        return
      }
    }
    const mainInterval: NodeJS.Timer = setInterval(executeTimer, 1000)
  }

  public deleteItem(itemId: Item): void {
    const findIndex = this.options.inventory.indexOf(itemId)
    const deleteItemFromSpecificIndex =
      findIndex > -1 ? this.options.inventory.splice(findIndex, 1) : null
    deleteItemFromSpecificIndex
  }

  public async createCoupon(): Promise<ICoupon> {
    const couponCode = this.randomCouponCode.generate()
    const result = await Coupon.create({
      coupon: couponCode,
      ownedBy: this.options.name
    })
    return result
  }

  public async logAllCoupons(): Promise<ICoupon[]> {
    return Coupon.find({ ownedBy: this.options.name })
  }
}
