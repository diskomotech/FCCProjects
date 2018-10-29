const drumMachine = document.querySelector('#drum-machine');
const display = document.querySelector('.display');
const keys = document.querySelector('.drum-pad');

keys.addEventListener('click', (event) => {
    if (event.target.className === 'drum-pad__button') {
        const action = event.target.dataset.action;
        const player = new SoundPlayer();
        const urlGenerator = (() => `https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/${action}.mp3`)();
        player.load(urlGenerator).play();    
        display.textContent = action;
    }   
});

//Remove button press effect once transition ended
function removeTransition (event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("triggered");
}

Array.from(keys.children).forEach(key => key.addEventListener("transitionend", removeTransition));