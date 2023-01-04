import cities from '../json/cities.json'

export class RandomCityName {
  public generate(): string {
    const random = Math.floor(Math.random() * cities.length)
    return cities[random].name
  }
}
