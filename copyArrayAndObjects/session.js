//  arrays

const fruits1 = ['mango', 'apple', 'orange']

const fruits2 = fruits1

fruits2.push('banana')
fruits2.push('pineappple')

console.log(fruits1)

//  objects

const user1 = {
  firstname: 'umakant',
  lastname: 'bhendarkar'
}

const user2 = user1

user2.age = 25

console.log(user1)

// variables

let mobilenumber = 958841

let mobilenumber2 = mobilenumber

mobilenumber = 8472

console.log(mobilenumber)

/* ---------------------------------------------- */

//this is how we copy the object
const candidate1 = {
  id: 'can123',
  rollno: 4533
}

const candidate2 = { ...candidate1 }

// Object.assign(candidate2, candidate1) //way 1 will work on arrays too.

// now, if i change the value of candidate 2 it will not modify candidate 1

candidate2.adhar = 876778896756

console.log(candidate1)
console.log(candidate2)

/* but object.assign() and spread operator wont copy objects deeply its gives only shallow copies */

const college1 = {
  collegename: 'IICC RTMNU',
  departments: {
    MCA: 100,
    BE: 50
  }
}

const college2 = { ...college1 }

college2.departments.MCA = 60
//this line will make changes in college 1 and college 2 object because college2 has shallow copy of college 1

console.log('clg1', college1)
console.log('clg2', college2)

/* This is how make deep copies */

const city1 = {
  cityname: 'Nagpur',
  population: 20000,
  areWisePopulation: {
    shankarNagar: 1000,
    manishNagar: 500
  }
}

// const city2 = structuredClone(city1)
//this is new function structuredClone to make deep copies


const city2 = JSON.parse(JSON.stringify(city1))

city2.areWisePopulation.subhashNagar = 300

console.log('city1', city1)
console.log('city2', city2)
