# TESTING

## COMPATIBILITY

To ensure the website works on many different browsers, the website was tested on Chrome, Firefox Developer Edition, Edge and Brave. At the moment GitHubs drag and drop feature to view videos is not working. Please download the files from the repo given the links below.

### CHROME:

- [CHROME COMPATIBILITY](https://github.com/RebellionWebdesign/tasker/blob/ba8d6538e1b6a4611f9ec4d94a0fd916341d5665/docs/testing-videos/tasker-chrome-compat.mp4)

### FIREFOX:

- [FIREFOX COMPATIBILITY](https://github.com/RebellionWebdesign/tasker/blob/ba8d6538e1b6a4611f9ec4d94a0fd916341d5665/docs/testing-videos/tasker-firefox-compat.mp4)

### EDGE:

- [EDGE COMPATIBILITY](https://github.com/RebellionWebdesign/tasker/blob/ba8d6538e1b6a4611f9ec4d94a0fd916341d5665/docs/testing-videos/tasker-edge-compat.mp4)

### BRAVE:

- [BRAVE COMPATIBILITY](https://github.com/RebellionWebdesign/tasker/blob/ba8d6538e1b6a4611f9ec4d94a0fd916341d5665/docs/testing-videos/tasker-brave-compat.mp4)

## RESPONSIVE BEHAVIOR:

To ensure responsiveness the website was tested on the devtools built into the browsers, Responsively browser and different devices. Apple devices were emulated on Responsively.

### CHROME:

- [CHROME RESPONSIVE](https://github.com/RebellionWebdesign/tasker/blob/285894450cdbd447b68bc7464c13e1332e0b7217/docs/testing-videos/tasker-chrome-responsive.mp4)

### FIREFOX:

- [FIREFOX RESPONSIVE](https://github.com/RebellionWebdesign/tasker/blob/285894450cdbd447b68bc7464c13e1332e0b7217/docs/testing-videos/tasker-firefox-responsive.mp4)

### EDGE:

- [EDGE RESPONSIVE](https://github.com/RebellionWebdesign/tasker/blob/285894450cdbd447b68bc7464c13e1332e0b7217/docs/testing-videos/tasker-edge-responsive.mp4)

### BRAVE:

- [BRAVE RESPONSIVE](https://github.com/RebellionWebdesign/tasker/blob/285894450cdbd447b68bc7464c13e1332e0b7217/docs/testing-videos/tasker-brave-responsive.mp4)

### RESPONSIVELY:

- [RESPONSIVELY RESPONSIVE](https://github.com/RebellionWebdesign/tasker/blob/e9a1f60062f6b8d47ffc96d9b886f2f651cf8691/docs/testing-videos/tasker-responsively-compat.mp4)

### SAMSUNG S22 ULTRA:

- [SAMSUNG S22 DEVICE TEST](https://github.com/RebellionWebdesign/tasker/blob/bc46191376190e65a8b0b727abfa401f2b823d12/docs/testing-videos/tasker-device-s22.mp4)

### SAMSUNG TAB S7:

- [SAMSUNG S7 DEVICE TEST](https://github.com/RebellionWebdesign/tasker/blob/bc46191376190e65a8b0b727abfa401f2b823d12/docs/testing-videos/tasker-device-s7.mp4)

## MANUAL TESTING

Manual tests were peformed by myself, friends and family, my mentor and CI community members.

|             FEATURE              |               ACTION               |               EXPECTED RESULT               | TESTED | PASSED | COMMENT |
| :------------------------------- | :--------------------------------- | :------------------------------------------ | :----- | :----- | :------ |
| TASKER Logo                  | view on mobile                                      | TASKER logo scales according to screen width                 | yes    | yes    |                        |
| Tasklist Header              | view on mobile                                      | tasklist header lives in task entry                          | yes    | yes    |                        |
| Greeter                      | load page                                           | greeter gets displayed if there are no tasks                 | yes    | yes    |                        |
| Greeter                      | add task                                            | greeter disappears if there are tasks                        | yes    | yes    |                        |
| Current Day Display          | open page                                           | current day gets displayed in the left footer                | yes    | yes    | updates every 24h      |
| Current Date Display         | open page                                           | current date gets displayed in the left footer               | yes    | yes    | updates every 24h      |
| Current Time Display         | open page                                           | current time gets displayed in the right footer              | yes    | yes    | updates every 60s      |
| Current Daytime Display      | open page                                           | current day gets displayed in the right footer               | yes    | yes    | updates every 12h      |
| Task Creation Form           | press ADD TASK with empty task name                 | browser displays warning **"Please fill out this field"**    | yes    | yes    |                        |
| Task Creation Form           | press ADD TASK with filled task name but empty date | browser displays warning **"Please fill out this field"**    | yes    | yes    |                        |
| Taskname Field               | press ADD TASK with too short length                | browser displays warning **"Please lengthen this text to 5 characters or more..."** | yes    | yes    | min value is set to 5  |
| Taskname Field               | enter very long task name                           | text length stops at 30 characters                           | yes    | yes    | max value is set to 30 |
| Date Picker                  | select past date                                    | must not work and past dates must be greyed out              | yes    | yes    |                        |
| Task Creation Form           | press ADD TASK with both fields filled              | creates a task with given data                               | yes    | yes    |                        |
| Task Entry                   | create a task                                       | displays given data (taskname and deadline)                  | yes    | yes    |                        |
| Task Entry                   | create a task                                       | displays generated data (task status)                        | yes    | yes    |                        |
| Finish Button                | hover the element                                   | element scales bigger                                        | yes    | yes    |                        |
| Finish Button                | click element                                       | task status text changes to "FINISHED!"                      | yes    | yes    |                        |
| Delete Button                | hover the element                                   | element scales bigger                                        | yes    | yes    |                        |
| Delete Button                | click element                                       | displays warning "Do you really want to delete [TASKNAME]?"  | yes    | yes    |         |
| Alert Box                    | click cancel                                        | nothing should happen                                        | yes    | yes    | |
| Alert Box                    | click OK                                            | task gets deleted                                            | yes    | yes    | |
| App Persistent State         | add tasks, close browser, reopen                    | tasks should be displayed as previously added                | yes    | yes    | |
| Task Status Persistent State | finish tasks, close browser, reopen                 | tasks marked as finished should display "FINISHED!" in status | yes    | yes    | |

## CODE VALIDATION

The underlying code was validated with the following tools:

### NU HTML CHECKER

- [NU HTML RESULT](docs/testing-images/tasker-nuhtml-result.png)

### JIGSAW CSS CHECKER

- [JIGSAW CSS RESULT](docs/testing-images/tasker-jigsaw-result.png)

### JSHINT JS CHECKER

- [JSHINT JS RESULT](docs/testing-images/tasker-jshint-results.png)

### WAVE ACCESSIBILITY CHECKER

- [WAVE ACCESSIBILITY RESULT](docs/testing-images/tasker-wave-results.png)

## LIGHTHOUSE REPORTS

- [GOOGLE LIGHTHOUSE RESULT DESKTOP](docs/testing-images/tasker-lighthouse-result-desktop.png)
- [GOOGLE LIGHTHOUSE RESULT MOBILE](docs/testing-images/tasker-lighthouse-result-mobile.png)

## BUGS

- The first bug I encountered was about the object holding the taskItem data getting overridden each time a new object was made.

  This means every object in the listItems array got overridden with the new value of a new created object. Reason was, that the listItem object was in global scope. Having the listItem object in local scope inside the submit event listener fixed the problem.

- The second bug was about deleting items from the array. Each time the delete button was clicked it seemingly deleted the correct item from the viewport, but upon reloading a different item was restored. The reason this happened was that I used findIndex() with a search value of hasevent: "true" which returns **the first** object passing the test. So basically the correct HTML container got deleted, but the incorrect array item was deleted. For instance: click delete on Item A from 3 items would delete item A, but then deleting item C from two items would delete item B keeping item C in memory and update the Item B to have the content of item C. This was resolved by changing the check to look for the particular index of the clicked item. It still retrns the first element passing the test, but since there is only one unique id given to each item it deletes the correct one from the view and the array.

- A bug I can´t solve on my own for now is the fact that GitHub pages will not accept relative paths to my assets (eg "assets/fonts/poppins/poppins.woff2"). I needed to change them to absolute paths in order for them to work correctly. Relative paths work on my machine but not in GitHub Pages. The problem also existed on PP1.
