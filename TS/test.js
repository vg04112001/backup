"use strict";
function greetUser(name) {
    // Using the non-null assertion operator 
    // to ensure 'name' is not null 
    const formattedName = name;
    console.log(`Hello, ${formattedName || 'GeeksforGeeks'}!`);
}
greetUser("Akshit"); // Output: Hello, Akshit! 
greetUser(null); // Output: Hello, GeeksforGeeks!
