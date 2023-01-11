import { CharacterType } from '../enums'

export interface IItem {
  name: string
  id: number
  characterType: CharacterType
  minLevel: number
  attackRate: number
  criticalChance: number
}
