//conversion of string to number is always confusing.

// let integer = 33;
// console.log("before string conversion " + typeof (integer)); //will print number

// let stringInteger = String(integer);
// console.log(stringInteger);
// console.log("after conversion "  + typeof (stringInteger)); //will print string

// ************************operations*****************************

//thats how to add two strings

let str1 = "hello";
let str2 = " Umakant";

console.log(str1 + str2); //output will be hello Umakant

let num = 5;
let str = "hello";

console.log(str + num); //will print hello5
console.log(num + str); //will print 5hello

//when we take number and string and try to add them
// the num will be converted to string and concatenated.


console.log("1" + 2); //output 12
console.log(1 + "2"); //output 12

console.log("1" + "3" + 4); //output 134
console.log(1 + "3" + "4"); //output 134

console.log(1 + "2" + 3 + "5"); //output 1235

console.log(1 + 2 + "3"); //output 33 it will add first 2 numbers and concatenate 3rd value with it.

// some tricky conversions

console.log(true); //output-> true
console.log(+true); //output-> 1 


// ==========================================================================================

console.log("==================================================================");

console.log("1" + 4); //14
console.log("4" + 1); //41

console.log("4" + 1 + 4 + 6); //4146
console.log(1+3+4+ "5" + 4 + 3); //8543
console.log(1+4+ "4" - 3 - 1); //50

console.log(1+4+2+"4"-"3"+4+"3");

console.log("4" + 3 - 1 - "2" + "3" + "4" - "1" - 1); //4032





