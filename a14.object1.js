// //objects are important in javascripts.
// //we can define object in two ways 1.literal 2.constructor.

// //singleton->when we create object using constructor
// //eg 
// Object.create

// //object literals.
// //object are in key : value pair.we can define key and pair.
// //keys are always string.

// const mySymbol = Symbol("key");

// const obj = {
//     name : "Umakant",
//     "full name" : "Umakant Bhendarkar",
//     age  : 24,
//     location : "Nagbhir",
//     [mySymbol] : "my symbol", //this is how we add symbol in objects.
//     email : "umakant@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["monday","thursday"],
// }



// console.log(obj.name);
// console.log(obj["full name"]); //-> this is the right way to access object values.
// console.log(obj[mySymbol]);//this is how we access symbol values from the object.

// obj.name = "New Umakant"; //this is how we change values of the object.
// console.log(obj['name']);

// obj.greeting = function(){
//     console.log("good morning");
// };

// obj.greeting2 = function(){
//     console.log(`good morning ${this.name}`); //this is use to refering same object.
// }

// console.log(obj.greeting);
// console.log(obj.greeting());
// console.log(obj.greeting2());



// Object.freeze(obj); //this is how we freez the object, now we are not able to change the values of the object.

// ------------------------------------------------------------------------------------------------






