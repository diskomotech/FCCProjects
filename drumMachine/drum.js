const display = document.querySelector('.display');
const keys = document.querySelector('.drum-pad');

keys.addEventListener('click', (event) => {
    if (event.target.className === 'drum-pad__button') {
        // Var to save typing later
        const action = event.target.dataset.action;
        const key = event.target;

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
});