const inputField = document.querySelector("input");
const countField = document.querySelector("h2 span");

const callApi = function (e) {
    console.log("inside call api function", e.target.value);
}

inputField.addEventListener("input", callApi);

document.addEventListener('mousemove', (e) => {
    
    if(e.target.className === "input"){
        alert("i am working")
    }
    
})