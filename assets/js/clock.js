/* This displays a clock on the right side of the footer.
*
*
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