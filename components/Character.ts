import { Classes } from "../enums/Classes";
import { Items } from "../components/Items";
import { Flag } from "../enums/Flag";
import { RandomCityName } from "../json/city-generator"
import { RandomFoodName } from "../json/food-generator";
import { RandomCouponCode } from "../services/generate-random-code"
import { randomItems } from "../Main"
const fs = require('fs')
const readline = require('readline');


let randomCityName = new RandomCityName();
let randomFoodName = new RandomFoodName();
let randomCouponCode = new RandomCouponCode();

export abstract class Character {

    public inventory: Items[] = [];
    public classes?: Classes;
    generateRandomItem = Math.floor(Math.random() * 3);
    constructor(public name: string, public level: number, public maxFoodLevel: number, public foodLevel: number, public health: number, public flag: Flag) {
    };

    eat(value: number) {
        const condition = (!(this.maxFoodLevel - (value + this.foodLevel) <= -1)) ? this.foodLevel += value : `hey adventurer, ${this.name} you can't eat anymore of this ${randomFoodName.generate()}! You reach the maximum capacity.`;
        return condition;
    };

    attack(character: Character) {
        if (!character) return 0;
        console.log(`${this.name} is attacking to ${character.name}`);
    };

    move(status: boolean) {
        return (status == true) ? `${this.name} is moving to ${randomCityName.generate()}` : `${this.name} is idling right now.`;
    };

    addItem(items: Items) {
        const result = `${items.itemName} succesfully added to ${this.name}'s inventory`;
        return this.inventory.push(items), result;
    };

    respawn() {
        if (this.health <= 0) {
            let timer = 6;
            let mainInterval: any = setInterval(() => {
                timer--;
                console.log(`${this.name} is respawning in ${timer} seconds`);
                if (timer <= 0) {
                    console.log(`${this.name} is respawned.`);
                    return this.health = 100, clearInterval(mainInterval);
                };
            }, 1000);
        } else { console.log(`${this.name} is alive!`) };
    };

    deleteItem(itemId: Items) {
        let findIndex = this.inventory.indexOf(itemId);
        if (findIndex > -1) {
            this.inventory.splice(findIndex, 1);
        }
    };

    createCoupon() {
        return randomCouponCode.generate();
    };

    useCoupon(coupon: string) {
        const couponTxt = '../json/coupon-codes.txt';
        const read = readline.createInterface({
            input: fs.createReadStream(couponTxt)
        });
        read.on('line', (text: string) => {
            if (text === coupon) {
                this.addItem(randomItems[this.generateRandomItem])
                console.log(`${randomItems[this.generateRandomItem]} has been added to your inventory.`)
                console.log(this.inventory)
            }
        });
    };

    
    //side specs : 
    //like fishing 
    //mining
    //etc....


};

