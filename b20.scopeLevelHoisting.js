//understanding what is scope level and mini hoisting.

//nested scope


function outerFunction() {
    const username = "Raj";

    function innerFunction(){
        const age = 23;
        console.log(username);
    }
    // console.log(age); //we cannot access the variable outside the scope.
    innerFunction();
}

outerFunction()