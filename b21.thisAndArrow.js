// working of arrow functions.

// const user = {
//     userName : "umakant",
//     price    : "999",

//     welcomeMsg : function (){
//         console.log(`${this.userName}, welcome to website`);
//         console.log(this);
//     }, //when we refer current context means {} refering the current object we can use this keyword.
// }

// user.welcomeMsg();
// user.userName = "gaurave"; //we have changed the object value here.
// user.welcomeMsg();

// console.log(this);
// //when we try to print current object outside the scope in node js it will return empty object.
// // in brower window object will be printed.

// //Arrow function.

// function fun (){
//     let username = "uma";
//     console.log(this.userName);//we cannot use this keyword in function like this. 
// }
// fun();


// const hero = () => {
//     let userName = "uma";
//     console.log(this.userName); //will return undefine
//     console.log(this); //will return empty object
// }

// hero();

// //***************arrow function************************/

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
// //when we use {} as scope then we need to use return keyword.

// console.log(addTwo(3,5));

// //implicit return 
// const addThree = (num1,num2,num3) =>  (num1+num2+num3);
// //when we use () not need to use return keyword.

// console.log(addThree(1,2,4));



// //if we want to return object in arrow fuction.
// // const hero1 = () => {
// //     return {
// //         name : "umakant",
// //     }
// // }


// const hero1 = (age) => ({
//     myAge : age,
// }); //this is how we return object in arrow functions.

// console.log(hero1(23));

// //eg of loops using array.

// const array = [2,3,4,5,6];

// array.forEach((num) =>{
//     console.log(num);
// });





//--------------------------------------------------------------------------------------------------------------------------------------------

const user = {
    username : "krishna",
    price : 999,

    welcomeMsg : function () {
        console.log(this);//it will print and current object.
        console.log(`this username is ${this.username}`);    
    }
}

console.log(user.welcomeMsg());

console.log(this);//it will print an empty object because their is no current objet.


//this keyword in regular function

function regularFunction () {
    const username = "Arjun";
    console.log(`inside the regular function`);
    // console.log(this.username); //it will print undefined.
    console.log(this); //we got so many values.
}

regularFunction();


//this keyword in arrow function.

const arrowFunction = () => {
    const username = "Karn";
    console.log(this); //will print an empty object.
    console.log(this.username); //it will print undefine.
}

arrowFunction();
