import mongoose from 'mongoose'
import { couponSchema } from '../schemas/coupon-schema'

export const Coupon = mongoose.model('coupon', couponSchema)
