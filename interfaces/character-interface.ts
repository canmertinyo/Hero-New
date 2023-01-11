import { Item } from '../components'

export interface ICharacter {
  inventory: Item[]
  name: string
  level: number
  maxFoodLevel: number
  foodLevel: number
  health: number
  flag: string
}
