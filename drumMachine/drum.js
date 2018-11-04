const display = document.querySelector('.display');
const keys = document.querySelector('.drum-pad');

const playIt = (action) => {
    //Initiate new instance of external sound player
    const player = new SoundPlayer();

    //Generate AWS URL for our sounds
    const urlGenerator = (() => `https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/${action}.mp3`)();
    
    //Play the sound
    player.load(urlGenerator).play(); 

    // Display sound name 
    display.textContent = action;
}

const animated = (buttonTarget) => {
    // Add press effect animation
    buttonTarget.classList.add('triggered');

    // Remove press effect animation
    setTimeout(() => {
        buttonTarget.classList.remove('triggered');
    }, 80);
}

keys.addEventListener('click', (event) => {
    if (event.target.className === 'drum-pad__button') {
        playIt(event.target.dataset.action);
        animated(event.target);
    }   
});

window.addEventListener('keydown', (event) => {
    //Grab array of drum-pad button elements
    const targetArr = Array.from(event.target.querySelectorAll('.drum-pad__button'));
    
    //Define var in eventListener parent scope so accessible by PlayIt
    let buttonPressed;

    if (event.which === 81) {
        buttonPressed = targetArr[0];
        }
    if (event.which === 87) {
        buttonPressed = targetArr[1];
        }
    if (event.which === 69) {
        buttonPressed = targetArr[2];
        }
    if (event.which === 65) {
        buttonPressed = targetArr[3];
        }
    if (event.which === 83) {
        buttonPressed = targetArr[4];
        }
    if (event.which === 68) {
        buttonPressed = targetArr[5];
        }
    if (event.which === 90) {
        buttonPressed = targetArr[6];
        }
    if (event.which === 88) {
        buttonPressed = targetArr[7];
        }
    if (event.which === 67) {
        buttonPressed = targetArr[8];
        }    
        playIt(buttonPressed.dataset.action);
        animated(buttonPressed);
        buttonPressed.dataset.action = '';
    });