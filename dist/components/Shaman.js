"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shaman = void 0;
const Classes_1 = require("../enums/Classes");
const Character_1 = require("./Character");
class Shaman extends Character_1.Character {
    constructor(name, level, maxFoodLevel, foodLevel, health) {
        super(name, level, maxFoodLevel, foodLevel, health);
        this.name = name;
        this.level = level;
        this.maxFoodLevel = maxFoodLevel;
        this.foodLevel = foodLevel;
        this.health = health;
        this.classes = Classes_1.Classes.Shaman;
    }
    ;
}
exports.Shaman = Shaman;
