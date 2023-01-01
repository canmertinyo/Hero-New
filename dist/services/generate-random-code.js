"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomCouponCode = void 0;
const uuid_1 = require("uuid");
const fs = require('fs');
class RandomCouponCode {
    constructor() {
        //this function generates uniquie uuidv4 code. And its stored in coupon-codes.txt which in : JSON folder
        this.UUIDV4 = (0, uuid_1.v4)(); //just once.
    }
    generate() {
        try {
            fs.appendFile('../json/coupon-codes.txt', `${this.UUIDV4}\n`, (err) => {
                if (err)
                    throw err;
                console.log(`
                                            Hello adventurer! Your coupon has been created!
                                            ************************

                                            Code : Open your coupen-codes.txt on your local computer. We send it through the in txt file.
                                            Hint : To use your coupon code, simply just put your code in the text area. Then hit the submit button!
                                            ************************
                `);
            });
            return this.UUIDV4;
        }
        catch (e) {
            throw new Error("Something went wrong.");
        }
    }
}
exports.RandomCouponCode = RandomCouponCode;
