// Generics in function
console.log('Generics in function\n');

function logAndReturn<T>(value:T):T {
  return value;
}
console.log(logAndReturn<number>(22));
console.log(logAndReturn<string>('ABC'));
console.log('\n')

function getGenericElement<T>(val: T[]): T[] {
  // console.log(val.length)
  console.log("Type of val[0]: "+typeof val[0]);
  console.log("Type of val[1]: "+typeof val[1]);
  console.log("Type of val[2]: "+typeof val[2]);
  console.log("Type of val[3]: "+typeof val[3]);
  console.log("Type of val[4]: "+typeof val[4]);
  console.log("Type of val[5]: "+typeof val[5]);
  return val;
}
let numbers = [1, 5, 7, 4, 2, 9];
console.log(getGenericElement<number>(numbers));

let strs = ["1", "5", "7","1", "5", "7"];
console.log(getGenericElement<string>(strs));

let mixedArr = [1,2.5,"abc",true, undefined, null];
console.log(getGenericElement(mixedArr));

console.log('\n');

// Multiple Type Variables
function bothGeneric<T,U>(a:T, b:U): void{
  console.log(typeof(a) + ", " + typeof(b));  
}
bothGeneric<number, string>(5, 'abc');
bothGeneric<string, boolean>('abc', true);

function oneVarGeneric<T>(a:T, b:string): void {
  console.log(typeof(a) + ", " + typeof(b));  
}
oneVarGeneric<number>(1, "Steve"); // number, string

function displayNames<T>(names:T[]): void { 
  console.log(names.join(", "));  
}
displayNames<string>(["Steve", "Bill"]); // Steve, Bill

console.log('\n');

// Generics Interface
console.log('Generics interface starts');
interface genericInterface<K, V> {
  key: K;
  value: V;
}
let student: genericInterface<string, number> = {
  key: 'Roll No',
  value: 1
};

let student2: genericInterface<number, boolean> = {
  key:1,
  value: true
};

console.log(student);
console.log(student2);


interface KeyValueProcessor<T, U>
{
  (key: T, val: U): void;
};

function processKeyPairs<T, U>(key:T, value:U):void { 
  console.log(`processKeyPairs: key = ${key}, value = ${value}`)
}

let numKVProcessor: KeyValueProcessor<number, number> = processKeyPairs;
numKVProcessor(1, 12345); //Output: processKeyPairs: key = 1, value = 12345 

let strKVProcessor: KeyValueProcessor<number, string> = processKeyPairs;
strKVProcessor(1, "Bill"); //Output: processKeyPairs: key = 1, value = Bill

interface IKeyValueProcessor<T, U>
{
    process(key: T, val: U): void;
};

class kvProcessor implements IKeyValueProcessor<number, string>
{ 
    process(key:number, val:string):void { 
        console.log(`Key = ${key}, val = ${val}`);
    }
}

let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'Bill'); //Output: processKeyPairs: key = 1, value = Bill


console.log('Generics Class starts');
// Generic Class

class KeyValuePair<T,U>
{ 
  // ! Non-Null Assertion Operator
    private key!: T;
    private val!: U;

    // private key: T;
    // private val: U;

    setKeyValue(newKey: T, newVal: U): void { 
        this.key = newKey;
        this.val = newVal;
    }

    display():void { 
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); //Output: Key = 1, Val = Steve 

let kvp2 = new KeyValuePair<string, string>();
kvp2.setKeyValue("CEO", "Bill"); 
kvp2.display(); //Output: Key = CEO, Val = Bill


console.log('Generic Class and Interface');
// Generic Class and Interface common example
interface IKeyValueProcessor<T, U>
{
    process(key: T, val: U): void;
};

class kvProcessor2<T, U> implements IKeyValueProcessor<T, U>
{ 
    process(key:T, val:U):void { 
        console.log(`Key = ${key}, val = ${val}`);
    }
}

let p: IKeyValueProcessor<number, string> = new kvProcessor2();
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