![readme header image](docs/readme-images/tasker-readme-header.png)

TASKER is a productivity app which aims to provide a means of making a to-do list. In TASKER the user can add tasks, mark tasks as finished and also delete them.

You can visit the live website [here](https://rebellionwebdesign.github.io/tasker/).

## USER STORIES

### USER GOALS (US1-PP2):

- As a user I need a simple app to add and delete tasks
- As a user I want my tasks to be saved
- As a user I need the ability to mark tasks as finished

![Am I responsive result](docs/readme-images/tasker-amiresponsive.png)

## FEATURES

### THE HEADERBAR

- The headerbar displays the app name on the left and a logo on the right
- [The Headerbar](docs/readme-images/tasker-headerbar.png)

### THE TASKLIST

- The tasklist is a scrollable container placed in the center of the screen. All tasks go here
- The scroll feature for the tasklist gets triggered when the container overflows. There will be a styled scrollbar to the right
- To give the user a clue what information is displayed the tasklist has a header row giving meaning to the following task columns
- On mobiles the header row disappears and the information content sits inside of the task preceding the input data
- [The Tasklist](docs/readme-images/tasker-task-list.png)
- [The Scrollbar](docs/readme-images/tasker-task-list-scrollbar.png)
- [The Header Row](docs/readme-images/tasker-task-list-header-row.png)
- [Mobile View](docs/wireframes/tasker-wireframes-mobile.png)

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

### COLOR SCHEME

- [Color Scheme](docs/readme-images/tasker-color-scheme.png)

- The above color scheme was used to create a monochrome high contrast feeling for the app

- Yellow is associated with energy and optimism

### TYPOGRAPHY

The fonts used are Montserrat and Poppins Google Fonts. Montserrat is used for all the headings (headerbar and taslist header), Poppins is used for the task text and the clock/date display. In terms of design both fonts work together very well, as they are both clean and pleasing to the eye.

- [Montserrat 400](docs/readme-images/tasker-montserrat-regular.png)
- [Montserrat 800](docs/readme-images/tasker-montserrat-extra.png)
- [Poppins 400](docs/readme-images/tasker-poppins-regular.png)
### WIREFRAMES

- [TASKER on the Desktop](docs/wireframes/tasker-wireframes-desktop.png)
- [TASKER on a Tablet](docs/wireframes/tasker-wireframes-tablet.png)
- [TASKER on a Phone](docs/wireframes/tasker-wireframes-mobile.png)

## TOOLS USED
### PREVIS

The previs (eg hifi wireframes) was made using affinity designer. There is also a pdf in the docs folder to provide a viewable document if you dont have it. However, you can get a license or a trial [here](https://affinity.serif.com/en/designer/).

### CODING

The code was written in VSCODE using the following extensions:

- Five Server for previewing with auto reload on save and live code changes - [Five Server](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server)
- HTML CSS Support for Intellisense id and class completion - [HTML CSS SUPPORT](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
- Previewing the responsive layouts were primarily made with [RESPONSIVELY](https://responsively.app/) an open source solution for previewing resposive layouts

### TECHNOLOGIES

- The structure of the site was made using [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML?retiredLocale=de)
- The styles of the site were made using [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=en), more explicit:
  - [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout) for positioning elements on the page
  - [CSS Root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root?retiredLocale=en) for defining colors as variables
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=de) was used to model interactivity as well as the persistence of data
- [Git](https://git-scm.com/) for version control
- [GitHub](https://github.com/) for hosting the source code
- [GitHub Pages](https://pages.github.com/) for deploying the website to the web

## OTHER TOOLS

- Fluid Headings (The TASKER logo) were made with [Modern Typography Tool](https://modern-fluid-typography.vercel.app/)

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

The Screen Mockup for responsive design is copy pasted from [Am I Responsive](https://ui.dev/amiresponsive)

The social icons, the hamburger icon and the close icon are from [FontAwesome](https://fontawesome.com/) in the free version, specifically these:

- [Solid Circle Checkmark](https://fontawesome.com/icons/circle-check?f=classic&s=solid)
- [Trash Can](https://fontawesome.com/icons/trash?f=classic&s=solid)

## SAYING THANKS

- [Juliia Konovalova](https://github.com/IuliiaKonovalova) for being my mentor and helping through some of the issues I encountered on the project
- My family for bearing with me and for keeping me grounded.
- [Code Institute](https://codeinstitute.net/de/) for letting me do this and for being a great school.
- [Kevin Powell](https://www.youtube.com/@KevinPowell) for being such a great CSS teacher.
