import { CreateError } from '../exceptions/base-exception'

export class UserErrors extends CreateError {
    constructor(public errorType:string) {
        super(errorType)
    }
}

