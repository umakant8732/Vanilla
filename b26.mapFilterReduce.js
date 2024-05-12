const marvel = ["thor", "cap america", "iron man", "black window"];

// const comic = marvel.forEach( (hero) => {
//         console.log(hero);
//         return hero; //foreeach loop returns nothings.
// });

// console.log(comic);

//learn filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterL = numbers.filter((eachNum) => {
  return eachNum > 4;
}); //when we open the scope {} we have to use return, for return the values.
console.log(filterL); //filter return the value.

const forEachBox = [];
numbers.forEach((eachNum) => {
  if (eachNum > 6) {
    forEachBox.push(eachNum);
  }
}); //using foreach for filterations, its quite long process to filter the array.
console.log(forEachBox);

//creating array of movies.

const movies = [
  { name: "Jawan", genre: "action", release: 2023 },
  { name: "Pianist", genre: "war", release: 2000 },
  { name: "Raanjhna", genre: "drama", release: 2015 },
  { name: "Bharat", genre: "action", release: 2019 },
  { name: "Deadpool2", genre: "action", release: 2018 },
  { name: "Pushpa", genre: "drama", release: 2022 },
  { name: "KGF", genre: "action", release: 2023 },
  { name: "Kedarnath", genre: "drama", release: 2019 },
];

//now we filter the data using filter.

const filterData = movies.filter((movie) => {
  // return movie.genre == "drama"; //drama genre movies will be returned.
  // return movie.release >= "2019"; //movies will be returned, released after or 2019 or same year.
  return movie.genre === "drama" && movie.release >= 2019;
});

console.log(filterData);

//learn map and chaining

const mapArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapResponse = mapArray
  .map((num) => {
    return num + 10;
  })
  .map((addedNumber) => {
    return addedNumber - 5;
  })
  .filter((minusValue) => {
    return minusValue > 10;
  });

console.log(mapResponse);
//end map

//learn reduce.

const cart = [100, 200, 300, 400, 500];
const initialValue = 0;
const cartPrice = cart.reduce((accumulator, currentValue) => {
  console.log(`acc -> ${accumulator} currVal -> ${currentValue}`);
  return accumulator + currentValue;
}, initialValue);

console.log(cartPrice);

const courses = [
  { course: "Data Science", price: 12000 },
  { course: "Machine Learning", price: 20000 },
  { course: "Deep Learning", price: 13000 },
  { course: "Android Dev", price: 15000 },
  { course: "Salesforce DEv", price: 14000 },
  { course: "Digital Marketing", price: 8000 },
];

const totalPrice = courses.reduce((accumulator,coursesArray)=>{
    console.log(`accumulator => ${accumulator}, coursePrice => ${coursesArray.price}`);
    return accumulator + coursesArray.price;

},0);

console.log(totalPrice);