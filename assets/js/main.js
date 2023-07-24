/* This part of main.js displays the day of the week and the current date on the left ide of the footer.
*  The exlanations is top to bottom:
*  First we declare an array as a constant. It holds the weekdays as strings.
*  Second we use the new Date() method to get the current date. The day of the week is computed
*  by using the getDay() method which returns an integer (0 to 6) corresponding with the indexes
*  of the day array. At last we convert the returned date to the de-DE locale (DD.MM.YYY).
*
*  Inside of the function date() we look for the elements which have the id´s day and date assigned.
*  Those will be the containers for our text which is injected into the element by using .innerHTML
*
*  At last we need to make sure that the script fires when the DOM content is loaded. Otherwise the script
*  doesnt work as intended because the innerHTML is injected before the elents holding the text are even     *  parsed.
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

/* We also would like to display the current time in 24h format (still adding AM and PM).
*  Explanation is from top to bottom:
*  The addZero() function looks if the time displayed is smaller than ten and adds zeroes to the numbers.
*  As an example the time "nine o clock" will get displayed as 09:00 instead of 9:00.
*  In the next step we use the new Date() function to get todays date. We can extract the time with
*  the getHours() and getMinutes() methods [getSeconds() was used while developing to see if the clock
*  gets updated automatically].
*  Next on is getting the elements into varuables which have the id´s daytime and time assigned. We will
*  inject the time 
*  The if statement looks if the time is smaller than twelve [o clock] and assigns AM if it is before and PM
*  if it is after 12 o clock.
*  The time gets injected into the time element which is assigned to the clock variable by concatenating
*  the hours and the minutes with the colon. The timeout is set to 1000 milliseconds which means that the
*  time() function gets called every second.
*  At last we add an event listener which fires the script when the DOM content is fuly loaded.
*/

function addZero(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

function time() {
    const currentDay = new Date();
    let hours = currentDay.getHours();
    let minutes = currentDay.getMinutes();
    let seconds = currentDay.getSeconds();
    let dayTime = document.getElementById("daytime");
    let clock = document.getElementById("time");
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    

    if (hours < 12) {
        dayTime.innerHTML = "AM"
    } else {
        dayTime.innerHTML = "PM"
    }

    clock.innerText = hours + ":" + minutes;
    setTimeout(function() {time()}, 1000)
}

document.addEventListener("DOMContentLoaded", time())

/* This script controls the behaviour of the add and close buttons.
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

/* This function hides the greeter text when the tasklist is empty.
*
*/

function hideGreeter() {
    let emptyList = document.getElementById("todo-container").innerHTML.trim()
    let taskListHeader = document.getElementById("tasklist-container")
    let toDoList = document.getElementById("todo-container")

    if (emptyList == "") {
        taskListHeader.classList.add("hide")
        toDoList.classList.add("hide")
    } else {
        taskListHeader.classList.remove("hide")
        toDoList.classList.remove("hide")
    }
}

document.addEventListener("DOMContentLoaded", hideGreeter())

/* This script controls the behaviour of the add task form.
*
*/

/* This script controls the behaviour of the task list elements and buttons.
*
*/