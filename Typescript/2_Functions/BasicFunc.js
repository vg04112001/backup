// Function with Parameter annotation as number and also number as return type.
function addNum(a, b) {
    return a + b;
}
// Function with Parameter annotation as string but not returning anything. return type void.
function showMes(mes) {
    console.log(mes.toUpperCase());
}
// A variable which has a function type that accepts two numbers and returns a number.
//  let addNum2:(x: number, y: number)=>number;
// Assign a function to the add variable. - (1)
var addNum3 = function (x, y) {
    return x + y;
};
// Assign a function to the add variable. - (2)
var addNum4 = function (x, y) {
    return x + y;
};
console.log(addNum(11, 22));
showMes('God is great.');
// console.log(addNum2);
console.log(addNum3(11, 22));
console.log(addNum4(11, 22));
