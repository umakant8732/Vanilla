const notesContainer = document.querySelector('.notes-container');
const createNoteBtn = document.querySelector('.create-note-btn');


let allNotes = document.querySelectorAll('.input-box');


function showAllNotes () {
    notesContainer.innerHTML = localStorage.getItem("note")

}

showAllNotes();
function saveInStorage () {
    localStorage.setItem("note", notesContainer.innerHTML)
}
 

createNoteBtn.addEventListener('click', function () {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "/images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});



notesContainer.addEventListener('click', function (e) {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveInStorage();
    }
    else if(e.target.tagName === "P"){
       allNotes = document.querySelectorAll('.input-box')
      
       allNotes.forEach((inputBoxEach)=> {
            inputBoxEach.onkeyup = function () {
                saveInStorage();
            }
       })
    }
})


document.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})