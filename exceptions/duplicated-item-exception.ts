import { BaseException } from './base-exception'

export class DuplicatedItemException extends BaseException {
  constructor() {
    super('This item is alread on your inventory!')
  }
}
