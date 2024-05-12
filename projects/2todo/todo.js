const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const addBtn = document.querySelector("#add-btn");



function addTask() {

    // creating li and add text content into it.
    let li = document.createElement('li');
    li.textContent = inputBox.value;
    listContainer.appendChild(li);

    // creating delete icon front off li.

    let span = document.createElement('span');
    span.textContent = "\u00d7";
    li.appendChild(span);
    saveData();

    inputBox.value = "";
}

addBtn.addEventListener("click", (e) => {

    let fetchedTask = inputBox.value;
    if (fetchedTask === '') {
        alert("Field Should Not Be Empty");
    }
    else {
        addTask();
    }
})



listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})



function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function getData () {
    listContainer.innerHTML = localStorage.getItem("data");
}

getData();


