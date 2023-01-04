import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

export class RandomCouponCode {
  private UUIDV4 = uuidv4()

  public generate(): string {
    try {
      fs.appendFile('../json/coupon-codes.txt', `${this.UUIDV4}\n`, (err) => {
        if (err) throw err
        console.log(`
                                            Hello adventurer! Your coupon has been created!
                                            ************************

                                            Code : Open your coupen-codes.txt on your local computer. We send it through the in txt file.
                                            Hint : To use your coupon code, simply just put your code in the text area. Then hit the submit button!
                                            ************************
                `)
      })
      return this.UUIDV4
    } catch (e) {
      throw new Error('Something went wrong.')
    }
  }
}
