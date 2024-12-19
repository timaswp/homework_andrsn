function formatTime(ms) {
    const seconds = Math.floor(ms / 1000) % 60;
    const minutes = Math.floor(ms / (1000 * 60)) % 60;
    const hours = Math.floor(ms / (1000 * 60 * 60));
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


//Stopwatch
const stopwatchDisplay = document.querySelector('#stopwatch-display'),
      stopwatchStartBtn = document.querySelector('#stopwatch-start'),
      stopwatchStopBtn = document.querySelector('#stopwatch-stop'),
      stopwatchResetBtn = document.querySelector('#stopwatch-reset');

let stopwatchInterval, stopwatchTime = 0;

function startStopwatch() {
    if (!stopwatchInterval) {
        const startTime = Date.now() - stopwatchTime;
        stopwatchInterval = setInterval(() => {
            stopwatchTime = Date.now() - startTime;
            stopwatchDisplay.textContent = formatTime(stopwatchTime);
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = 0;
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    stopwatchDisplay.textContent = '00:00:00';
}

stopwatchStartBtn.addEventListener("click", startStopwatch);
stopwatchStopBtn.addEventListener("click", stopStopwatch);
stopwatchResetBtn.addEventListener("click", resetStopwatch);


//Timer
const timerDisplay = document.querySelector('#timer-display'),
      timerStartBtn = document.querySelector('#timer-start'),
      timerStopBtn = document.querySelector('#timer-stop'),
      timerResetBtn = document.querySelector('#timer-reset'),
      timerInput = document.querySelector('#timer-input'),
      errorMessage = document.querySelector('.error-message'),
      add1mBtn = document.querySelector("#add-1m"),
      add10sBtn = document.querySelector("#add-10s");

let timerInterval = 0,
    timerTime = 60000; //default 1 min

function updateTimer() {
    timerDisplay.textContent = formatTime(timerTime);
}

function startTimer() {
    if (timerTime > 0 && !timerInterval) {
        const endTime = Date.now() + timerTime;
        timerInterval = setInterval(() => {
            timerTime = endTime - Date.now();
            if (timerTime <= 0) {
                timerTime = 0;
                clearInterval(timerInterval);
                timerInterval = 0;
            }
            updateTimer();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = 0;
}

function resetTimer() {
    stopTimer();
    timerTime = 0;
    updateTimer();
}

function parseInputTime(input) {
    const [hours, minutes, seconds] = input.value.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        return NaN;
    }
    return (hours * 3600 + minutes * 60 + seconds) * 1000;
}

function addTime(ms) {
    timerTime += ms;
    updateTimer();
}


timerInput.addEventListener("change", () => {
    const inputTime = parseInputTime(timerInput);
    if (!isNaN(inputTime)) {
        timerTime = inputTime;
        updateTimer();
        errorMessage.classList.add('hidden');
    } else {
        errorMessage.classList.remove('hidden');
    }
});

timerStartBtn.addEventListener("click", startTimer);
timerStopBtn.addEventListener("click", stopTimer);
timerResetBtn.addEventListener("click", resetTimer);
add1mBtn.addEventListener("click", () => addTime(60000));
add10sBtn.addEventListener("click", () => addTime(10000));