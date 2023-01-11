import { BaseException } from './base-exception'

export class UsernameException extends BaseException {
  constructor() {
    super('Something went wrong with your username!')
  }
}
