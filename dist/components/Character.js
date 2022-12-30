"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
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
        const condition = (!(this.maxFoodLevel - (value + this.foodLevel) <= -1)) ? this.foodLevel += value : `hey adventurer, ${this.name} you can't eat anymore of this food! You reach the maximum capacity.`;
        return condition;
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
        if (this.health > 0) {
            return `${this.name} is alive!`;
            1;
        }
    }
}
exports.Character = Character;
