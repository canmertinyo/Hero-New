import { Classes } from "../enums/Classes";
import { Character } from "./Character";

export class Archer extends Character {

    public classes:Classes | undefined
    
    constructor(public name:string, public level:number, public maxFoodLevel:number, public foodLevel:number) {
        super(name,level,maxFoodLevel,foodLevel);
        this.classes = Classes.Archer;
    };
}