"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorCLS = void 0;
var constant_1 = require("../constant/constant");
var ValidatorCLS = /** @class */ (function () {
    function ValidatorCLS() {
    }
    ValidatorCLS.prototype.isValidEmailStr = function (s) {
        return constant_1.Constants.emailRegex.test(s);
    };
    ValidatorCLS.prototype.isValidZipCode = function (s) {
        return s.length === 6 && constant_1.Constants.numberRegex.test(s);
    };
    return ValidatorCLS;
}());
exports.ValidatorCLS = ValidatorCLS;
