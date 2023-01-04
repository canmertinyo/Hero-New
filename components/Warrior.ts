import { Classes, Flag } from '../enums'
import { Character } from './index'

export class Warrior extends Character {
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
    this.classes = Classes.Warrior
  }
}
