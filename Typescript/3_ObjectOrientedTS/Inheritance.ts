// TypeScript supports the concept of Inheritance. 
// Inheritance is the ability of a program to create new classes from an existing class. 
// A class inherits from another class using the ‘extends’ keyword. 

// Constructor of child class has to be argumented as per parent class at the time of object creation.

// TypeScript doesn’t support multiple inheritance.

// ** Single level inheritance.
class Shape { 
    Area:number 
    constructor(a:number) { 
       this.Area = a;
    } 
 } 
 
 class Circle extends Shape { 
    showArea():void { 
       console.log("Area of the circle:  "+this.Area);
    } 
 }
 var circleObj = new Circle(20);
 circleObj.showArea();

 // ** Multi level inheritance.
 class GrandParentCLS { 
    mes:string; 
 } 
 
 class ParentCLS extends GrandParentCLS {} 
 class ChildCLS extends ParentCLS {} //indirectly inherits from Root by virtue of inheritance  
 
 var obj = new ChildCLS(); 
 obj.mes ="Hello Guys" 
 console.log(obj.mes);

// ** Static 
class StaticCLS {  
    static num:number; 
    
    static disp():void { 
       console.log("The value of num is"+ StaticCLS.num) 
    } 
 } 
 
 StaticCLS.num = 12     // initialize the static variable 
 StaticCLS.disp()      // invoke the static method

 // ** Instance of Operator
 class Person{ } 
var Pobj = new Person() 
var isPerson = Pobj instanceof Person; 
console.log("Pobj is an instance of Person: " + isPerson);

// ** Data Hiding
class PersonDHCLS { 
    str:string = "Hello";
    private str2:string = "Guys";

 }
  
 var PDHobj = new PersonDHCLS();
 console.log(PDHobj.str)     //accessible 
 // console.log(PDHobj.str2)   //compilation Error as str2 is private


 // ** Interface Inheritance
 interface ILoan { 
    interest:number 
 } 
 
 class PersonalLoan implements ILoan { 
    interest:number; 
    rebate:number; 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
 
 var PLobj = new PersonalLoan(10,1) 
 console.log("Interest is : "+PLobj.interest+" Rebate is : "+PLobj.rebate);
