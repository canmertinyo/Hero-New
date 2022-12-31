import food from "../json/food.json";

export class RandomFoodName {
    public generate() {
        let random =  Math.floor(Math.random() * food.foodItems.length);
        return food.foodItems[random].foodName;
    }
}