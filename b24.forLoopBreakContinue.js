// for (let index = 1; index <= 10; index++) {
//     const element = index;

//     if(element === 5){
//         console.log("at 5")
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop ${i}`);
//     for(let j = 0; j <=10; j++){
//         console.log(`inner loop ${j} and outer loop value ${i}`);
//     }
// }

// const myArray = ["flash","superman","spiderman","batman","DareDevil"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];

//     console.log(`at index ${index} -> ${myArray[index]}`);

// }

// for (let index = 1; index < 10; index++) {
//   if (index === 5) {
//     continue;
//   }
//   if (index === 5) {
//     console.log("5 is detected");
//     break;
//   }
//   console.log(index);

//   console.log(index);
// }


let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

let myArray = ["flash","batman","spiderman","ironman","thor"];
let j = 0;
while(j < myArray.length){
    console.log(myArray[j]);
    j++;
}

let score = 0;

do{
    console.log(score);
    score++;
} while(score < 5);