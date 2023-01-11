import { CharacterType } from '../enums'

export class Item {
  constructor(
    public itemName: string,
    public characterType: CharacterType,
    public itemId: number
  ) {}
}
