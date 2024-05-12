


// const method = 'GET';
// const url = 'https://randomuser.me/api/';

// let xhr = new XMLHttpRequest();

// xhr.open(method,url);

// xhr.onreadystatechange = function () {
//     console.log(xhr.readyState);

//     if(xhr.readyState === 4){
//         const data = JSON.parse(this.responseText);
//         console.log(data.results[0].email);
//     }


// }

// xhr.send();


console.log("here we go again");

const method =  'GET';
const url = 'https://randomuser.me/api/';
let xhr = new XMLHttpRequest();

xhr.open(method,url);

xhr.onreadystatechange = function (){
    console.log(xhr.readyState);

    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(data.results[0].gender);
    }
}

xhr.send();







