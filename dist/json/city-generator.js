"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomCityName = void 0;
const cities_json_1 = __importDefault(require("../json/cities.json"));
class RandomCityName {
    generate() {
        let random = Math.floor(Math.random() * cities_json_1.default.length);
        return cities_json_1.default[random].name;
    }
}
exports.RandomCityName = RandomCityName;
