const qButton = document.querySelector("#Q");
const wButton = document.querySelector("#W");
const eButton = document.querySelector("#E");
const aButton = document.querySelector("#A");
const sButton = document.querySelector("#S");
const dButton = document.querySelector("#D");
const zButton = document.querySelector("#Z");
const xButton = document.querySelector("#X");
const cButton = document.querySelector("#C");

const snare = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/snare.mp3";
const tom = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/tom.mp3";
const tink = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/tink.mp3";
const kick = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/kick.mp3";
const boom = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/boom.mp3";
const hihat = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/hihat.mp3";
const ride = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/ride.mp3";
const openhat = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/openhat.mp3";
const clap = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/clap.mp3";

const playIt = function (url) {
    const player = new SoundPlayer();
    player.load(url).play();
}

qButton.addEventListener('click', () => playIt(snare));

wButton.addEventListener('click', () => playIt(tom));

eButton.addEventListener('click', () => playIt(tink));

aButton.addEventListener('click', () => playIt(kick));

sButton.addEventListener('click', () => playIt(boom));

dButton.addEventListener('click', () => playIt(hihat));

zButton.addEventListener('click', () => playIt(ride));

xButton.addEventListener('click', () => playIt(openhat));

cButton.addEventListener('click', () => playIt(clap));