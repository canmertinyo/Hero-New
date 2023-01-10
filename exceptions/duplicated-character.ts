import { BaseException } from '../exceptions/base-exception'

export class DuplicatedUsernameException extends BaseException {
  constructor() {
    super('Duplicated user!')
  }
}
