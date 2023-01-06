import mongoose from 'mongoose'

export const couponSchema = new mongoose.Schema({
  coupon: String
})

export const Coupon = mongoose.model('coupon', couponSchema)
