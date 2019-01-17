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

  playIt = action =>
    new Audio(
      `https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/${action}.mp3`
    ).play();
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
