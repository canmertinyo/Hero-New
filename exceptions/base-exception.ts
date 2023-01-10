

export abstract class CreateError extends Error {
    constructor(public errorMessage:string) {
        super(errorMessage)
    }
}

