import { v4 as uuidv4 } from 'uuid';
const fs = require('fs')
export class RandomCouponCode {

    generate() {
        try {
            fs.appendFile('../json/coupon-codes.json',`${uuidv4()}\n`, function(err:any) {
                if(err) throw err;
                console.log("Kod oluşturuldu...");
            })
        }
        catch(e) {
            console.log("erdfdssdfr",e)
        }
        
    }

}