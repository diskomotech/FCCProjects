import React, { Component } from "react";
import "./App.css";

const DrumPresentational = props => {
  return (
    <div className="container">
      <div id="drum-machine">
        <div className="grid">
          <div className="display" />
          <div className="drum-pad">
            <div className="top-row">
              <div className="drum-pad__button" data-action="snare">
                Q
              </div>
              <div className="drum-pad__button" data-action="tom">
                W
              </div>
              <div className="drum-pad__button" data-action="tink">
                E
              </div>
            </div>
            <div className="mid-row">
              <div className="drum-pad__button" data-action="kick">
                A
              </div>
              <div className="drum-pad__button" data-action="boom">
                S
              </div>
              <div className="drum-pad__button" data-action="hihat">
                D
              </div>
            </div>
            <div className="bottom-row">
              <div className="drum-pad__button" data-action="ride">
                Z
              </div>
              <div className="drum-pad__button" data-action="openhat">
                X
              </div>
              <div className="drum-pad__button" data-action="clap">
                C
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrumPresentational;
