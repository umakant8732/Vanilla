//some operation on number/

const number = new Number(123.44); //statically define a number in variable.
console.log(number);
console.log(number.toString());//we can change a number into the string.
console.log(number.toString().length); //can also perform string operation on number.

console.log(number.toFixed(5)); //when precision value is too much we use this method to shorten the exact number.
//we enter 5 means it will return like this. 123.44000 5 numbers after decimal.

console.log(number.toPrecision(5)); //it will return the precise value.
//also return exponential value so use this method carefully.this method return string.

const price = 100000000;

console.log(price.toLocaleString()); //by default this follows USA standard

console.log(price.toLocaleString('en-IN'));//indian starndard.


//****************maths***********************/

console.log(Math); //it will return an object;
console.log(Math.abs(-4)); //it will convert only negative values to positive.

console.log(Math.round(123.5555));//return round figure values.
console.log(Math.ceil(123.5555)); //make it round figure but choose top end value.
console.log(Math.floor(123.5555));//make it round figure but choose low end value

console.log(Math.sqrt(25));//return square root. of enter number.

console.log(Math.random());//by default it will return the value between o and 1.

console.log(Math.random()*10); //we are multiplying with 10 means range will be the 0 to 9 here.
//but we dont want 0 also the range should be 1 to 10.

console.log((Math.random() * 10) + 1);
//in above case we are adding 1, if it return 0 then -> 0+1
//or return 9 then 9+1.

console.log(Math.floor((Math.random() * 10) + 1));
//we dont want a number with decimal so we use math.floor to get low end value.

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min);






