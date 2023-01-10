export class BaseException extends Error {
  constructor(public errorMessage: string) {
    super(errorMessage)
  }
}
