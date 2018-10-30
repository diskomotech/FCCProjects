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
    if (event.which === 81) {
        //Point event.target at right HTML element. But how?
        event.target.dataset.action = "snare";
        }
    if (event.which === 87) {
        event.target.dataset.action = "tom";
        }
    if (event.which === 69) {
        event.target.dataset.action = "tink";
        }
    if (event.which === 65) {
        event.target.dataset.action = "kick";
        }
    if (event.which === 83) {
        event.target.dataset.action = "boom";
        }
    if (event.which === 68) {
        event.target.dataset.action = "hihat";
        }
    if (event.which === 90) {
        event.target.dataset.action = "ride";
        }
    if (event.which === 88) {
        event.target.dataset.action = "openhat";
        }
    if (event.which === 67) {
        event.target.dataset.action = "clap";
        }     
        playIt(event.target.dataset.action);
        event.target.dataset.action = "";
    });