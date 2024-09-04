const Str = "hii i am umakant";
let result = "";

for (let i = 0; i < Str.length; i++) {

  if(i === 0 || Str[i -1] === " "){
    result += Str[i].toUpperCase()
  }
  else {
    result += Str[i]
  }
   

}

console.log(result);


