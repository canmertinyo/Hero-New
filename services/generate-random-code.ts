import { v4 as uuidv4 } from 'uuid'

export class RandomCouponCode {
  public generate(): string | unknown {
    try {
      console.log(uuidv4())
      return uuidv4()
    } catch (error: unknown) {
      return error
    }
  }
}
