"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomCouponCode = void 0;
const uuid_1 = require("uuid");
const fs = require('fs');
class RandomCouponCode {
    generate() {
        try {
            fs.appendFile('../json/coupon-codes.json', `${(0, uuid_1.v4)()}\n`, function (err) {
                if (err)
                    throw err;
                console.log("Kod oluşturuldu...");
            });
        }
        catch (e) {
            console.log("erdfdssdfr", e);
        }
    }
}
exports.RandomCouponCode = RandomCouponCode;
