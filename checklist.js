/*
When Toggled, list will:
    - Strikethrough
    - Save when refreshed
*/

// Variables
const strikeBox = document.getElementById("checkbox");


// Strikethrough text on click
strikeBox.addEventListener('click', toggleEvent)

function toggleEvent() {
    strikeBox.classList.toggle("striked")
    strikeBox.innerHTML
}