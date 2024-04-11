"use strict";
// console.log('typescript');
// var n:number = 50;
// n = 55;
function abc(a, b) {
    return a + b;
}
console.log(abc(5, 10));
let num = NaN;
console.log(num);
let sentence = 'please add comment properly';
// let output:string = sentence.slice(0,11);
let output = sentence.substring(0, 11);
console.log(output);
// let str1:string = 'can you add it';
// let str2:string = 'how are you';
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);
// const arr3:number[] = Array.of(1,2,3,4,5);
console.log(arr1);
console.log(arr2);
// console.log(arr3);
const dummyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfNumbers = (arr) => {
    let total = 0;
    arr.forEach((item) => {
        total += item;
    });
    return total;
};
console.log(sumOfNumbers(dummyArr));
// any vs unknown
let anyVar = 'viraj';
anyVar = 10;
console.log(anyVar);
let unknownVar = 'abc';
unknownVar = 15;
console.log(unknownVar);
const person = {
    name: 'abc',
    age: 21,
    address: {
        city: 'rajkot',
        state: 'gujarat'
    }
};
// console.log(person.address.city)
const information = (person) => {
    return `Name:- ${person.name} Age:- ${person.age} City:- ${person.address.city}`;
};
console.log(information(person));
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    email: 'a@b.com',
    role: Roles.admin
};
const isAdmin = (user) => {
    const { name, email, role } = user;
    return role === 'admin' ? `${email} is allow` : `${email} is not allow`;
};
console.log(isAdmin(user1));
const displayPersonInfo = (person) => {
    const [name, age, hasDriverLicense] = person;
    console.log(`Name: ${name} Age: ${age}, DL: ${hasDriverLicense ? 'Yes' : 'No'}`);
};
const person1 = ['abc', 22, true];
const person2 = ['xyz', 17, false];
displayPersonInfo(person1);
displayPersonInfo(person2);
// Union and Intersection
const userInput = (value) => {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        throw new Error('Invalid');
    }
};
console.log(userInput(10));
console.log(userInput('abc'));
const newObj = {
    name: 'abc',
    age: 21,
    isLogin: true
};
console.log(newObj);
const unionOut = {
    name: 'abc',
    age: 54,
    city: 'rajkot',
    // country: 'india'
};
const intersectionOut = {
    name: 'abc',
    age: 54,
    city: 'rajkot',
    country: 'india'
};
console.log('Union: ', unionOut);
console.log('Intersection: ', intersectionOut);
const user = { name: 'abc', age: 21, qualification: 'BE in CE' };
console.log(user);
const updatedUser = Object.assign(Object.assign({}, user), { name: 'AAA' });
console.log(updatedUser);
const myLocation = { city: 'rajkot', country: 'india' };
const createUserProfile = (userInst, locationInst) => {
    // return `My name is ${userInst.name} and I am from ${locationInst.city}`
    return Object.assign(Object.assign({}, userInst), locationInst);
};
const completeInfo = createUserProfile(user, myLocation);
console.log(completeInfo);
// interface Products {
//     name:string;
//     price:number;
// }
// interface Products {
//     quantity:number;
// }
const product1 = {
    name: "abc",
    price: 100,
    quantity: 10
};
const calculateTotalPrice = (product) => {
    const { price, quantity } = product;
    return price * quantity;
};
console.log(calculateTotalPrice(product1));
// // Generics
// function logAndReturn<T>(value:T):T {
//     return value;
// }
// console.log('Generics')
// console.log(logAndReturn<number>(22));
// console.log(logAndReturn<string>('ABC'));
// function getGenericElement<T>(val: T[]): T[] {
//     console.log(val.length)
//     console.log("Type of val[0]: "+typeof val[0]);
//     console.log("Type of val[1]: "+typeof val[1]);
//     console.log("Type of val[2]: "+typeof val[2]);
//     console.log("Type of val[3]: "+typeof val[3]);
//     console.log("Type of val[4]: "+typeof val[4]);
//     console.log("Type of val[5]: "+typeof val[5]);
//     return val;
// }
// let numbers = [1, 5, 7, 4, 2, 9];
// console.log(getGenericElement<number>(numbers));
// let strs = ["1", "5", "7","1", "5", "7"];
// console.log(getGenericElement<string>(strs));
// let mixedArr = [1,2.5,"abc",true, undefined, null];
// console.log(getGenericElement(mixedArr));
// function genericLog<T,U>(a:T, b:U): void{
//     console.log(typeof a);
//     console.log(typeof b);
// }
// genericLog<number, string>(5, 'abc');
// genericLog<string, boolean>('abc', true);
// function displayType<T>(id:T, name:string): void { 
//     console.log(typeof(id) + ", " + typeof(name));  
//   }
// displayType<number>(1, "Steve"); // number, string
// interface genericInterface<K, V> {
//     key: K;
//     value: V;
// }
// let student: genericInterface<string, number> = {
//     key: 'Roll No',
//     value: 1
// };
// let student2: genericInterface<number, boolean> = {
//     key:1,
//     value: true
// };
// console.log(student);
// console.log(student2);
// interface KeyValueProcessor<T, U>
// {
//     (key: T, val: U): void;
// };
// function processKeyPairs<T, U>(key:T, value:U):void { 
//     console.log(`processKeyPairs: key = ${key}, value = ${value}`)
// }
// let numKVProcessor: KeyValueProcessor<number, number> = processKeyPairs;
// numKVProcessor(1, 12345); //Output: processKeyPairs: key = 1, value = 12345 
// let strKVProcessor: KeyValueProcessor<number, string> = processKeyPairs;
// strKVProcessor(1, "Bill"); //Output: processKeyPairs: key = 1, value = Bill 
// Class
class Persons {
    constructor(a, b, c) {
        this.naam = a;
        this.age = b;
        this.hobbies = c;
    }
    // Shorthand properties in class
    // constructor(public naam: string, public age: number, protected hobbies: string[]) {
    // }
    introduce() {
        return `${this.naam} ${this.age} ${this.hobbies.join(',')}`;
    }
}
class Students extends Persons {
    constructor(a, b, c, g) {
        super(a, b, c);
        this.grade = g;
    }
    introduce() {
        // return `${this.naam} ${this.age} ${this.hobbies.join(',')} ${this.grade}`
        return `${super.introduce()} ${this.grade}`;
    }
}
const p1 = new Persons('abc', 22, ['cricket', 'leadership']);
console.log(p1);
console.log(p1.introduce());
const s1 = new Students('abc', 22, ['cricket', 'leadership'], 12);
console.log(s1.introduce());
// readonly properties
class PersonReadOnly {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // This method can access the readonly properties
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const pr = new PersonReadOnly("Alice", 30);
console.log(pr.name);
console.log(pr.age);
// Trying to modify readonly properties will result in an error
// pr.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
// pr.age = 31; // Error: Cannot assign to 'age' because it is a read-only property
class C {
    constructor() {
        this._length = 0;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
let c1 = new C();
console.log(c1._length);
// c1.length = 100; // readonly beacuse only get method is there
// Static method and variable
class MathOperations {
    static add(num1, num2) {
        return num1 + num2;
    }
}
MathOperations.PI = Math.PI;
console.log(MathOperations.PI);
console.log(MathOperations.add(15, 15));
// Abstract
class Base {
    printName() {
        console.log("Hello, " + this.getName());
    }
}
// const b = new Base();
