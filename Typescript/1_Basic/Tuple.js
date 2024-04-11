// There might be a need to store a collection of values of varied types. 
// Arrays will not serve this purpose.
var demoTuple = [1, "Abhishek", "Pujara"];
console.log("Count before push " + demoTuple.length); // returns the tuple size 
demoTuple.push(2); // append value to the tuple 
console.log("Count after push " + demoTuple.length);
console.log("Count before pop " + demoTuple.length);
console.log(demoTuple.pop() + " popped from the tuple"); // removes and returns the last item
console.log("Count after pop " + demoTuple.length);
