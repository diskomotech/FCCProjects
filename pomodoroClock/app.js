const buttons = document.querySelectorAll('button');
const timerDisplay = document.querySelector('.display__time-left');
let countdown;
let playing = false;

buttons.forEach(button => button.addEventListener('click', buttonClicked));

function buttonClicked(e) {
  // Work out which button was pressed
  const dataAttribute = this.dataset.action;
  const sessionDisplay = document.querySelector('#session-length');
  const breakDisplay = document.querySelector('#break-length');
  let sessionTime;

  if (dataAttribute === 'session-increment') {
    if (sessionDisplay.textContent >= 60) return;
    sessionDisplay.textContent++;
    sessionTime = sessionDisplay.textContent * 60;
    displayTimeLeft(sessionTime);
  }
  if (dataAttribute === 'session-decrement') {
    if (sessionDisplay.textContent <= 1) return;
    sessionDisplay.textContent--;
    sessionTime = sessionDisplay.textContent * 60;
    displayTimeLeft(sessionTime);
  }
  if (dataAttribute === 'break-increment') {
    if (breakDisplay.textContent >= 60) return;
    breakDisplay.textContent++;
  }
  if (dataAttribute === 'break-decrement') {
    if (breakDisplay.textContent <= 1) return;
    breakDisplay.textContent--;
  }
  if (dataAttribute === 'start-stop') {
    if (!playing) {
      e.preventDefault();
      // Somehow I need to use the secondsLeft number and use it to pass as the parameter to timer()
      // Convert the timerDisplay string into seconds (as integer)
      console.log(timerDisplay.textContent);
      timer(60);
      playing = true;
      console.log(playing);
    } else if (playing) {
      e.preventDefault();
      console.log(timerDisplay.textContent);
      playing = false;
      console.log(playing);
      clearInterval(countdown);
    }
  }

  if (dataAttribute === 'reset') {
    clearInterval(countdown);
    sessionDisplay.textContent = 25;
    breakDisplay.textContent = 5;
    displayTimeLeft(1500);
  }
}

function timer(seconds) {
  // Get time now in milliseconds
  const now = Date.now();

  // Calculate time that timer should end in seconds
  const then = now + seconds * 1000;

  // Display time left immediately
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

// Function to display the time left
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  // Generate the textContent of time remaining - adding in a '0' when secs under 10
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

  // Show the time remaining in display
  timerDisplay.textContent = display;

  // Display time remaining in tab
  document.title = display;
}
