import { ValidatorCLS } from './validators/validators';

let email = 'abhishekpoojara@gmail.com';
let zipCode = '360005';

let validator = new ValidatorCLS();

let resultOfEmailValidate = validator.isValidEmailStr(email);
let resultOfZipCodeValidate = validator.isValidZipCode(zipCode);

console.log("Valid Email Id OR Not: "+resultOfEmailValidate);
console.log("Valid Zip Code OR Not: "+resultOfZipCodeValidate);