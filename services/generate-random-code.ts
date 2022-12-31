import { v4 as uuidv4 } from 'uuid';
const fs = require('fs')
import { promises as fsPromises } from 'fs';
import * as path from 'path';
export class RandomCouponCode {
  
      
  // bu kısımı tekrar elden geçir.
    // async readFile() {
    //     try {
    //       const dirContents = await fsPromises.readdir(__dirname);
    //       console.log(dirContents);
      
    //       const fileContents = await fsPromises.readFile(
    //         path.join(__dirname, '../json/coupon-codes.json'),
    //         { encoding: 'utf-8' },
    //       );
    //       console.log(fileContents);
    //     } catch (err) {
    //       console.log('error is: ', err);
    //     }
    //   }


    //Uuidv4 kodlarını coupon codes txt nin içine ekliyor.
    generate(): string {
        try {
            fs.appendFile('../json/coupon-codes.txt',`${uuidv4()}\n`, function(err:any) {
                if(err) throw err;
                console.log("Coupon has been created...");
            })
            return uuidv4();
        }
        catch(e) {
            throw new Error("Something went wrong.");
        }
    }

}
