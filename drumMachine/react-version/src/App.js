import React, { Component } from "react";
import "./App.css";
import "./DrumContainer";
import DrumMachine from "./DrumContainer";

class App extends Component {
  render() {
    return (
      <div>
        <DrumMachine />
      </div>
    );
  }
}

export default App;
