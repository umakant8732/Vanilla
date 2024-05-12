

const changeText = function () {
    document.querySelector('h1').innerHTML = "best Js Series";
}

const changeTextTimeOut =  setTimeout(changeText, 5000);

//if we want to stop that setTimeout.

const stopBtn =  document.querySelector('#stop');
stopBtn.addEventListener('click',function () {
    clearTimeout(changeTextTimeOut);
    console.log("stop setTimeout Execution");
})


