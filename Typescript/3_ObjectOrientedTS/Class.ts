// Class definition.
class Person { 
    //fields 
    firstName:string; 
    lastName:string; 
    
    //constructor 
    constructor(firstName:string,lastName:string) { 
       this.firstName = firstName;
       this.lastName = lastName;
    }  
    
    //function 
    showPersonDetails():void { 
       console.log("Person Details: "+this.firstName+" "+this.lastName);
    } 
 } 
 
 //create an object 
 var obj = new Person("Abhishek","Pujara");
 
 //access the function.
 obj.showPersonDetails();