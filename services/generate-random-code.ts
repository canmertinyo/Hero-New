import { v4 as uuidv4 } from 'uuid';
const fs = require('fs')
export class RandomCouponCode {
    //this function generates uniquie uuidv4 code. And its stored in coupon-codes.txt which in : JSON folder
    UUIDV4 = uuidv4(); //just once.

    generate(): string {
        try {
            fs.appendFile('../json/coupon-codes.txt', `${this.UUIDV4}\n`,  (err: any) => {
                if (err) throw err; console.log(`
                                            Your coupon has been created!
                                            ************************

                                            Code : ${this.UUIDV4}

                                            ************************
                `);
            })
            return this.UUIDV4;
        }
        catch (e) {
            throw new Error("Something went wrong.");
        }
    }

}
