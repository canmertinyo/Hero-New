import mongoose from 'mongoose'
import { ICoupon } from '../../interfaces/coupon-interface'

export const couponSchema = new mongoose.Schema<ICoupon>({
  coupon: String,
  ownedBy: String
})
