//Global Variables for date display
const day = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const currentDay = new Date();
let dayOfWeek = day[currentDay.getDay()];
let currentDate = currentDay.toLocaleDateString("de-DE");

//Global variable for form
const form = document.getElementById("form")

//Global variables for array generation
let listItems = [];
let taskName = document.getElementById("taskname");
let deadLine = document.getElementById("date");

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
*  doesnt work as intended because the innerHTML is injected before the elements holding the text are even parsed.
*/

function date() {
  document.getElementById("day").innerHTML = dayOfWeek;
  document.getElementById("today").innerHTML = currentDate;
  setTimeout(function () { date() }, 1000)
}

function setMinDate() {
  let year = currentDay.toLocaleString("default", {year: "numeric"})
  let month = currentDay.toLocaleString("default", {month: "2-digit"})
  let day = currentDay.toLocaleString("default", {day: "2-digit"})
  let date = year + "-" + month + "-" + day
  

  document.getElementById("date").setAttribute("min", date)
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

  return timeStamp = hours + ":" + minutes + ":" + seconds
}

//Stores the listItems array as string in local storage
function storeItems() {

  localStorage.setItem("tasks", JSON.stringify(listItems))
    
}

//This function reads the local storage and restores previous tasks
function getStoredItems() {
  const reference = localStorage.getItem("tasks")
  if (reference) {
    listItems = JSON.parse(reference)
    listItems.forEach(t => {
      renderListItems(t)
    });

    listItems.forEach(function(restoredItem) {
      if(restoredItem.hasevent === "true") {
        let restoredFinishIndex = listItems.findIndex(item => item.hasevent === "true")
        let restoredFinishBtn = document.getElementById("finish-" + restoredItem.id)
        let restoredFinishStatus = document.getElementById("finished-" + restoredItem.id)
        let restoredDeleteBtn = document.getElementById("delete-" + restoredItem.id)
        
        restoredFinishBtn.addEventListener("click", function() {
          restoredFinishStatus.innerHTML = "FINISHED!"
          listItems[restoredFinishIndex].finished = "FINISHED!"
          storeItems(listItems)
        })

       restoredDeleteBtn.addEventListener("click", function() {
         if(confirm("Do you really want to delete " + restoredItem.taskname + "?") === true) {
           let restoredParentContainer = document.getElementById("todo-container-" + restoredItem.id)
           let restoredDeleteIndex = listItems.findIndex(item => item.id === restoredItem.id)
           restoredParentContainer.remove()
           listItems.splice(restoredDeleteIndex, 1)
           storeItems(listItems)
       }})

      } else {
        void(0)
      }
    })
  
}}

//Render the todo list
function renderListItems(listItem) {
  const listContainer = document.getElementById("list-item")
  const listElement = document.createElement("ul")
  listElement.setAttribute("id", "todo-container-" + `${listItem.id}`)
  listElement.setAttribute("class", "todo-container")
  listElement.setAttribute("data-attr", `${listItem.id}`)

  listElement.innerHTML = `
    <li class="task" id="task-${listItem.id}">${listItem.taskname}</li>
    <li class="generated" id="generated-${listItem.id}">${listItem.timestamp}</li>
    <li class="deadline" id="deadline-${listItem.id}">${listItem.deadline}</li>
    <li class="finished" id="finished-${listItem.id}">${listItem.finished}</li>
    <li>
      <ul>
        <li>
          <button class="finish" id="finish-${listItem.id}" data-attr-finish="${listItem.id}" aria-label="mark finished">
            <img class="option-button" src="assets/images/svg/check-circle-solid.svg" alt="a finish symbol">
          </button>
        </li>
        <li>
          <button class="delete" id="delete-${listItem.id}" data-attr-delete="${listItem.id}">
            <img class="option-button" src="assets/images/svg/trash-solid.svg" alt="a trash symbol" aria-label="delete task">
          </button>
        </li>
      </ul>
    </li>`

  listContainer.append(listElement)
}

/* This script controls the data passed from the add task form to the list array.
*
*/

form.addEventListener("submit", event => {
  event.preventDefault();

  let listItem = {
    hasevent: "false",
    isfinished: "false",
    id: "",
    taskname: "",
    timestamp: "",
    deadline: "",
    finished: "UNFINISHED",
  }

  listItem.taskname = taskName.value.trim()
  listItem.timestamp = currentDate + "-" + timeStamp(timeStamp)
  listItem.deadline = deadLine.value.trim()

  listItems.push(listItem)

  let lastListItem = listItems.lastIndexOf(listItem)
  if (lastListItem < listItems.length) {
    listItem.id = lastListItem + 1
  }

  renderListItems(listItem);

  //Checks if the finish button is existent, adds an event listener and changes the
  //Task Status text to finished
  listItems.forEach(function(listItem) {
    if(listItem.hasevent != "true") {
      let finishIndex = listItems.findIndex(item => item.hasevent === "false")
      let finishBtn = document.getElementById("finish-" + listItem.id)
      let finishStatus = document.getElementById("finished-" + listItem.id)
      let deleteBtn = document.getElementById("delete-" + listItem.id)
      
      finishBtn.addEventListener("click", function() {
        finishStatus.innerHTML = "FINISHED!"
        listItems[finishIndex].finished = "FINISHED!"
        listItems[finishIndex].isfinished = "true"
        storeItems(listItems)
      })

      deleteBtn.addEventListener("click", function() {
        if(confirm("Do you really want to delete " + listItem.taskname + "?") === true) {
          let parentContainer = document.getElementById("todo-container-" + listItem.id)
          let deleteIndex = listItems.findIndex(item => item.id === listItem.id)
          parentContainer.remove()
          listItems.splice(deleteIndex, 1)
          storeItems(listItems)
        }
      })

      listItems[finishIndex].hasevent = "true"
    } else {
      void(0)
    }
  })

  form.reset()
  taskName.value.trim()
  taskName.focus()
  storeItems(listItems)

  console.log(listItem.id)
  console.log(listItem.taskname)
  console.log(listItem.deadline)
  console.log(listItem.timestamp)
  console.log(listItem.finished)
  console.log(listItem)
  console.log(listItems)

})

//This part starts all of the scripts that should be started at document load
document.addEventListener("DOMContentLoaded", () => {
  date()
  setMinDate()
  time()
  taskName.value.trim()
  taskName.focus()
  getStoredItems()
})
