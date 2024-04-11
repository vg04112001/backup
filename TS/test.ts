function greetUser(name: string | null) { 

	// Using the non-null assertion operator 
	// to ensure 'name' is not null 
	const formattedName: string = name!; 
	console.log( 
		`Hello, ${formattedName || 'GeeksforGeeks'}!`); 
} 

greetUser("Akshit"); // Output: Hello, Akshit! 
greetUser(null); // Output: Hello, GeeksforGeeks!