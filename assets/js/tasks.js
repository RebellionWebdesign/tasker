/* This script controls the behaviour og the add button and the tasklist
*
*/

function revealForm() {
    const addButton = document.getElementById("addbutton")
    const form = document.getElementById("form").classList.remove("hide")
    addButton.addEventListener("click", form)
}