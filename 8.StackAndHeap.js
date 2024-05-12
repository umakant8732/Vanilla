//going to discuss about stack and heap memory.

//we have two types of memory stack and heap

// primitive dataTypes using stack memory
// non primitive using heap memory.

// when stack memory will use we get copy of variable
// when heap memory will use we get reference of variable.

//example of stack memory.

let name1 = "umakant"; //will go to stack memory
let name2 = name1; //here we assign a value name1 which is a copy and not a original value.
name2 = "Gaurav"; //now we changed the value of name2.

console.log(name1); //value of name1 will remain because we assign a copy of name1 in name2. so original value will not change.
console.log(name2); //the value of name2 will change as gaurav.

//example of heap memory.

let userOne = {
    name:"umakant",
    age : 23
} //this object will be stored in heap memory.

let userTwo = userOne; //now useOne and useTwo sharing the same reference.

userTwo.age = 24; //here we changed the age.

console.log(userOne.age); // it will print 24, means the original has changed.because userOne and userTwo was sharing the same reference in heap memory.








 





