// // //going to learn events

// // document.getElementById('spider').onmouseenter = function () {
// //     alert("its spiderman");
// // }

// //type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget, clientX clientY, screen X screen Y. altKey, ctrlkey, shiftKey, keyCode.

// document.getElementById("images").addEventListener(
//   "click",
//   (e) => {
//     console.log("clicked inside the ul");
//   },
//   false
// ); //3rd parameter is by default false. false -> event bubbling.
// //true -> event capturing.

// document.getElementById("groot").addEventListener(
//   "click",
//   (e) => {
//     console.log("click on groot");
//     e.stopPropagation();
//   },
//   false
// ); //3rd parameter is by default false.
// //when we dont want event bubbling or capturing. we should we stopProgation.

// // preventDefault.

let googleLink = document.getElementById("google");
googleLink.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
   console.log("google Clicked");
});


let images = document.querySelector('#images');
images.addEventListener('click', (e) => {
    // console.log(e.target.parentNode);
    // let removeIt = e.target.parentNode;
    //above code is not working  properly ;

    console.log(e.target.tagName);
    if(e.target.tagName === "IMG"){
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
 });