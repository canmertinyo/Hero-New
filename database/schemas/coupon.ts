import mongoose from 'mongoose'

export const couponSchema = new mongoose.Schema({
  coupon: String,
  ownedBy: String
})

export const Coupon = mongoose.model('coupon', couponSchema)
