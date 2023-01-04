export class NameGenerator {
  public generate<Type>(array: Type[], propertyKey: string): string {
    const randomIndex = Math.floor(Math.random() * array.length)
    const item = array[randomIndex] as Record<string, string>
    return item[propertyKey]
  }
}
