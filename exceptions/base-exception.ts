import { ErrorList } from '../enums/exception-list'

export abstract class CreateError extends Error {
    constructor(public errorType:ErrorList) {
        super(errorType)
    }
}

