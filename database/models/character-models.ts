import mongoose from 'mongoose'
import { characterSchema } from '../schemas/character-schema'

export const characterModel = mongoose.model('character', characterSchema)
