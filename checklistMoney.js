const spring = document.getElementById("farming");
const summer = document.getElementById("special");
const fall = document.getElementById("forage");
const winter = document.getElementById("extra");
const springDropdown = document.getElementById("farmingBox");
const summerDropdown = document.getElementById("specialBox");
const fallDropdown = document.getElementById("forageBox");
const winterDropdown = document.getElementById("extraBox");


// Strikethrough text on click
spring.addEventListener("click", toggleEvent1)
summer.addEventListener("click", toggleEvent2)
fall.addEventListener("click", toggleEvent3)
winter.addEventListener("click", toggleEvent4)

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