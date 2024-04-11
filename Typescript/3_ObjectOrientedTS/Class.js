// Class definition.
var Person = /** @class */ (function () {
    //constructor 
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //function 
    Person.prototype.showPersonDetails = function () {
        console.log("Person Details: " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
//create an object 
var obj = new Person("Abhishek", "Pujara");
//access the function.
obj.showPersonDetails();
