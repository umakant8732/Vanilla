// Implemeting Memoization in Javascript 
/** Memoization is an optimization technique that can be used to reduce
 * time consuming calculations by saving previous input to something called 
 * cache and returning the result from it.
 */


let sum = 0;
const calculation = (n) => {
    for (let i = 0; i <= n; i++) {

        sum += i;
    }
    return sum;
}



console.log("memoiz function");

const memoizeFunction = (func) => {
    let cache = {};

    return function (...args) {
        let n = args[0];

        if (cache.hasOwnProperty(n)) {
            console.log("through cache");
            return cache[n];
        }
        else {
            console.log("through calculation");
            result = func(n);
            cache[n] = result;
            return result;

        }

    }

}

console.time();
const efficient = memoizeFunction(calculation);
console.log(efficient);
console.timeEnd();


