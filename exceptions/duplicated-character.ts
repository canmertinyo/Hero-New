import { CreateError } from '../exceptions/base-exception'

export class DuplicatedUsername extends CreateError {
    constructor(public errorMessage:string) {
        super(errorMessage)
    }
}

