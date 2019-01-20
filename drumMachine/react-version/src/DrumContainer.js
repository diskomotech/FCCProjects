import React, { Component } from "react";
import "./App.css";
import "./DrumPresentational";
import DrumPresentational from "./DrumPresentational";

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
    let buttonPressed;
    const targetArr = Array.from(
      event.target.querySelectorAll(".drum-pad__button")
    );

    if (event.which === 81) {
      buttonPressed = targetArr[0];
    }
    if (event.which === 87) {
      buttonPressed = targetArr[1];
    }
    if (event.which === 69) {
      buttonPressed = targetArr[2];
    }
    if (event.which === 65) {
      buttonPressed = targetArr[3];
    }
    if (event.which === 83) {
      buttonPressed = targetArr[4];
    }
    if (event.which === 68) {
      buttonPressed = targetArr[5];
    }
    if (event.which === 90) {
      buttonPressed = targetArr[6];
    }
    if (event.which === 88) {
      buttonPressed = targetArr[7];
    }
    if (event.which === 67) {
      buttonPressed = targetArr[8];
    }

    this.setState({ buttonPressed: buttonPressed.dataset.action });
    this.playIt(buttonPressed.dataset.action);
    this.animated(buttonPressed);
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
