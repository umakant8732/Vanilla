//object destructuring.

const course = {
    courseName : "Javascript",
    price      : "899",
    platform   : "udemy"
}

console.log(course.price);
//if we want to access price of the course many times we need to access as above mention.
//instead of doint this, try below method.

const {price: coursePrice} = course; //we can do like this if we want to see object value many times.
console.log(coursePrice);
//this is how we destructure the array.


//api object eg json.

// {
//     "name" : "umakant",
//      "age" : 23,
// } //eg of json

//sometimes we got api in array format.







