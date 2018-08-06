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
const display = document.querySelector(".display");

const playIt = function (url, text) {
    const player = new SoundPlayer();
    player.load(url).play();
    display.innerHTML = text;
}

qButton.addEventListener('click', () => playIt(snare, "Snare"));

wButton.addEventListener('click', () => playIt(tom, "Tom"));

eButton.addEventListener('click', () => playIt(tink, "Tink"));

aButton.addEventListener('click', () => playIt(kick, "Kick"));

sButton.addEventListener('click', () => playIt(boom, "Boom"));

dButton.addEventListener('click', () => playIt(hihat, "Hi-Hat"));

zButton.addEventListener('click', () => playIt(ride, "Ride"));

xButton.addEventListener('click', () => playIt(openhat, "Open Hat"));

cButton.addEventListener('click', () => playIt(clap, "Clap"));