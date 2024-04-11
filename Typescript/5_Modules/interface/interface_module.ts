interface IValidator {
    isValidEmailStr(s: string): boolean
    isValidZipCode(s: string): boolean
}

export { IValidator };