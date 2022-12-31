import cities from "../json/cities.json"

export class RandomCityName {
    public generate() {
        let random = Math.floor(Math.random() * cities.length);
        return cities[random].name;
    }
}
