/* This displays a clock on the right side of the footer.
*
*
*/

function clock() {
    const currentDay = new Date();
    let hours = currentDay.getHours();
    let minutes = currentDay.getMinutes();
    let seconds = currentDay.getSeconds();
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    setTimeout(clock, 1000)

    if (hours < 12) {
        document.getElementById("daytime").innerHTML = "AM"
    } else {
        document.getElementById("daytime").innerHTML = "PM"
    }

    document.getElementById("time").innerHTML = hours + ":" + minutes;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
} 