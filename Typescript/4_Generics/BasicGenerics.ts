// ** Array with specific datatype - string.
function getValue(str: string[]): string[] {
    console.log("Type of str[0]: "+typeof str[0]);
    console.log("Type of str[1]: "+typeof str[1]);
    console.log("Type of str[2]: "+typeof str[2]);
    return str;
}
console.log(getValue(["Abhishek","Nidhi","Jay"]));


// ** Array with any datatype.
// It doesn’t allow you to enforce the type of the returned element. 
// In other words, it isn’t type-safe.
function getElements(val: any[]): any {
    console.log("Type of val[0]: "+typeof val[0]);
    console.log("Type of val[1]: "+typeof val[1]);
    console.log("Type of val[2]: "+typeof val[2]);
    console.log("Type of val[3]: "+typeof val[3]);
    console.log("Type of val[4]: "+typeof val[4]);
    console.log("Type of val[5]: "+typeof val[5]);
    console.log("Type of val[6]: "+typeof val[6]);
    return val;
}
console.log(getElements(["Abhishek","Nidhi","Jay",1,2,3,33.33]));


// ** Generic
// At the time run - calling the function can specify the type dynamically.
function getGenericElement<T>(val: T[]): T[] {
    console.log(val.length)
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
