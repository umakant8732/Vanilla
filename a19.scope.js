  
// var c = 300; //var is a global variable.
var c = 2300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30
}
//let and const can not access outer side of the function.
//varibles declare in {} are blocked scope,cannot be accessed by outside.
//variable declare in outside of the scope are global scope.

// console.log(a);
// console.log(b);
console.log(c);
  