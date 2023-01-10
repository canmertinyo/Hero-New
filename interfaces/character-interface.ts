import { Item } from '../components'
import { CharacterType } from '../enums'

export interface ICharacter {
  inventory: Item[]
  name: string
  level: number
  maxFoodLevel: number
  foodLevel: number
  health: number
  flag: string
}
