var notesArray = [];
const notesInput = document.getElementById("noteInput");
const itemCount = document.getElementById("itemCount");
const listDiv = document.getElementById("listDiv");

function addNote() {
    playAudio();
    const newNote = notesInput.value;
    if (newNote == "") {
        alert("Please enter your note");
    } else {
        notesArray.push(newNote);
        notesInput.value = "";
        itemCount.innerText = notesArray.length;
        console.log(notesArray);
    } 
}

function showList() {

    hideNotes();
        
    for (let index = 0; index < notesArray.length; index++) {
        const element = notesArray[index];
        
        const newLi = document.createElement("li");

        newLi.innerText = element;

        listDiv.appendChild(newLi);

    }

}

function hideNotes() {
    playAudio();
    listDiv.innerHTML = "";
}

function deleteNotes() {
    playAudio();
    notesArray = [];
    hideNotes();
    itemCount.innerText = notesArray.length;
}

function playAudio() {
    const clickSound = new Audio("click.wav");
    clickSound.play();
}