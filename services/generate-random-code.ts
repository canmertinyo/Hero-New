import { v4 as uuidv4 } from 'uuid'

export class RandomCouponCode {
  private UUIDV4 = uuidv4()

  public generate(): string | unknown {
    try {
      console.log(this.UUIDV4)
      return this.UUIDV4
    } catch (error: unknown) {
      return error
    }
  }
}
