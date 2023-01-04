import { Classes } from '../enums/classes'
import { Flag } from '../enums/flag'
import { Character } from './character'

export class Wolf extends Character {
  public classes?: Classes

  constructor(
    public name: string,
    public level: number,
    public maxFoodLevel: number,
    public foodLevel: number,
    public health: number,
    public flag: Flag
  ) {
    super(name, level, maxFoodLevel, foodLevel, health, flag)
    this.classes = Classes.Wolf
  }
}
