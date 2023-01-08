import mongoose from 'mongoose'
import { Flag } from '../../enums'
import { ICharacter } from '../../interfaces/character-interface'

export const characterSchema = new mongoose.Schema<ICharacter>({
  name: String,
  level: Number,
  maxFoodLevel: Number,
  foodLevel: Number,
  health: Number,
  flag: Flag
})
