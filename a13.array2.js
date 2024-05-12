//second session on array.

const marvel = ["thor","ironman","black panther","hawkeye"];
const dc = ["superman","flash","batman","wonder woman"];

// marvel.push(dc);
 //this will not merge dc array into marvel, it will dc array at the last index of marvel array.

// console.log(marvel);

const dcPlusMarvel = marvel.concat(dc);
//concat method returns a new array.

console.log("all heros");
console.log(dcPlusMarvel);

const spreadOp = [...marvel,...dc];
console.log(spreadOp);
//spread operator use to merge arrays.

const newArray = [1,2,3,4,[5,6,7,8,[45,56]],9,10];

const usableArray = newArray.flat(Infinity);
//flat method remove complexity of the array,and return array in simple format

console.log(usableArray); 


const stringValue = "umakant";
console.log(Array.isArray(stringValue));
//it will return false. because stringValue is not a array

console.log(Array.from(stringValue));
//Array.from method convert string or ojbect into an array.
//array each element with indexing.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
//Array.of takes values from entered variable and make an array from it.











