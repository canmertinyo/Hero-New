import mongoose from 'mongoose'
import { itemSchema } from '../schemas/item-schema'

export const ItemModel = mongoose.model('itemModel', itemSchema)
