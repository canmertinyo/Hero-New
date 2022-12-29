"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name, level, maxFoodLevel, foodLevel) {
        this.name = name;
        this.level = level;
        this.maxFoodLevel = maxFoodLevel;
        this.foodLevel = foodLevel;
        this.inventory = [];
    }
    ;
    eat(value) {
        if (this.maxFoodLevel - (value + this.foodLevel) <= -1) {
            return `hey adventurer, ${this.name} you can't eat anymore of this food! You reach the maximum capacity.`;
        }
        else {
            console.log(this.maxFoodLevel);
            console.log(this.foodLevel);
            return this.foodLevel += value;
        }
    }
    attack(character) {
        if (!character) {
            return 0;
        }
        ;
        console.log(`${this.name} is attacking to ${character.name}`);
    }
    move(status) {
        return (status == true) ? `${this.name} is moving to somewhere.` : `${this.name} is idling right now.`;
    }
    addItem(items) {
        return this.inventory.push(items);
    }
    respawn(isAlive) {
        let respawnTime = 6;
        if (isAlive === false) {
            let mainInterval = setInterval(() => {
                respawnTime--;
                console.log(`${this.name} is respawning in ${respawnTime} seconds`);
                if (respawnTime <= 0) {
                    console.log(`${this.name} is alive now!`);
                    return clearInterval(mainInterval);
                }
            }, 1000);
        }
    }
}
exports.Character = Character;
