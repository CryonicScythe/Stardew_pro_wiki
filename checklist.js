/*
When Toggled, list will:
    - Strikethrough
    - Save when refreshed
*/

// Variables
const spring = document.getElementById("spring");
const summer = document.getElementById("summer");
const fall = document.getElementById("fall");
const winter = document.getElementById("winter");
const anySeason = document.getElementById("any");
const springDropdown = document.getElementById("springBox");
const summerDropdown = document.getElementById("summerBox");
const fallDropdown = document.getElementById("fallBox");
const winterDropdown = document.getElementById("winterBox");
const anySeasonDropdown = document.getElementById("anyBox");


// Strikethrough text on click
spring.addEventListener("click", toggleEvent1)
summer.addEventListener("click", toggleEvent2)
fall.addEventListener("click", toggleEvent3)
winter.addEventListener("click", toggleEvent4)
anySeason.addEventListener("click", toggleEvent5)

function toggleEvent1() {
    springDropdown.classList.toggle("hidden")
}

function toggleEvent2() {
    summerDropdown.classList.toggle("hidden")
}

function toggleEvent3() {
    fallDropdown.classList.toggle("hidden")
}

function toggleEvent4() {
    winterDropdown.classList.toggle("hidden")
}

function toggleEvent5() {
    anySeasonDropdown.classList.toggle("hidden")
}