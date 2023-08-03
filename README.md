![readme header image](docs/readme-images/tasker-readme-header.png)

TASKER is a productivity app which aims to provide a means of making a to-do list. In TASKER the user can add tasks, mark tasks as finished and also delete them.

You can visit the live website [here](https://rebellionwebdesign.github.io/tasker/).

## USER STORIES

### USER GOALS (US1-PP2):

- As a user I need a simple app to add and delete tasks

- As a user I want my tasks to be saved

- As a user I need the ability to mark tasks as finished


## FEATURES

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
