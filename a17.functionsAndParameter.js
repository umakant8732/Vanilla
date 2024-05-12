
function add (num1,num2){
    console.log(num1+num2);
};
//this is how we create a function.

// add(3,5);
//this is how we call function.

const result = add(2,4);
console.log(result); //this will print undefine.
//because function is not return anything, it just printing.

function add1(num1,num2){
    return num1 + num2;

}

const result1 = add1(4,6);
console.log(result1);

function login (userName){
    if(userName === undefine){
        console.log("please enter a name");
    }
    else{     
        return `${userName} you have logged in`;
    }
}

let isLoggedIn = login("umakant");
console.log(isLoggedIn);

