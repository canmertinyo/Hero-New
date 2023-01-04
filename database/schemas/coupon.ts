import mongoose from 'mongoose'
import { Character } from '../../components'

export const couponSchema = new mongoose.Schema({
  coupon: String
})

export const Coupon = mongoose.model('coupon', couponSchema)
