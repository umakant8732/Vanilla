//if statement
//truthy values are those values which are assume to be true.


const nameExists = "umakant";

if(nameExists){
    console.log(nameExists);
}
else{
    console.log("no name found");
}

//falsy values.
//false, 0, -0, bigInt->0n, "", null, undefined, NaN. ===> these are falsy values.
//truthy values "0", "false", " ", [], { }, function(){}, 

const array = [];

if(Array.isArray(array)){
    console.log("it is an array");
}
else{
    console.log("it is not an array");
}


//nullish coalescing Operator (??): null undefine.

let val;

val = 5 ?? 10;

val = null ?? 10;

val = undefined ?? 13;

val = 12 ?? undefined;

val = null ?? 10 ?? 23;

console.log(val);

//ternary operator.

// condition ? true : false;


const price = 100;

price >= 80 ? console.log("greater than 80") : console.log("less than 80");



