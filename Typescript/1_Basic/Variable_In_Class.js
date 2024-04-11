var global_var = 12; //global variable 
var demoCLS = /** @class */ (function () {
    function demoCLS() {
        this.num = 1; //class variable 
    }
    demoCLS.prototype.showNum = function () {
        var localNum = 3; //local function variable 
        console.log("Class function local variable: " + localNum);
    };
    demoCLS.stval = 2; //static field 
    return demoCLS;
}());
console.log("Global number: " + global_var); // Global variable.
console.log(demoCLS.stval); //static variable  - ClassName.VariableName
var obj = new demoCLS();
console.log("Class variable: " + obj.num);
//console.log("Class function variable: "+obj.localNum); - Not Possible.
obj.showNum();
