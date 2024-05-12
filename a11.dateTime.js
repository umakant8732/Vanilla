//Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
//every Date method try to print data in differnt way.


let myNewDate = new Date(2020, 11, 10);
//this is how we declare specifie date.

console.log(myNewDate);
console.log(myNewDate.toDateString());
console.log(myNewDate.toLocaleString());
console.log(myNewDate.toLocaleDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp); //date will be in millisecond.
  





