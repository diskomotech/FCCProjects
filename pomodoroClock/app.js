const buttons = document.querySelectorAll('button');
const timerDisplay = document.querySelector('.display__time-left');
let countdown;
// Should this be global? Can it go in buttonClicked instead?
let playing = false;

buttons.forEach(button => button.addEventListener('click', buttonClicked));

function buttonClicked() {
  // Work out which button was pressed
  const dataAttribute = this.dataset.action;
  const sessionDisplay = document.querySelector('#session-length');
  const breakDisplay = document.querySelector('#break-length');
  let sessionTime;

  if (dataAttribute === 'session-increment') {
    // Stop user setting value > 60
    if (sessionDisplay.textContent >= 60) return;
    // Stop user changing duration whilst timer is running
    if (playing === true) return;
    // Increment session duration display by 1 min, convert to secs and update display
    sessionDisplay.textContent++;
    sessionTime = sessionDisplay.textContent * 60;
    displayTimeLeft(sessionTime);
  }
  if (dataAttribute === 'session-decrement') {
    // Stop user setting value < 1
    if (sessionDisplay.textContent <= 1) return;
    // Stop user changing duration whilst timer is running
    if (playing === true) return;
    // Decrement session duration display by 1 min, convert to secs and update display
    sessionDisplay.textContent--;
    sessionTime = sessionDisplay.textContent * 60;
    displayTimeLeft(sessionTime);
  }
  if (dataAttribute === 'break-increment') {
    // Stop user setting value > 60
    if (breakDisplay.textContent >= 60) return;
    breakDisplay.textContent++;
  }
  if (dataAttribute === 'break-decrement') {
    // Stop user setting value < 1
    if (breakDisplay.textContent <= 1) return;
    breakDisplay.textContent--;
  }
  if (dataAttribute === 'start-stop') {
    if (!playing) {
      // Set flag from false to true
      playing = true;
      // Take the timer display string, split into array and convert to numbers
      const [mins, secs] = timerDisplay.textContent.split(':').map(parseFloat);
      // Convert numbers into seconds
      const secondsOnPause = (mins * 60) + secs;
      // Start the timer for necessary seconds
      timer(secondsOnPause);
    } else if (playing) {
      // Set flag from true to false
      playing = false;
      // Clear interval to pause the timer
      clearInterval(countdown);
    }
  }

  if (dataAttribute === 'reset') {
    // Stop timer running
    clearInterval(countdown);
    // Reset session and break duration values to their defaults
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
