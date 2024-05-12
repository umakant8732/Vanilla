// understanding what is closure

function outerFunction(num1) {
    console.log("value of num1 " + num1);

    return function (num2) {
        return num1 + num2;
    }
}

let store = outerFunction(5);
console.log(store(5));

// example 2 with multiple functions return

function outerFunction2(num1, num2) {

    console.log(`value of num 1 => ${num1} and num 2 => ${num2}`);

    return {
        sumOfTwoNumbers: function () {
            return num1 + num2;
        },

        multiPlicationOfTwoNumbers: function () {
            return num1 * num2;
        }

    }

}

let store2 = outerFunction2(5,10);
console.log(`sum of two numbers ${store2.sumOfTwoNumbers()}`);



// practical example of closure
function changeBgColor(color) {
    return function () {
        document.body.style.backgroundColor = `${color}`;
    }

}

document.getElementById('orange').onclick = changeBgColor("Orange");