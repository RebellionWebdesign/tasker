/* 
*  Provides the date() function with de-DE formatted strings for the date display.
*  The date variables get derived from the currentDay variable. The function gets called
*  on DOM load.
*/
const day = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const currentDay = new Date();
let dayOfWeek = day[currentDay.getDay()];
let currentDate = currentDay.toLocaleDateString("de-DE", {day: "2-digit", month: "2-digit", year: "numeric"});

// Selects the form element with an id of form from the DOM
const form = document.getElementById("form");

/* 
*  The array listItems is initialized globally because we need to work later on it.
*  It holds the data displayed on screen and saved to local storage. In addition
*  we select the taskname id (form text input) and the deadline (form date input)
*  for later use.
*/
let listItems = [];
let taskName = document.getElementById("taskname");
let deadLine = document.getElementById("date");

/* 
*  The function addZero() concatenates a "0" in front of every number smaller than ten.
*  If we give it a variable to work with we get a time format of 03:30PM instead 3:30PM
*/
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

/* 
*  The function date() generates the current day and date for display in the bottom left corner
*  of the footer. It gets called every second to ensure that it stays on the screen at reload.
*  It gets its data from the variables block on the top of the document. 
*/
function date() {
  document.getElementById("day").innerHTML = dayOfWeek;
  document.getElementById("today").innerHTML = currentDate;
  setTimeout(function () { date(); }, 1000);
}

/* 
*  The function setMinDate() generates the date and injects the value into the
*  min attribute of the html date field. This ensures that dates cannot be in the past.
*  In addition to to that, it also provides the default text for the date field.
*/
function setMinDate() {
  let year = currentDay.toLocaleString("default", { year: "numeric" });
  let month = currentDay.toLocaleString("default", { month: "2-digit" });
  let day = currentDay.toLocaleString("default", { day: "2-digit" });
  let date = year + "-" + month + "-" + day;

  document.getElementById("date").setAttribute("min", date);
  document.getElementById("date").setAttribute("value", date);
}

/* 
*  The function time() displays the current time in the bottom right corner of the screen.
*  It uses the addZero() function to add zeroes to numbers smaller than 10. 
*/
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

  /* 
  *  This snippet decides whether to add AM or PM to the clock on the screen.
  *  It considers everything before 12:00 to be AM, everything after PM.
  */
  if (hours < 12) {
    dayTime.innerHTML = "AM";
  } else {
    dayTime.innerHTML = "PM";
  }

  //The time() function also gets called every second, so the time doesnt stop.
  clock.innerText = hours + ":" + minutes;
  setTimeout(function () { time(); }, 1000);
}

/* timeStamp() generates a date and a time in the format d.m.YYYY-hh:mm:ss.
*  The timestamp gets displayed in the CREATION DATE column on the screen.
*/
function timeStamp(timeStamp) {
  const newDay = new Date();
  let hours = newDay.getHours();
  let minutes = newDay.getMinutes();
  let seconds = newDay.getSeconds();
  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  return timeStamp = hours + ":" + minutes + ":" + seconds;
}

//Stores the listItems array as string in local storage
function storeItems() {
  localStorage.setItem("tasks", JSON.stringify(listItems));
}

/* 
*  getStoredItems() works on document load. It retrieves the listItems array from local storage
*  and renders them to the viewport with renderListItems(). 
*/
function getStoredItems() {
  const reference = localStorage.getItem("tasks");
  if (reference) {
    listItems = JSON.parse(reference);
    listItems.forEach(t => {
      renderListItems(t);
    });

    /* 
    *  Since the restored items dont have event listeners we need to add them back with this subroutine.
    *  It ensures that the event listeners only get added to restored items to prevent multiple assignments.
    *  Restored items have the hasevent object property set to "true", new iems are "false" by default.
    */
    listItems.forEach(function (restoredItem) {
      if (restoredItem.hasevent === "true") {
        let restoredFinishIndex = listItems.findIndex(item => item.hasevent === "true");
        let restoredFinishBtn = document.getElementById("finish-" + restoredItem.id);
        let restoredFinishStatus = document.getElementById("finished-" + restoredItem.id);
        let restoredDeleteBtn = document.getElementById("delete-" + restoredItem.id);

        //Adds the functionality back to the finish button
        restoredFinishBtn.addEventListener("click", function () {
          restoredFinishStatus.innerHTML = "FINISHED!";
          listItems[restoredFinishIndex].finished = "FINISHED!";
          storeItems(listItems);
        });

        //Adds the functionality back to the delete button
        restoredDeleteBtn.addEventListener("click", function () {
          if (confirm("Do you really want to delete " + restoredItem.taskname + "?") === true) {
            let restoredParentContainer = document.getElementById("todo-container-" + restoredItem.id);
            let restoredDeleteIndex = listItems.findIndex(item => item.id === restoredItem.id);
            restoredParentContainer.remove();
            listItems.splice(restoredDeleteIndex, 1);
            storeItems(listItems);
          }
        });

      } else {
        //This does nothing in restoredItem.hasevent is not true
        void (0);
      }
    });

  }
}

