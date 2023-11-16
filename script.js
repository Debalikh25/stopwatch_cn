let hours = 0;
let minutes = 0;
let seconds = 0;

let hourPointer = $("#hour");
let minutePointer = $("#minute");
let secondPointer = $("#second");

let started = false;

let paused = false;

// Starts the timer
function start() {
  if (started && paused == false) {
    return;
  }

  if(started){
    return ;
  }

  started = true;

  window.myTimer = setInterval(() => {
    if (seconds.toString().length == 1) {
      secondPointer.html(`0${seconds} `);
    } else {
      secondPointer.html(`${seconds} `);
    }

    if (minutes.toString().length == 1) {
      minutePointer.html(`0${minutes} `);
    } else {
      minutePointer.html(`${minutes} `);
    }

    if (hours.toString().length == 1) {
      hourPointer.html(`0${hours} `);
    } else {
      hourPointer.html(`${hours} `);
    }

    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes == 60) {
      hours = hours + 1;
      minutes = 0;
    }
  }, 1000);
}

// Resets the timer
function reset() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  secondPointer.html("00 ");
  minutePointer.html("00 ");
  hourPointer.html("00 ");
  clearInterval(window.myTimer);
  paused = false;
  started = false;
}

// Pauses the timer
function pause() {
  clearInterval(window.myTimer);
  paused = true;
  started = false;
}
