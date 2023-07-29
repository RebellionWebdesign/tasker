//Global Variables for date display
const day = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const currentDay = new Date();
let dayOfWeek = day[currentDay.getDay()];
let currentDate = currentDay.toLocaleDateString("de-DE");

//Global vriables for form, form reveal and form hide button
const addButton = document.getElementById("addbutton")
const closeButton = document.getElementById("closebutton")
const form = document.getElementById("form")

//Global variables for array generation
let listItems = [];
let taskName = document.getElementById("taskname");
let deadLine = document.getElementById("date");

//Object which holds task data
let listItem = {
  id: "",
  taskname: "",
  timestamp: "",
  deadline: "",
  finished: "NO",
}

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

function date() {
  document.getElementById("day").innerHTML = dayOfWeek;
  document.getElementById("today").innerHTML = currentDate;
  setTimeout(function () { date() }, 1000)
}

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
  const newDay = new Date();
  let hours = newDay.getHours();
  let minutes = newDay.getMinutes();
  let seconds = newDay.getSeconds();
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
  setTimeout(function () { time() }, 1000)
}

function timeStamp(timeStamp) {
  const newDay = new Date();
  let hours = newDay.getHours();
  let minutes = newDay.getMinutes();
  let seconds = newDay.getSeconds();
  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  
  return timeStamp = hours + ":" + minutes + ":" +  seconds
}

/* This script controls the behaviour of the add and close buttons.
*
*/
addButton.addEventListener("click", () => {
  form.classList.remove("hide")
  addButton.classList.add("hide")
  taskName.value.trim()
  taskName.focus()
})

closeButton.addEventListener("click", () => {
  form.classList.add("hide")
  addButton.classList.remove("hide")
})

//Stores the listItems array as string in local storage
//function storeItems() {
//
//  listItems.forEach(localStorage.setItem("tasks", JSON.stringify(listItems))) 
//    
//}

//This function reads the local storage and restores previous tasks
//function getStoredItems() {
//  const reference = localStorage.getItem("tasks")
//  if (reference) {
//    listItems = JSON.parse(reference)
//    listItems.forEach(t => {
//      renderListItems(t)
//    });
//}}

//Render the todo list
function renderListItems(listItem) {
  const listContainer = document.getElementById("list-item")
  const listElement = document.createElement("ul")
  listElement.setAttribute("class", "todo-container")

  listElement.innerHTML = `
    <li id="task">${listItem.taskname}</li>
    <li id="generated">${listItem.timestamp}</li>
    <li id="deadline">${listItem.deadline}</li>
    <li id="finished">${listItem.finished}</li>
    <li>
      <ul>
        <li>
          <button id="finish">
            <img class="option-button" src="assets/images/svg/check-circle-solid.svg" alt="a finish symbol">
          </button>
        </li>
        <li>
          <button id="delete">
            <img class="option-button" src="assets/images/svg/trash-solid.svg" alt="a trash symbol">
          </button>
        </li>
      </ul>
    </li>`

  listContainer.append(listElement)

}

//This part starts all of the scripts that should be started at document load
document.addEventListener("DOMContentLoaded", () => {
  date()
  time()
  //getStoredItems()
})

/* This script controls the data passed from the add task form to the list array.
*
*/

form.addEventListener("submit", event => {
  event.preventDefault();

  listItem.taskname = taskName.value.trim()
  listItem.timestamp = currentDate + "-" + timeStamp(timeStamp)
  listItem.deadline = deadLine.value.trim()
  listItems.push(listItem)

  renderListItems(listItem);

  form.reset()
  taskName.value.trim()
  taskName.focus()
  //storeItems(listItems)

  console.log(listItem.id)
  console.log(listItem.taskname)
  console.log(listItem.deadline)
  console.log(listItem.timestamp)
  console.log(listItem.finished)
  console.log(listItem)
})

// Sets the ID of the task list element to the index inside of the array


//If the checkmark is clicked the "NO" in the status column changes to "YES"
