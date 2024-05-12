const myArray = [1, 2, 3, 4, 5, 6];
//array is js are resizable.

console.log(myArray[0]);
//this is how we access the first element of the array.
//arrays are store in heap memory.

const myArray2 = new Array(1,2,3,4,5,6);
//this is another method for creating array.

//********* methods */

myArray.push(7);
//this is how we add elements to the array.also add elements at the last position.

myArray.pop();
//pop method remove the last element of the array.

myArray.unshift(4); 
//unshift method add the element at the first position.

myArray.unshift();
//unshift method remove the first element of the array.

console.log(myArray.includes(2));
//this is how we check if the element is present in the array.

console.log(myArray.indexOf(5));
//this is how we get the index of the element in the array,if its present.
//otherwise it will return -1.

const newArray = myArray.join();
//this is how we convert the array into string.
console.log(newArray);

//slice and splice.

const marvel = ["thor", "iron man", "captain america","captain marvel","black panther"];
const sliceArray = marvel.slice(1, 3);
//slice does not modify the original array.
//slice does not cover the full range.
console.log("slice array ", sliceArray);
console.log("after slice marvel array ", marvel);

const spliceArray = marvel.splice(1, 3);
//splice modify the original array.
//splice coveres the range.
console.log("splice array ", spliceArray);
console.log("original marvel array ", marvel);






