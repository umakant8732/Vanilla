 function multiplyBy (x) {
    return function (y) {
        return x * y;   
    }
 }


// let output = multiplyBy(5);
// console.log(output(5));


console.log(multiplyBy(5)(6));

// we dont use this technique in real life project

 