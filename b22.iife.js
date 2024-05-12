
function normal () {
    console.log("normal function");
}
//this is how we declare a normal function.

normal(); //this is how we call a normal function.


(function iife () {
    console.log("iife function");
})(); //this is how we declare and call a iife function.


//in iife function global scope variable cannot access outside the function.

(function iife () {
    var globalVar = "global variable";
    console.log(globalVar);
})();

// console.log(globalVar);
 //this will generate an error, we cannot access variables outside of iife function.

 ( () => {
    console.log("iife function in arrow function");
 })();

//this is how we use iife functions with arrow functions.


((num1,num2) => {
    console.log(num1+num2);
})(4,6); 

//this is how we pass arguments to iife function.












