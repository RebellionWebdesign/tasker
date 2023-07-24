/* This displays a clock on the right side of the footer.
*
*
*/
const currentDay = new Date();
let hours = currentDay.getHours();
let minutes = currentDay.getMinutes();
let seconds = currentDay.getSeconds();
let dayTime = document.getElementById("daytime");
let clock = document.getElementById("time");

function time() {
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    setTimeout(clock, 1000)

    if (hours < 12) {
        dayTime.innerHTML = "AM"
    } else {
        dayTime.innerHTML = "PM"
    }

    clock.innerHTML = hours + ":" + minutes;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

document.addEventListener("DOMContentLoaded", time())
document.addEventListener("DOMContentLoaded", addZero())