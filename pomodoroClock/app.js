const buttons = document.querySelectorAll('button');
const timerDisplay = document.querySelector('.display__time-left');
let countdown;

buttons.forEach(button => button.addEventListener('click', buttonClicked));

function buttonClicked() {
  // Work out which button was pressed
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

function timer(seconds) {
  // Clear any previous timer immediately
  clearInterval(countdown);

  // Get time now in milliseconds
  const now = Date.now();

  // Calculate time that timer should end in seconds
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);

  // Set and run our timer countdown
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // Stop running when we hit zero
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    // Update the display with the remaining time
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  // Generate the textContent of time remaining - adding in a '0' when secs under 10
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  // Display time remaining in tab
  document.title = display;

  // Show the time remaining in display
  timerDisplay.textContent = display;
}
