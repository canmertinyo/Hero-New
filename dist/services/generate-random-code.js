"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomCouponCode = void 0;
const uuid_1 = require("uuid");
class RandomCouponCode {
    generate() {
        return (0, uuid_1.v4)();
    }
}
exports.RandomCouponCode = RandomCouponCode;
