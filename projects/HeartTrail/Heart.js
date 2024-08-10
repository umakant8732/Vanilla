const body = document.querySelector("body");


body.addEventListener("mousemove", (e) => {

    const xPos = e.offsetX;
    const yPos = e.offsetY;

    const spanEl = document.createElement("span");

    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    const size = Math.random() * 50 ;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    // spanEl.innerHTML = "I LOVE YOU"

    body.appendChild(spanEl);


    setTimeout(() => {
        spanEl.remove();
    }, 3000);
})


