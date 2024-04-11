"use strict";
// Generics in function
console.log('Generics in function\n');
function logAndReturn(value) {
    return value;
}
console.log(logAndReturn(22));
console.log(logAndReturn('ABC'));
console.log('\n');
function getGenericElement(val) {
    // console.log(val.length)
    console.log("Type of val[0]: " + typeof val[0]);
    console.log("Type of val[1]: " + typeof val[1]);
    console.log("Type of val[2]: " + typeof val[2]);
    console.log("Type of val[3]: " + typeof val[3]);
    console.log("Type of val[4]: " + typeof val[4]);
    console.log("Type of val[5]: " + typeof val[5]);
    return val;
}
let numbers = [1, 5, 7, 4, 2, 9];
console.log(getGenericElement(numbers));
let strs = ["1", "5", "7", "1", "5", "7"];
console.log(getGenericElement(strs));
let mixedArr = [1, 2.5, "abc", true, undefined, null];
console.log(getGenericElement(mixedArr));
console.log('\n');
// Multiple Type Variables
function bothGeneric(a, b) {
    console.log(typeof (a) + ", " + typeof (b));
}
bothGeneric(5, 'abc');
bothGeneric('abc', true);
function oneVarGeneric(a, b) {
    console.log(typeof (a) + ", " + typeof (b));
}
oneVarGeneric(1, "Steve"); // number, string
function displayNames(names) {
    console.log(names.join(", "));
}
displayNames(["Steve", "Bill"]); // Steve, Bill
console.log('\n');
// Generics Interface
console.log('Generics interface starts');
let student = {
    key: 'Roll No',
    value: 1
};
let student2 = {
    key: 1,
    value: true
};
console.log(student);
console.log(student2);
;
function processKeyPairs(key, value) {
    console.log(`processKeyPairs: key = ${key}, value = ${value}`);
}
let numKVProcessor = processKeyPairs;
numKVProcessor(1, 12345); //Output: processKeyPairs: key = 1, value = 12345 
let strKVProcessor = processKeyPairs;
strKVProcessor(1, "Bill"); //Output: processKeyPairs: key = 1, value = Bill
;
class kvProcessor {
    process(key, val) {
        console.log(`Key = ${key}, val = ${val}`);
    }
}
let proc = new kvProcessor();
proc.process(1, 'Bill'); //Output: processKeyPairs: key = 1, value = Bill
console.log('Generics Class starts');
// Generic Class
class KeyValuePair {
    // private key: T;
    // private val: U;
    setKeyValue(newKey, newVal) {
        this.key = newKey;
        this.val = newVal;
    }
    display() {
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}
let kvp1 = new KeyValuePair();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); //Output: Key = 1, Val = Steve 
let kvp2 = new KeyValuePair();
kvp2.setKeyValue("CEO", "Bill");
kvp2.display(); //Output: Key = CEO, Val = Bill
console.log('Generic Class and Interface');
;
class kvProcessor2 {
    process(key, val) {
        console.log(`Key = ${key}, val = ${val}`);
    }
}
let p = new kvProcessor2();
p.process(10, 'Generic Class implements Generic Interface'); //Output: Key = 10, value = Generic Class implements Generic Interface 
// Generic in Type Annotation
// type ApiResponse<Data> = {
//   data: Data;
//   isError: boolean;
// }
// // type UserResponse = ApiResponse<{name: string, age: number}>
// const response:ApiResponse<{name: string, age: number}> = {
//   data: {
//     name: 'abc',
//     age: 21
//   },
//   isError: false
// }
