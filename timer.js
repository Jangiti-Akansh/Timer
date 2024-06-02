var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;

function zero(val) {
    if (val < 10) {
        return '0' + val;
    } else 
    {
        return val.toString();
    }
}

function displaytime() {
    document.getElementById("days").innerHTML = zero(days);
    document.getElementById("hours").innerHTML = zero(hours);
    document.getElementById("mins").innerHTML = zero(minutes);
    document.getElementById("secs").innerHTML = zero(seconds);
}

function setTimer() {
    days = parseInt(document.getElementById("daysIn").value) || 0;
    hours = parseInt(document.getElementById("hoursIn").value) || 0;
    minutes = parseInt(document.getElementById("minsIn").value) || 0;
    seconds = parseInt(document.getElementById("secsIn").value) || 0;
    displaytime();
}

function display() {
    const date = new Date();
    console.log(date.toLocaleTimeString());
    if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
        clearInterval(interval); 
        interval = undefined;
        return;
    }
    displaytime();
    if (seconds > 0) {
        seconds--;
        return;
    }
    seconds = 59;

    if (minutes > 0) {
        minutes--;
        return;
    }
    minutes = 59;
    if (hours > 0) {
        hours--;
        return;
    }
    hours = 23;
    if (days > 0) {
        days--;
    }
}

setTimeout(display,1000);
var interval;
function start() {
    if (!interval) {
        interval = setInterval(display, 1000);
    }
}

function stop() {
    clearInterval(interval); 
    interval = undefined;
}

function reset() {
    clearInterval(interval); 
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    displaytime();
}
