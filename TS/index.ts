// console.log('typescript');
// var n:number = 50;

// n = 55;

function abc(a:number,b:number):number{
    return a + b;
}

console.log(abc(5,10));

let num:number = NaN;
console.log(num);

let sentence:string = 'please add comment properly';
// let output:string = sentence.slice(0,11);
let output:string = sentence.substring(0,11);
console.log(output);

// let str1:string = 'can you add it';
// let str2:string = 'how are you';

const arr1:number[] = [1,2,3,4,5]
const arr2:number[] = new Array(1,2,3,4,5);
// const arr3:number[] = Array.of(1,2,3,4,5);

console.log(arr1);
console.log(arr2);
// console.log(arr3);

const dummyArr = [1,2,3,4,5,6,7,8,9,10];

const sumOfNumbers = (arr:number[]): number => {
    let total = 0;
    arr.forEach((item)=> {
        total += item;
    })
    return total;
}

console.log(sumOfNumbers(dummyArr))


// any vs unknown
let anyVar: any = 'viraj'
anyVar = 10;
console.log(anyVar);

let unknownVar: unknown = 'abc'
unknownVar = 15;
console.log(unknownVar);

// const canBeAnything: any = 100;
// const canNotBeAnything: unknown = '100';

// // If we try to use a .startsWith() method
// canBeAnything.startsWith('10'); // no error
// if(typeof canNotBeAnything === 'string') {
//     canNotBeAnything.startsWith('10'); // Property 'startsWith' does not exist on type 'unknown'
// }

type Person = {
    name: string;
    age: number;
    address: {
        city: string;
        state: string;
    }
}

const person: Person = {
    name: 'abc',
    age: 21,
    address: {
        city: 'rajkot',
        state: 'gujarat'
    }
}

// console.log(person.address.city)

const information = (person:Person) => {
    return `Name:- ${person.name} Age:- ${person.age} City:- ${person.address.city}`
}

console.log(information(person));


enum Roles {
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name?:string;
    email:string;
    role:Roles;
}

const user1:LoginDetails = {
    email:'a@b.com',
    role:Roles.admin
}

const isAdmin = (user:LoginDetails) => {
    const {name, email, role} = user;
    return role === 'admin' ? `${email} is allow` : `${email} is not allow`
}

console.log(isAdmin(user1));


// Tuple example
type PersonInfo = [string, number, boolean];

const displayPersonInfo = (person: PersonInfo) => {
    const [name, age, hasDriverLicense] = person;
    console.log(`Name: ${name} Age: ${age}, DL: ${hasDriverLicense ? 'Yes' : 'No'}`);
}


const person1:PersonInfo = ['abc', 22, true];
const person2:PersonInfo = ['xyz', 17, false];

displayPersonInfo(person1);
displayPersonInfo(person2);


// Union and Intersection

const userInput = (value: string | number) => {
    if(typeof value === 'number'){
        return value * 2;
    }
    else if(typeof value === 'string'){
        return value.toUpperCase();
    }
    else{
        throw new Error('Invalid');
    }
}

console.log(userInput(10));
console.log(userInput('abc'));

type PersonType = {
    name:string;
    age:number;
    qualification?:string;
}

type NewPersonType = PersonType & {
    isLogin: boolean;
}

const newObj: NewPersonType = {
    name: 'abc',
    age: 21,
    isLogin: true
}

console.log(newObj);

type MyLocation = {
    city:string;
    country:string;
}


const unionOut: PersonType | MyLocation = {
    name: 'abc',
    age: 54,
    city: 'rajkot',
    // country: 'india'
}

const intersectionOut: PersonType & MyLocation = {
    name: 'abc',
    age: 54,
    city: 'rajkot',
    country: 'india'
}

console.log('Union: ', unionOut);
console.log('Intersection: ', intersectionOut);

const user:PersonType = { name: 'abc', age: 21, qualification: 'BE in CE' };
console.log(user)
const updatedUser:PersonType = {...user, name: 'AAA'}
console.log(updatedUser);
const myLocation:MyLocation = { city: 'rajkot', country: 'india' };

const createUserProfile = (userInst:PersonType, locationInst:MyLocation ) => {
    // return `My name is ${userInst.name} and I am from ${locationInst.city}`
    return {
        ...userInst, ...locationInst
    }
}

const completeInfo: PersonType & MyLocation = createUserProfile(user, myLocation)
console.log(completeInfo);


// Interface
interface Products {
    name:string;
    price:number;
    quantity:number;
}

// interface Products {
//     name:string;
//     price:number;
// }

// interface Products {
//     quantity:number;
// }

const product1:Products = {
    name: "abc",
    price: 100,
    quantity: 10
}

const calculateTotalPrice = (product: Products) => {
    const { price, quantity } = product
    return price * quantity;
}

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
    naam: string;
    age: number;
    hobbies : string[];

    constructor(a: string, b: number, c: string[]) {
        this.naam = a;
        this.age = b;
        this.hobbies = c;
    }

    // Shorthand properties in class
    // constructor(public naam: string, public age: number, protected hobbies: string[]) {
    // }

    introduce():string {
        return `${this.naam} ${this.age} ${this.hobbies.join(',')}`
    }
}

class Students extends Persons {
    grade: number;
    constructor(a: string, b: number, c: string[], g:number){
        super(a, b, c)
        this.grade = g;
    }
    introduce():string {
        // return `${this.naam} ${this.age} ${this.hobbies.join(',')} ${this.grade}`
        return `${super.introduce()} ${this.grade}`
    }
}

const p1:Persons = new Persons('abc', 22, ['cricket', 'leadership']);
console.log(p1);
console.log(p1.introduce());

const s1:Students = new Students('abc', 22, ['cricket', 'leadership'], 12);
console.log(s1.introduce());


// readonly properties

class PersonReadOnly {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
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
  _length = 0;
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
    public static PI: number = Math.PI;
    
    public static add(num1: number, num2:number) {
        return num1 + num2;
    }
}

console.log(MathOperations.PI);
console.log(MathOperations.add(15,15));

// Abstract

abstract class Base {
    abstract getName(): string;
   
    printName() {
      console.log("Hello, " + this.getName());
    }
  }
   
// const b = new Base();