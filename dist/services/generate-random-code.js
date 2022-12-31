"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomCouponCode = void 0;
const uuid_1 = require("uuid");
const fs = require('fs');
const fs_1 = require("fs");
const path = __importStar(require("path"));
class RandomCouponCode {
    readFile() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // ✅ Read contents of directory
                const dirContents = yield fs_1.promises.readdir(__dirname);
                console.log(dirContents);
                // ✅ Read contents of `another-file.ts` in the same directory
                const fileContents = yield fs_1.promises.readFile(path.join(__dirname, '../json/coupon-codes.json'), { encoding: 'utf-8' });
                console.log(fileContents);
            }
            catch (err) {
                console.log('error is: ', err);
            }
        });
    }
    generate() {
        try {
            fs.appendFile('../json/coupon-codes.txt', `${(0, uuid_1.v4)()}\n`, function (err) {
                if (err)
                    throw err;
                console.log("Coupon has been created...");
            });
            return (0, uuid_1.v4)();
        }
        catch (e) {
            throw new Error("Something went wrong.");
        }
    }
}
exports.RandomCouponCode = RandomCouponCode;
