//Going to learn javascript

//old way to print strings

const name = "umakant";
const age = 24;

console.log(name + age);

//modern way to print strings -> string interpolation
console.log(`name of the user is ${name} and age is ${age}`);

//this is how we can create strings
const str = new String("hello guys");
console.log(typeof str); //object
console.log(typeof name);//string


//practice on string prototypes/methods
const myString = new String("  umak ant DEVLoper  ");

console.log(`using length function ${myString.length}`);

console.log(`using toUpperCase ${myString.toUpperCase()}`);

console.log(`using charAt ${myString.charAt(0)}`);

console.log(`using indexOf => ${myString.indexOf('D')}`);

console.log(`using trim => ${myString.trim()} `); //remove spaces from front and back side of the string.

console.log(`using replace ${myString.replace('umak','golu')}`);

console.log(`using include => ${myString.includes('umak')}`);

console.log(`convert string into an array => ${myString.split(' ')}`);
