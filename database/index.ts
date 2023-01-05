import mongoose from 'mongoose'
import { config } from '../config'

export function connectToDatabase(): void {
  mongoose.set('strictQuery', true)
  mongoose
    .connect(config.DATABASE_URI)
    .then(() => console.log('Connected to the database.'))
    .catch(() => console.log('An error occurred while connecting to the database.'))
}

// import mongoose from 'mongoose'

// //connect to mongoDB.
// main().catch((err: Error) => console.log(err))

// export async function main(): Promise<typeof mongoose> {
//   console.log('succesfully connected to hero-database...')
//   return await mongoose.connect('mongodb://localhost:27017/hero-new')
// }
