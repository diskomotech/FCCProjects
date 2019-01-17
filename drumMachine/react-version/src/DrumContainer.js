import React, { Component } from "react";
import "./App.css";
import "./DrumPresentational";
import DrumPresentational from "./DrumPresentational";
// import { createPlayer } from "web-audio-player";
var createPlayer = require("web-audio-player");

class DrumContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: ""
    };
  }

  playIt = action => {
    // Generate AWS URL for our sounds
    const urlGenerator = (() =>
      `https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/${action}.mp3`)();
    // Initiate new instance of external sound player

    const sound = (() => new Audio(urlGenerator))();

    return sound.play();
    // const audio = createPlayer(urlGenerator, {
    //   crossOrigin: "anonymous"
    // });
    // Play the sound
    // audio.on("load", () => {
    //   // start playing audio file
    //   audio.play();
    // and connect your node somewhere, such as
    // the AudioContext output so the user can hear it!
    // audio.node.connect(audio.context.destination)
  };
  // Display sound name
  // display.textContent = action;

  animated = buttonTarget => {
    // Add press effect animation
    buttonTarget.classList.add("triggered");

    // Remove press effect animation
    setTimeout(() => {
      buttonTarget.classList.remove("triggered");
    }, 80);
  };

  handleClick = event => {
    console.log("works");
    this.playIt(event.target.dataset.action);
    this.animated(event.target);
  };

  render() {
    return <DrumPresentational clicked={this.handleClick} />;
  }
}

export default DrumContainer;
