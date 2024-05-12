// const start = document.querySelector("#start");
// const stop = document.querySelector("#stop");

// let interval;

// const sayName = function () {
//   console.log("hii");
// };

// start.addEventListener("click", function (e) {
//   interval = setInterval(sayName, 2000);
// });

// stop.addEventListener("click", function (e) {
//   clearInterval(interval);
// });

// ---------------------------

const buttons = document.querySelector("#buttons");
let interval;
buttons.addEventListener("click", function (e) {
  if (e.target.id === "start") {
    interval = setInterval(function () {
      console.log("start Interval");
    }, 2000);
  }
  if(e.target.id === 'stop'){
    clearInterval(interval);
  }
});
