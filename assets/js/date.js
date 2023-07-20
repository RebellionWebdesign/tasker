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

document.getElementsByClassName("date").innerHTML = dayOfWeek;