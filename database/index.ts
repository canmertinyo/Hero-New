import mongoose from 'mongoose'
import { config } from '../config'

export function connectToDatabase(): void {
  mongoose.set('strictQuery', true)
  mongoose
    .connect(config.DATABASE_URI)
    .then(() => console.log('Connected to the database.'))
    .catch((err) => console.log('An error occurred while connecting to the database.' + err))
}
