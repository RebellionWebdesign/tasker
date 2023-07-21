/* This script controls the behaviour og the add button and the tasklist
*
*/

function revealForm() {
    const addButton = document.getElementById("addbutton")
    const show = document.getElementById("form").classList.remove("hide")
    addButton.addEventListener("click", show)
}

function hideForm() {
    const addButton = document.getElementById("addbutton")
    const hide = document.getElementById("form").classList.add("hide")
    addButton.addEventListener("click", hide)
}

