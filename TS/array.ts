console.log('Array Practice');
// const arr:number[] = [1,2,3,4,5];
// console.log(arr, 'Type: '+typeof arr);


// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });
// colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

let str:string[] = ['a','b','c','d','e', 'a', 'f'];
console.log(str.indexOf('a'));
console.log(str.lastIndexOf('a'));

let f1:string[] = ['1', '5', 'g'];
let f2:string[] = ['5', '@'];
console.log(f1.concat(f2));

let j:string[] = ['r', '1', '@', 'name'];
console.log(j.join('+'));

// Array toString example
console.log(j.toString());


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]