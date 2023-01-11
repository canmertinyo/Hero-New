import mongoose from 'mongoose'
import { Iitem } from '../../interfaces/item-interface'

export const itemSchema = new mongoose.Schema<Iitem>({
  name: String,
  id: Number,
  minLevel: Number,
  characterType: String,
  attackRate: Number,
  criticalChance: Number
})
