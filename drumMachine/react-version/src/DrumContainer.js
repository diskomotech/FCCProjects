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
  render() {
    return <DrumPresentational />;
  }
}

export default DrumContainer;
