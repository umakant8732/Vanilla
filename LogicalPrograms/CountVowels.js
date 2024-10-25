const str = "i am Umakant";
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let count = 0;

for (let i = 0; i < str.length; i++) {
    if(vowels.includes(str.charAt(i))) {
        count += 1
    }
}

console.log(count);

