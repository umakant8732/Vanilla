 
// In this session we are going to compare dataTypes

console.log("2" > 1); //the 2 will be convert automatically in number to output will be true.
console.log(1 < "2");

console.log(null > 0); // 0 > 0 -> false
console.log(null == 0);  // null == 0 -> false
console.log(null >= 0);  // 0 >= 0 -> true

let a = "56adg";

console.log( "before type conversion type is -> " + typeof (a));
console.log( "before type conversion value is -> " + a);


let newA = Number(a);

console.log("after conversion type is -> " + typeof(newA));
console.log("after conversion value is  -> " + newA);


// == ,< , > , <= , >= this opearators are work differently in nulls case.
// when we compare null with 0 with <,>,<=,>= null is treated as 0
// so in 1st case 0 > 0 -> false, in 3rd case 0 >= 0 -> true.

// with undefined

// when we compare undefined with zero it always return false.

console.log(undefined == 0);     
console.log(undefined > 0);     
console.log(undefined < 0); 
console.log(undefined <= 0); 
console.log(undefined >= 0); 

// in above all senerios it will return false.

//Strict Check *

console.log("2" == 2);
// when we use ==, the string value will convert to number
// so it will return true.

console.log("2" === 2);
//in this case conversion will not happene, coz we are using ===

