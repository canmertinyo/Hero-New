export class NameGenerator {
  public generate(array: unknown[], propertyKey: string): string {
    const randomIndex = Math.floor(Math.random() * array.length)
    const item = array[randomIndex] as Record<string, string>
    return item[propertyKey]
  }
}
