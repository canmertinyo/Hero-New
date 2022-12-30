"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = void 0;
const Classes_1 = require("../enums/Classes");
const Character_1 = require("./Character");
class Archer extends Character_1.Character {
    constructor(name, level, maxFoodLevel, foodLevel, health, flag) {
        super(name, level, maxFoodLevel, foodLevel, health, flag);
        this.name = name;
        this.level = level;
        this.maxFoodLevel = maxFoodLevel;
        this.foodLevel = foodLevel;
        this.health = health;
        this.flag = flag;
        this.classes = Classes_1.Classes.Archer;
    }
    ;
}
exports.Archer = Archer;
