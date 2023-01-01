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
                                            Your coupon has been created!
                                            ************************

                                            Code : ${this.UUIDV4}

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
