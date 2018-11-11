const buttons = document.querySelectorAll('button');
const timerDisplay = document.querySelector('.display__time-left');
let countdown;

buttons.forEach(button => button.addEventListener('click', buttonClicked));

function buttonClicked () {
    const dataAttribute = this.dataset.action;
    if (dataAttribute === 'session-increment') {
        console.log(dataAttribute);
    }
    if (dataAttribute === 'session-decrement') {
        console.log(dataAttribute);
    }
    if (dataAttribute === 'break-increment') {
        console.log(dataAttribute);
    }
    if (dataAttribute === 'break-decrement') {
        console.log(dataAttribute);
    }
    if (dataAttribute === 'start-stop') {
        console.log(dataAttribute);
    }
    if (dataAttribute === 'reset') {
        console.log(dataAttribute);
    }
}

function timer (seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0) {
          clearInterval(countdown);
          return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
  }