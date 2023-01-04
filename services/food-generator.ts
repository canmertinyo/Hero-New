import food from '../json/food.json'

export class RandomFoodName {
  public generate(): string {
    const random = Math.floor(Math.random() * food.foodItems.length)
    return food.foodItems[random].foodName
  }
}
