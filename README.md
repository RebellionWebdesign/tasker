![readme header image](docs/readme-images/tasker-readme-header.png)

TASKER is a productivity app which aims to provide a means of making a to-do list. In TASKER the user can add tasks, mark tasks as finished and also delete them.

You can visit the live website [here](https://rebellionwebdesign.github.io/tasker/).

## USER STORIES

### USER GOALS (US1-PP2):

- As a user I need a simple app to add and delete tasks

- As a user I want my tasks to be saved

- As a user I need the ability to mark tasks as finished


## FEATURES

### THE HEADERBAR

- The headerbar displays the app name on the left and a logo on the right
- [The Headerbar](docs/readme-images/tasker-headerbar.png)

### THE TASKLIST

- The tasklist is a scrollable container placed in the center of the screen. All tasks go here
- The scroll feature for the tasklist gets triggered when the container overflows. There will be a styled scrollbar to the right
- To give the user a clue what information is displayed the tasklist has a header row giving meaning to the following task columns
- [The Tasklist](docs/readme-images/tasker-task-list.png)
- [The Scrollbar](docs/readme-images/tasker-task-list-scrollbar.png)
- [The Header Row](docs/readme-images/tasker-task-list-header-row.png)

### THE TASK

- The task row displays the following information:
  - The task name - it can be max 30 characters long
  - The tasks creation date - the date and the time are generated as soon the user presses the ADD TASK button
  - The tasks deadline - Is a requirement for creating a task and has a dedicated date picker
  - A status - The status is set to UNFINISHED by default
  - Option buttons - The checkmark button changes the UNFINISHED status to FINISHED! and the trash can button deletes the task after prompting the user for confirmation
- [The Task](docs/readme-images/tasker-task-list-task.png)
- [Some Finished Tasks](docs/readme-images/tasker-task-list-finished.png)
- [Task Deletion](docs/readme-images/tasker-task-list-delete.png)
- [Deleted Task](docs/readme-images/tasker-task-list-deleted.png)

### THE TASK FORM

- The task forms enables the user to input data for each task, mainly the task name and the deadline. All other (except STATUS) are automatically generated
- The ADD TASK button acts as a trigger for date and time generation, rendering the task items and attaching event listeners 
- [The Task Form](docs/readme-images/tasker-task-form.png)

### THE FOOTER

- The footer displays the current day and date on the left side of the footer and a 24h clock with AM/PM display
- [The Footer](docs/readme-images/tasker-footer.png)

## DESIGN

## TOOLS USED

## OTHER TOOLS

## TESTING

For the testing results and mechanics please refer to the [TESTING.MD](https://github.com/RebellionWebdesign/tasker/blob/866f4086338f21d593d152445bd8058c7e19d97f/TESTING.MD) file

## DEPLOYMENT

The website was deployed using GitHub Pages using these steps:

- In the [repository](https://github.com/RebellionWebdesign/tasker) go to settings and navigate to "Pages"
- In "Pages" select "Deploy from branch" and choose the branch "main"
- Click save and the website will be deployed

## LOCAL DEPLOYMENT

### LOCAL DEPLOYMENT USING VSCODE:

- Go to your GitHub folder on your local machine and execute this command from a git shell:  
```bash
  git clone https://github.com/RebellionWebdesign/tasker.git
```
- If you want to view the app locally, open the tasker folder up in your IDE (in this case VSCode) and install the [Five Server](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server) extension if you need to
- Now open up the **index.html** page and press the "Go Live" button in the bottom right corner, the app should open in your default browser

## FUTURE IMPROVEMENTS

- *Make the app save ts data to a database.* Currently the app makes its state persistent by saving task entries to the browsers local storage. While this works it doesnt allow for date being synced to different devices. This means that each used browser holds different data in its local storage.
- Even if I think I have improved on this I still need to make better commit messages.
- *Give the app the ability to edit the task name*. Currently if you have a typo you need to delete the complete task and start over again.
- Include a check if the set deadline has already passed to give the user a notification if a task is late.
- *Bring the greeter back.* Initially the app had a greeter which explains what to do to the user. While the interface is fairly easy to understand, a greeter would be a great addition to the user experience.

## CREDITS

## SAYING THANKS
