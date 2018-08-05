const qButton = document.querySelector("#Q");
//Rest of keyboard buttons to go here



qButton.addEventListener('click', () => {
    const player = new SoundPlayer();
    player.load('https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/clap.mp3').play();
});