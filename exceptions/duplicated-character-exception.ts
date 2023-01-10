import { BaseException } from './base-exception'

export class DuplicatedUsernameException extends BaseException {
  constructor() {
    super('Duplicated user!')
  }
}