/* 
*  renderListItems() takes the data generated by the task form ind inserts it to the string literals.
*  In addition to that it injects dynamically elements (listElement) to display the data on the screen. 
*/
function renderListItems(listItem) {
  // First we get all the relevant elements we want to inject data to.
  const listContainer = document.getElementById("list-item");

  // Then we create the parent element <ul> for the dynamic <li> elements
  const listElement = document.createElement("ul");

 /* 
*  Here we set the attributes (id, class and data-attr) to the <ul> element. The elements id must be
*  unique, so we concatenate the the specific id of the element to the id value and data-attr
*/
  listElement.setAttribute("id", "todo-container-" + `${listItem.id}`);
  listElement.setAttribute("class", "todo-container");
  listElement.setAttribute("data-attr", `${listItem.id}`);

 /* 
*  Here we define the HTML which gets injected to the <ul> element - "data-attr-*" might be deleted.
*  Everything except the unique data we use to select items is hardcoded to give a consistent layout.
*/
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
    </li>`;
  
  // After the above is done we need to append the dynamic element to the DOM.
  listContainer.append(listElement);
}

/* 
* This is basically the main function in TASKER.
* When the "ADD TASK" button is clicked we generate new object instances with different data. 
*/
form.addEventListener("submit", event => {
  //This prevents the button to send data to a server (there is none)
  event.preventDefault();

/* 
* This is the main object we work with. it provides default data and empty property slots to
* store new data on each button click. Each of the objects gets injected to the listItems array.
*/
  let listItem = {
    hasevent: "false",
    isfinished: "false",
    id: "",
    taskname: "",
    timestamp: "",
    deadline: "",
    finished: "UNFINISHED",
  };

/* 
* This inserts the user generated form data into the listItem object, except the timestamp.
* Timestamps need to be hardcoded to avoid tampering.
*/
  listItem.taskname = taskName.value.trim();
  listItem.timestamp = currentDate + "-" + timeStamp(timeStamp);
  listItem.deadline = deadLine.value.trim();

  //After the listItem object is created it gets pushed into the listItems array
  listItems.push(listItem);

/* 
* This generates an object id based on the index value of the last added object and the arrayh
* length to avoid values of 0.
*/ 
  let lastListItem = listItems.lastIndexOf(listItem);
  if (lastListItem < listItems.length) {
    listItem.id = lastListItem + 1;
  }

  // This renders the listItem to the viewport
  renderListItems(listItem);

/* 
* For each listItem which has the hasevent property set to "false"
* we select the specific id of that element and add event listeners
* (one for finishing the task and one to delete the task)
*/ 
  listItems.forEach(function (listItem) {
    if (listItem.hasevent != "true") {
      let finishIndex = listItems.findIndex(item => item.hasevent === "false");
      let finishBtn = document.getElementById("finish-" + listItem.id);
      let finishStatus = document.getElementById("finished-" + listItem.id);
      let deleteBtn = document.getElementById("delete-" + listItem.id);

      // Add the finish event listener
      finishBtn.addEventListener("click", function () {
        finishStatus.innerHTML = "FINISHED!";
        listItems[finishIndex].finished = "FINISHED!";
        listItems[finishIndex].isfinished = "true";
        storeItems(listItems);
      });
      
      // Add the delete event listener
      deleteBtn.addEventListener("click", function () {
        // Let user confirm deletion of the listItem
        if (confirm("Do you really want to delete " + listItem.taskname + "?") === true) {
          
          //Select the listItem by id and its corresponding index in the DOM and the listItems array
          let parentContainer = document.getElementById("todo-container-" + listItem.id);
          let deleteIndex = listItems.findIndex(item => item.id === listItem.id);
          
          //Remove the listItem from the DOM
          parentContainer.remove();
          
          // Remove the listItem from the listItems array
          listItems.splice(deleteIndex, 1);

          //Update the listItems array
          storeItems(listItems);
        }
      });

      // Set the hasevent property to true when listeners got added
      listItems[finishIndex].hasevent = "true";
    } else {

      //Does nothing if listItem.hasevent is already true
      void (0);
    }
  });

  //After listItem generation we reset the form, strip whitespace and focus the text input
  form.reset();
  taskName.value.trim();
  taskName.focus();

  //Here the newly generated (not from local storage) listItems get written to the array
  storeItems(listItems);
});

//This part starts all of the functions that should be started at document load
document.addEventListener("DOMContentLoaded", () => {
  date();
  setMinDate();
  time();
  taskName.value.trim();
  taskName.focus();
  getStoredItems();
});
