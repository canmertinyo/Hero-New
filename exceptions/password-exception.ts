import { BaseException } from './base-exception'

export class PasswordException extends BaseException {
  constructor() {
    super('Something went wrong with your password!')
  }
}
