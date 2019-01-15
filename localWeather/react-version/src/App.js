import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="contentBox">
          <div className="headerTitle">
            <h1>
              FreeCodeCamp
              <br />
              Weather App
            </h1>
          </div>
          <div className="weatherDisplay">
            <button
              type="button"
              // className="btn btn-outline-secondary btn-lg"
              id="locate"
            >
              Show Me The Weather
            </button>
            <div className="location" />
            <div className="weather" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
