const user1 = {
  firstname: 'umakant',
  lastname: 'bhendarkar',
  address: {
    city: 'Nagbhir',
    state: 'Maharashtra',
    pincode: 441205,
    moreDetails: {
      population: 1200,
      area: '650 sq/km'
    }
  },
  isGraduate: true
}

user1.age = 25

//this is how we add properties in object
//as we created object using const still we can change the properties of user object
//cause whenever we add a property in any object it does not changegs its address.

delete user1.age
//this is how we delete the property in object

Object.seal(user1)
//seal method prevents add or delete properties of object
//but we can change existing properties

user1.firstname = 'umakant123' //changing value of existing property

console.log('obj 1 -> seal method', user1)

/* creating new object */

const user2 = {
  firstname: 'mr.unknown',
  mobileNumber: 9599123455
}

Object.freeze(user2) //here we are freezing the object

user2.firstname = 'mr.known' //try to change existing propery
user2.age = 25 // try to add new property

/*above both operation will fail because object.freeze() prevents 
adding, updating, deleting any property */


console.log("obj user2 ->",user2)

console.log(user2.hasOwnProperty('firstname'))
