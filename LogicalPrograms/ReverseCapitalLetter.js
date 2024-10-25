const str = "Happy Birthday";
let reversedString = "";

for (let i = str.length - 1 ; i > 0; i--) {   
    reversedString += str[i]  
}


let result = "";

for(let i = 0; i < reversedString.length; i += 2) {

    result += reversedString[i]

}

console.log(result);

