/* This script displays the day of the week and the current date.
*
*
*
*
*
*
*/

const day = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
const newDay = new Date();
let dayOfWeek = day[newDay.getDay()];
let currentDate = new Date().toLocaleDateString("de-DE");

function date() {
    document.getElementById("day").innerHTML = dayOfWeek;
    document.getElementById("date").innerHTML = currentDate;
}

document.addEventListener("DOMContentLoaded", date())
