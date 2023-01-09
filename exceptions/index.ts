import { DuplicatedUsername } from '../exceptions/duplicated-character'
import { ErrorList } from '../enums/exception-list'
import { UserErrors } from './user-error'


export const duplicatedCharacterError = new DuplicatedUsername(ErrorList.DUPLICATED_CHARACTER)
export const userPasswordError = new UserErrors(ErrorList.BLANK_PASSWORD)
export const userBlankNameError = new UserErrors(ErrorList.BLANK_USERNAME)
