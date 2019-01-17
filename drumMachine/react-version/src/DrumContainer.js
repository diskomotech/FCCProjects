import React, { Component } from "react";
import "./App.css";
import "./DrumPresentational";
import DrumPresentational from "./DrumPresentational";

const keycodes = {
  81: "Q",
  87: "W",
  69: "E",
  65: "A",
  83: "S",
  68: "D",
  90: "Z",
  88: "X",
  67: "C"
};

//TO DO: GET KEYPRESS WORKING

class DrumContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonPressed: ""
    };
  }

  playIt = action =>
    new Audio(
      `https://s3.eu-west-2.amazonaws.com/diskomotech/freeCodeCamp/drumMachine/sounds/${action}.mp3`
    ).play();

  animated = buttonTarget => {
    // Add press effect animation
    buttonTarget.classList.add("triggered");

    // Remove press effect animation
    setTimeout(() => {
      buttonTarget.classList.remove("triggered");
    }, 80);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleClick = event => {
    const { action } = event.target.dataset;
    this.setState({ buttonPressed: action });
    this.playIt(action);
    this.animated(event.target);
  };

  handleKeyPress = event => {
    const key = keycodes[event.keyCode];
  };

  render() {
    return (
      <DrumPresentational
        clicked={this.handleClick}
        buttonPressed={this.state.buttonPressed}
        keyPress={this.handleKeyPress}
      />
    );
  }
}

export default DrumContainer;
