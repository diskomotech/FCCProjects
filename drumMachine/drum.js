const display = document.querySelector('.display');
const keys = document.querySelector('.drum-pad');

const playIt = (action) => {
    const key = event.target;
    // const action = event.target.dataset.action;

    //Initiate new instance of external sound player
    const player = new SoundPlayer();

    //Generate AWS URL for our sounds
    const urlGenerator = (() => `https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/${action}.mp3`)();
    
    //Play the sound
    player.load(urlGenerator).play(); 

    // Display sound name 
    display.textContent = action;
    
    // Add press effect animation
    key.classList.add('triggered');

    // Remove press effect animation
    setTimeout(() => {
        key.classList.remove('triggered');
    }, 80);
}

keys.addEventListener('click', (event) => {
    if (event.target.className === 'drum-pad__button') {
        playIt(event.target.dataset.action);
    }   
});

window.addEventListener('keydown', (event) => {
    if (event.which === 81) {
        
        //Need to link this button press with dataset.action = "snare"

        //event.key = "q"

        // console.log(event);

        // playIt('snare');
        // event.stopPropagation();
        }
    });