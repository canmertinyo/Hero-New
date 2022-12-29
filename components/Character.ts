import { Classes } from "../enums/Classes";
import { Items } from "../components/Items";


export abstract class Character {

    public inventory: Items[] = [];
    constructor(public name: string, public level: number, public maxFoodLevel: number, public foodLevel: number) {
    };

    eat(value: number) {
        if (this.maxFoodLevel - (value + this.foodLevel) <= -1) {
            return `hey adventurer, ${this.name} you can't eat anymore of this food! You reach the maximum capacity.`
        } else {
            console.log(this.maxFoodLevel)
            console.log(this.foodLevel)
            return this.foodLevel += value;
        }

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

    respawn(isAlive: boolean) {
        let respawnTime = 6;
        if (isAlive === false) {
            let mainInterval = setInterval(() => {
                respawnTime--;
                console.log(`${this.name} is respawning in ${respawnTime} seconds`)
                if (respawnTime <= 0) {
                    console.log(`${this.name} is alive now!`)
                    return clearInterval(mainInterval);
                }
            }, 1000);
        }
    }

}