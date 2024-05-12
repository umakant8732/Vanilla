
function calculateCartPrice(...item1){
    return item1;
}
console.log(calculateCartPrice(200,300,400)); 

//in above case we used rest operator, when we don't know how many item will be passed to function.


function calculateCartPrice2(item1,item2, ...unknownItem){
    return unknownItem;
}
console.log(calculateCartPrice2(2,3,4,5,6));

//in above case first two attributes will be assigned to first two parameters
//remaining attributes will be assigned to rest operator in this case unknownItem


const userObj = {
    username : "raj",
    age : 23
}

function handleObj (anyobj) {
    console.log(`name of the user ${anyobj.username} and the age is ${anyobj.age}`);
}

handleObj(userObj);

//in above case we understand how to pass object to a function and extract values of from its.


const myArray = [100,200,300];

function handleArray (getArray) {
    return getArray[1];
}

console.log(handleArray(myArray));

