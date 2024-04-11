// Type inference describes where and how TypeScript infers types when you don’t explicitly annotate them.
// TypeScript guesses the type by itself.
// Type annotations.
var num;
num = 0;
// Type inference.
var arrInf = [0, 1, null, 'Hi', new Date()];
console.log(typeof arrInf);
console.log(typeof arrInf[0]);
console.log(typeof arrInf[2]);
console.log(typeof arrInf[3]);
console.log(typeof arrInf[4]);
