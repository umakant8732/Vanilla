//array specific loops.

//for of loops.
//for of loops can be applied on strings and arrays and nap

const forOfArray = [1,2,3,4,5];

for (const num of forOfArray) {
    console.log(num);
}


//for of loop on string
const forOfString = "HelloBrother";

for (const str of forOfString) {
    console.log(str);
}

//maps in js

const map = new Map();

map.set('IN' , "India");
map.set('USA' , "United States Of America");
map.set('UAE' , "United Arab Emirates");
map.set('IN' , "India");

console.log(map); //maps remove duplicate entries only give unique entries.

//using for of loop on maps.

for (const mapValues of map) { //this will bind each key value pair in array and return it.
    console.log(mapValues); 
}

//if we want to keys and values separately then we need to destructure the map
//this is how we can use for of loop on maps
for (const [mapKey, mapValue] of map) {
    console.log(`key of the map is ${mapKey} and the value is ${mapValue}`);
}


//using for of loop on objects
//we cannot iterate object using for of loops
//we have different ways to iterate over the objects.

const forOfObj =  {
    name : "Raj",
    age  : 23
}

// for (const [objKey,objValue] of forOfObj) {
//     console.log(`key of the map is ${objKey} and the value is ${objValue}`);
// }


//-----------------------------------------------------------------------------

//for in loop 

//we use for in loop for object,arrays,strings it will give only keys but can access values also
//we cannot use for in loop on maps because maps are not iterable.

const forInObj = {
    name : "Ram",
    Age : 23,
    city : "Nagpur"
}

//using for in loop on 

for (const values in forInObj) { //this will give only keys
   console.log(values); 
}

for (const key in forInObj) { //this  is how we access keys and values of object using for in loop
    console.log(`${key} => ${forInObj[key]}`);
}


//using for in loop on arrays

const forInArray = ["spider","batman","flash"];

for (const key in forInArray) { //it will give keys of an array
    console.log(key); 
}

for (const key in forInArray) { //this is how we access key or array using forin loop
    console.log(forInArray[key]);
}

//using for in loop on string

const forInString = "Krishna";

for (const key in forInString) {
   console.log(key);
}

//-------------------------------------------------------------------------------------------------

 
//foreach loop on arrays/specially made for arrays

const forEachArray = ["js","ruby","python","cpp","php"];

forEachArray.forEach((arrayValue)=>{
    console.log(arrayValue);
});

forEachArray.forEach((value,index,wholeArray) => {
    console.log(value,index,wholeArray);
});

//foreach loop on array of objects

const arrayOfObj = [
    {
        name : "Krishna",
        weapon : "Sudarshan"
    },
    {
        name : "Ram",
        weapon : "Bow and Arrow"
    },
    {
        name : "Hanuman",
        weapon : "Powerful itself"
    }
];

arrayOfObj.forEach((array,index)=>{
    console.log(array.name);
});


