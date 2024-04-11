var global_var = 12          //global variable 

class demoCLS { 
   num = 1;             //class variable 
   static stval = 2;    //static field 
   
   showNum():void { 
      var localNum = 3;    //local function variable 
      console.log("Class function local variable: "+localNum);
   } 
} 

console.log("Global number: "+global_var);  // Global variable.

console.log(demoCLS.stval)   //static variable  - ClassName.VariableName

var objVar = new demoCLS();
console.log("Class variable: "+objVar.num);

//console.log("Class function variable: "+obj.localNum); - Not Possible.
objVar.showNum();