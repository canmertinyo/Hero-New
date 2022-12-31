"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const city_generator_1 = require("../json/city-generator");
const food_generator_1 = require("../json/food-generator");
const generate_random_code_1 = require("../services/generate-random-code");
let randomCityName = new city_generator_1.RandomCityName();
let randomFoodName = new food_generator_1.RandomFoodName();
let randomCouponCode = new generate_random_code_1.RandomCouponCode();
class Character {
    constructor(name, level, maxFoodLevel, foodLevel, health, flag) {
        this.name = name;
        this.level = level;
        this.maxFoodLevel = maxFoodLevel;
        this.foodLevel = foodLevel;
        this.health = health;
        this.flag = flag;
        this.inventory = [];
    }
    ;
    eat(value) {
        const condition = (!(this.maxFoodLevel - (value + this.foodLevel) <= -1)) ? this.foodLevel += value : `hey adventurer, ${this.name} you can't eat anymore of this ${randomFoodName.generate()}! You reach the maximum capacity.`;
        return condition;
    }
    attack(character) {
        if (!character)
            return 0;
        console.log(`${this.name} is attacking to ${character.name}`);
    }
    move(status) {
        return (status == true) ? `${this.name} is moving to ${randomCityName.generate()}` : `${this.name} is idling right now.`;
    }
    addItem(items) {
        const result = `${items.itemName} succesfully added to ${this.name}'s inventory`;
        return this.inventory.push(items), result;
    }
    respawn() {
        if (this.health <= 0) {
            let timer = 6;
            let mainInterval = setInterval(() => {
                timer--;
                console.log(`${this.name} is respawning in ${timer} seconds`);
                if (timer <= 0) {
                    console.log(`${this.name} is respawned.`);
                    return this.health = 100, clearInterval(mainInterval);
                }
                ;
            }, 1000);
        }
        else {
            console.log(`${this.name} is alive!`);
        }
    }
    deleteItem(itemId) {
        let findIndex = this.inventory.indexOf(itemId);
        if (findIndex > -1) {
            this.inventory.splice(findIndex, 1);
        }
    }
    useCoupon() {
        randomCouponCode.readFile();
    }
}
exports.Character = Character;
