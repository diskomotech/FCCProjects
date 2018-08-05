const qButton = document.querySelector("#Q");
const wButton = document.querySelector("#W");
const eButton = document.querySelector("#E");
const aButton = document.querySelector("#A");
const sButton = document.querySelector("#S");
const dButton = document.querySelector("#D");
const zButton = document.querySelector("#Z");
const xButton = document.querySelector("#X");
const cButton = document.querySelector("#C");

const playIt = function (url) {
    const player = new SoundPlayer();
    player.load(url).play();
}

qButton.addEventListener('click', () => {
    playIt('https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/clap.mp3');
});