 //learn how to create singleton object/constructor.

const webUser = new Object(); //singleton object
const webUser1 = {}; //literal object/non singleton object.
//both are empty object.

console.log(webUser); //empty
console.log(webUser1); //empt

webUser1.id = "uma123";
webUser1.name = "Umakant";
webUser1.isLoggedIn = false;

console.log(webUser1);

const regularUser = {
  email: "umakant@gmail.com",
  fullName: {
    fistName: "Umakant",
    lastName: "Bhendarkar",
  }, //we add object into the object.
};

console.log(regularUser.fullName.fistName);
//this is how we access nested object values.

const user1 = {
  1: "Umakant",
};

const user2 = {
  2: "Gaurav",
};

// const allUser = {user1,user2}; //should not merge two object like this.
// console.log(allUser);

// const allUser = Object.assign({},user1, user2);
// console.log(allUser);

const allUser = { ...user1, ...user2 }; //->preferable way to merge two or more object.
console.log(allUser);

const database = [
  {
    id: "uma124",
    age: 24,
  },
  {
    id: "gau124",
    age: 24,
  },
  {
    id: "nit124",
    age: 24,
  },
  {
    id: "sah124",
    age: 24,
  },
];
//we have many objects in arrays,

console.log(database[1].age);
console.log(database[1].id);
console.log(database[2].id);
console.log(database[3].id);
//this is how we access values in this case.

const school = {
    name : "umakant",
    age : 23,
    rollNo : 212223,
};

console.log(Object.keys(school)); 
console.log(Object.values(school)); 
console.log(Object.entries(school));//bind every object property in array, like this [key,value];

//this is how we access keys of the object.
//it will return those keys in array.so we can use loop on that key array.




