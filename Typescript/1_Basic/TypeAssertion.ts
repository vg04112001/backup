// Bracket 
let empCode: any = 111;   // Not Viable.
let employeeCode = <number> empCode;   
console.log("Type is:"+typeof(employeeCode)); //Output: number  

// AS
let empCode2: any = 111;   
let employeeCode2 = empCode as number;   
console.log("Type is:"+typeof(employeeCode2)); //Output: number  

// Interface with bracket
// Declaration.
interface person {   
    name: string;   
    code: number;   
}  

// Initialization.
let p = <person> { };   
p.code = 1; // Correct  
p.name = "Abhishek"; // Correct  

