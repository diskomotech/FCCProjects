const qButton = document.querySelector("#Q");
const wButton = document.querySelector("#W");
const eButton = document.querySelector("#E");
const aButton = document.querySelector("#A");
const sButton = document.querySelector("#S");
const dButton = document.querySelector("#D");
const zButton = document.querySelector("#Z");
const xButton = document.querySelector("#X");
const cButton = document.querySelector("#C");

const drumMachine = document.querySelector('#drum-machine');
const display = document.querySelector('.display');
const keys = document.querySelectorAll('.drum-pad__button');
const keys2 = document.querySelector('.drum-pad');

//Will try and refactor into a single variable and object and use key/value pairs
const snare = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/snare.mp3";
const tom = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/tom.mp3";
const tink = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/tink.mp3";
const kick = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/kick.mp3";
const boom = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/boom.mp3";
const hihat = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/hihat.mp3";
const ride = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/ride.mp3";
const openhat = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/openhat.mp3";
const clap = "https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/clap.mp3";


//Function to make sounds play
const playIt = function (url, text) {
    const player = new SoundPlayer();
    player.load(url).play();
    display.innerHTML = text;
}

keys2.addEventListener('click', (event) => {
    if (event.target.className === 'drum-pad__button') {
        console.log(event.target);
    }
    
});

// //Drum pad button functionality
// qButton.addEventListener('click', () => {
//     playIt(snare, "Snare");
//     qButton.classList.add("triggered");
// });
// wButton.addEventListener('click', () => {
//     playIt(tom, "Tom");
//     wButton.classList.add("triggered");
// });
// eButton.addEventListener('click', () => {
//     playIt(tink, "Tink");
//     eButton.classList.add("triggered");
// });
// aButton.addEventListener('click', () => {
//     playIt(kick, "Kick");
//     aButton.classList.add("triggered");
// });
// sButton.addEventListener('click', () => {
//     playIt(boom, "Boom");
//     sButton.classList.add("triggered");
// });
// dButton.addEventListener('click', () => {
//     playIt(hihat, "Hi-Hat");
//     dButton.classList.add("triggered");    
// });
// zButton.addEventListener('click', () => {
//     playIt(ride, "Ride");
//     zButton.classList.add("triggered");
// });
// xButton.addEventListener('click', () => {
//     playIt(openhat, "Open Hat");
//     xButton.classList.add("triggered");
// });
// cButton.addEventListener('click', () => {
//     playIt(clap, "Clap");
//     cButton.classList.add("triggered");
// });


// //Key press functionality
// window.addEventListener('keydown', (event) => {
//     if (event.which === 81) {
//         playIt(snare, "Snare");
//         qButton.classList.add("triggered");
//     }
//     if (event.which === 87) {
//         playIt(tom, "Tom");
//         wButton.classList.add("triggered");
//     }
//     if (event.which === 69) {
//         playIt(tink, "Tink");
//         eButton.classList.add("triggered");
//     }
//     if (event.which === 65) {
//         playIt(kick, "Kick");
//         aButton.classList.add("triggered");
//     }
//     if (event.which === 83) {
//         playIt(boom, "Boom");
//         sButton.classList.add("triggered");
//     }
//     if (event.which === 68) {
//         playIt(hihat, "Hi-Hat");
//         dButton.classList.add("triggered");
//     }
//     if (event.which === 90) {
//         playIt(ride, "Ride");
//         zButton.classList.add("triggered");
//     }
//     if (event.which === 88) {
//         playIt(openhat, "Open Hat");
//         xButton.classList.add("triggered");
//     }
//     if (event.which === 67) {
//         playIt(clap, "Clap");
//         cButton.classList.add("triggered");
//     }
// });

//Remove button press effect once transition ended
function removeTransition (event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("triggered");
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));