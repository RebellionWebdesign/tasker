/* This script controls the behaviour of the add button
*
*/
const addButton = document.getElementById("addbutton")
const closeButton = document.getElementById("closebutton")
const form = document.getElementById("form")

addButton.addEventListener("click", () => {
    form.classList.remove("hide")
})

closeButton.addEventListener("click", () => {
    form.classList.add("hide")
})