// Annotation as a parameter.
function showFunc(id:number, nm:string)  
{  
    console.log("Id = " + id + ", Name = " + nm);  
}  
showFunc(1, "Abhishek Pujara");

// Inline Type Annotation
var person : {   
    id: number;   
    nm: string;   
};   
  
person = {   
  id: 1,   
  nm : "Abhishek Pujara"  
}  

console.log(person.id+" "+person.nm);

// Type Inference
function sum(n1: number, n2: number )  
{  
    return n1 + n2;    
}  
let Addition: number = sum(10,20); // Correct  
console.log("Add: "+Addition);
// let str: string = sum(10,20); // Compiler Error   