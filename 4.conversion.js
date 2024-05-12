// // conversion of dataTypes

// let score = "24";
// console.log("value of score before conversion => " + typeof (score)); //the type of score is string

// // now we are going to change the type

// let valueInNumber = Number(score); //here we changed the type string to number.
// console.log("value of of score after conversion = >" + typeof valueInNumber); 

// console.log(valueInNumber);


// //here we take another value

// let score1 = "45uma";
// console.log("value of score1 before conversion =>" + typeof (score1));


// // score1 value will be changed to string to number 
// let valueInNumber1 = Number(score1);
// console.log("value of score1 after conversion => " + typeof (valueInNumber1));

// // but when we will print the actual value it would be different
// console.log(valueInNumber1); //it will print not a number

// //lets see conversion of boolean

// let isBool = "uma";
// console.log(typeof (isBool));
 
// let numToBool = Boolean(isBool);
// console.log(numToBool); //it will print true;

//------------------------------------------------------------------------------



//type conversion of null
let variable = null;

console.log(typeof variable); //type of null is object.

let convertToNumber = Number(variable); //converting null into number.
console.log(convertToNumber); //0
console.log(typeof convertToNumber); //number

let convertToString = String(variable); //converting null into string.
console.log(convertToString); //null
console.log(typeof convertToString);//string

let convertToboolean = Boolean(null);//converting null into boolean.
console.log(convertToboolean);//false
console.log(typeof convertToboolean); //boolean.


//type conversion of undefined.

console.log("undefine conversion");

let undefVariable = undefined;

console.log(typeof undefVariable); //undefined

convertToNumber = Number(undefVariable);//convert undefined to number.
console.log(convertToNumber); //NaN
console.log(typeof convertToNumber);//number

convertToString = String(undefVariable);
console.log(convertToString);//undefined
console.log(typeof convertToString);//string

convertToboolean = Boolean(undefVariable);
console.log(convertToboolean);//false.
console.log(typeof convertToboolean);//boolean.
 
//---------------------------------------------------


//conversion of strings 

console.log("--------------------------------");
console.log("String conversion");

let stringVar = "hello99";

console.log(typeof stringVar);

convertToNumber = Number(stringVar);
console.log(convertToNumber);
console.log(typeof convertToNumber);

convertToboolean = Boolean(stringVar);
console.log(convertToboolean);
console.log(typeof convertToboolean);

//----------------------------------------------

console.log("--------------------------------");
console.log("number conversion");


let numberVar = 1234;

console.log(typeof numberVar);

convertToString = String(numberVar);
console.log(convertToString);
console.log(typeof convertToString);

convertToboolean = Boolean(convertToString);
console.log(convertToboolean);
console.log(typeof convertToboolean);

//----------------------------------------------

console.log("--------------------------------");
console.log("boolean conversion");

let booleanVar = true;

console.log(typeof booleanVar);

convertToNumber = Number(booleanVar);
console.log(convertToNumber);
console.log(typeof convertToNumber);

convertToString = String(booleanVar);
console.log(booleanVar);
console.log(typeof convertToString);






