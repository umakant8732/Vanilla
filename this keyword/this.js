// scenerio 1
//refers to the object it belongs to.
let employee = {
    name : "John",
    role : function () {
        console.log(this.name, " working as a developer");
    }
}

employee.role();

// sceneria 2
// alone it refers to global object in this case
// it will refers to window object

console.log(this);


// scenerio 3
// in regular function it will refers to gloabal object
// means window object in this case.

function valueOfThis () {
    console.log(this);
}

valueOfThis();



// scenerio 4

let familyObject =  {
    
    familyName : "Sharma",

    GrandParent : function () {
        console.log(`family name is ${this.familyName}`);

        function ParentFunction () {
            console.log("inside the parent function");
            console.log(this); //this is refer to window ojbect because it is behave like alone function.
        }

        ParentFunction();
    }
}


familyObject.GrandParent();
