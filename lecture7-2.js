const stopwatchTimerWrapper = document.createElement("div");
stopwatchTimerWrapper.className = "wrapper";

const stopwatchWrapper = document.createElement("div");
stopwatchWrapper.className = "stopwatch-wrapper";
const stopwatchTitle = document.createElement("h3");
const stopwatchBtn = document.createElement("button");
stopwatchBtn.className = "watch-btn";
stopwatchBtn.textContent = "Start";
const stopwatch = document.createElement("div");
stopwatch.textContent = "00:00";
stopwatchTitle.textContent = "stopwatch";
stopwatchWrapper.append(stopwatchTitle, stopwatch, stopwatchBtn);

const timerWrapper = document.createElement("div");
timerWrapper.className = "timer-wrapper";
const timerTitle = document.createElement("h3");
const inputWrapper = document.createElement("div");
inputWrapper.className = "time__input-wrapper";
const timerMin = document.createElement("input");
const timerColon = document.createElement("span");
const timerSec = document.createElement("input");
timerMin.placeholder = "00";
timerSec.placeholder = "00";
timerColon.textContent = ":";
inputWrapper.append(timerMin, timerColon, timerSec);
timerTitle.textContent = "timer";
const timerBtn = document.createElement("button");
timerBtn.textContent = "Start";
timerBtn.className = "timer-btn";
timerWrapper.append(timerTitle, inputWrapper, timerBtn);
stopwatchTimerWrapper.append(stopwatchWrapper, timerWrapper);
document.body.append(stopwatchTimerWrapper);

// a stopwatch

let intervalIDStopwatch;
let secondsStopwatch = 1;
let intervalIDTimer;
let secondsTimer = null;

stopwatchBtn.addEventListener("click", () => {
  if (stopwatchBtn.textContent === "Start") {
    startStopwatch();
    stopwatchBtn.textContent = "Stop";
  } else {
    stopStopwatch();
    stopwatchBtn.textContent = "Start";
  }
});

function startStopwatch() {
  intervalIDStopwatch = setInterval(stopwatchCount, 1000);
}

function stopStopwatch() {
  intervalIDStopwatch = clearInterval(intervalIDStopwatch);
}

function stopwatchCount() {
  const timeText = changeSecondsToMin(secondsStopwatch);
  stopwatch.textContent = `${timeText.minText}:${timeText.secText}`;
  secondsStopwatch = secondsStopwatch + 1;
}

// a timer

timerBtn.addEventListener("click", () => {
  if (timerBtn.textContent === "Start") {
    if (isNaN(+timerMin.value) || isNaN(+timerSec.value)) {
      alert("Enter minutes or seconds");
      timerMin.value = "";
      timerSec.value = "";
      timerMin.classList.remove("disabled");
      timerSec.classList.remove("disabled");
      return;
    }

    timerMin.classList.add("disabled");
    timerSec.classList.add("disabled");
    startTimer();
    timerBtn.textContent = "Stop";
  } else {
    stopTimer();
    timerBtn.textContent = "Start";
  }
});

function startTimer() {
  intervalIDTimer = setInterval(timerCount, 1000);
}

function stopTimer() {
  intervalIDTimer = clearInterval(intervalIDTimer);
}

function timerCount() {
  if (secondsTimer === null) {
    secondsTimer = +timerSec.value + +timerMin.value * 60 - 1;
  }
  if (secondsTimer < 0) {
    stopTimer();
    timerMin.value = "00";
    timerSec.value = "00";
    timerBtn.textContent = "Start";
    alert("Timer expired");
    timerMin.classList.remove("disabled");
    timerSec.classList.remove("disabled");
    secondsTimer = null;
    return;
  }
  const timeText = changeSecondsToMin(secondsTimer);
  timerMin.value = timeText.minText;
  timerSec.value = timeText.secText;

  secondsTimer = secondsTimer - 1;
}

function changeSecondsToMin(sec) {
  let min = Math.trunc(sec / 60);
  secondsFromMinutes = Math.floor((sec / 60 - min) * 60);

  if (secondsFromMinutes < 10) secText = `0${secondsFromMinutes}`;
  if (secondsFromMinutes >= 10 && secondsFromMinutes < 60)
    secText = `${secondsFromMinutes}`;
  if (min === 0) minText = `00`;
  if (min > 0 && min < 10) minText = `0${min}`;
  if (min >= 10) minText = `${min}`;
  return { secText, minText };
}
