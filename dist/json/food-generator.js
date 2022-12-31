"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomFoodName = void 0;
const food_json_1 = __importDefault(require("../json/food.json"));
class RandomFoodName {
    generate() {
        let random = Math.floor(Math.random() * food_json_1.default.foodItems.length);
        return food_json_1.default.foodItems[random].foodName;
    }
}
exports.RandomFoodName = RandomFoodName;
