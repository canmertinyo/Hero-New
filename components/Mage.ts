import { Classes } from "../enums/Classes";
import { Character } from "./Character";

export class Mage extends Character {

    public classes:Classes | undefined
    
    constructor(public name: string, public level: number, public maxFoodLevel: number, public foodLevel: number, public health:number) {
        super(name,level,maxFoodLevel,foodLevel,health);
        this.classes = Classes.Mage;
    };
}