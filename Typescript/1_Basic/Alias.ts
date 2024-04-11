//Alias Datatype.
type chars = string;
let mes: chars;
mes="God Is Great.";
console.log(mes);

// Union Datatype Alias.
type alphanumeric = string | number;
let input: alphanumeric;
input = 1; // valid
input = "God Is Great."; // valid
// input = false; // Compiler error