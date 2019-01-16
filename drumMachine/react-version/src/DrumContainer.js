import React, { Component } from "react";
import "./App.css";
import "./DrumPresentational";
import DrumPresentational from "./DrumPresentational";

class DrumContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: ""
    };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://gustavgenberg.github.io/handy-front-end/SoundPlayer.js";
    script.async = true;
    document.body.appendChild(script);
  }

  playIt = action => {
    // Initiate new instance of external sound player
    const player = new SoundPlayer();

    // Generate AWS URL for our sounds
    const urlGenerator = (() =>
      `https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/${action}.mp3`)();

    // Play the sound
    player.load(urlGenerator).play();

    // Display sound name
    // display.textContent = action;
  };

  animated = buttonTarget => {
    // Add press effect animation
    buttonTarget.classList.add("triggered");

    // Remove press effect animation
    setTimeout(() => {
      buttonTarget.classList.remove("triggered");
    }, 80);
  };

  render() {
    return <DrumPresentational />;
  }
}

export default DrumContainer;
