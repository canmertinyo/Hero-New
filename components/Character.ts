import { Classes } from "../enums/Classes";
import { Items } from "../components/Items";


export abstract class Character {

    public inventory: Items[] = [];
    constructor(public name: string, public level: number, public maxFoodLevel: number, public foodLevel: number, public health:number) {
    };

    eat(value: number) {
        const condition = (!(this.maxFoodLevel - (value + this.foodLevel) <= -1)) ? this.foodLevel += value : `hey adventurer, ${this.name} you can't eat anymore of this food! You reach the maximum capacity.`
        return condition;
    }

    attack(character: Character) {
        if (!character) { return 0 };
        console.log(`${this.name} is attacking to ${character.name}`);
    }

    move(status: boolean) {
        return (status == true) ? `${this.name} is moving to somewhere.` : `${this.name} is idling right now.`;
    }

    addItem(items: Items) {
        return this.inventory.push(items)
    }

    respawn() {
        if(this.health <= 0) {
            let timer = 6;
            let mainInterval = setInterval(() => {
                timer--;
                console.log(`${this.name} is respawning in ${timer} seconds`)
                if(timer <= 0) {
                    console.log(`${this.name} is respawned.`)
                    return this.health = 100 , clearInterval(mainInterval);
                };
            },1000)
        }
        if(this.health > 0) {
            return `${this.name} is alive!`;1
        }
    }

}