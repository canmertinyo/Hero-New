import { CreateError } from '../exceptions/base-exception'
import { ErrorList } from '../enums/exception-list'

export class DuplicatedUsername extends CreateError {
    constructor(public errorType:ErrorList) {
        super(errorType)
    }
}

