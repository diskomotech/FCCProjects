import React from "react";
import "./App.css";

const DrumPresentational = props => {
  const { clicked, buttonPressed, keyPress } = props;
  return (
    <div className="container">
      <div id="drum-machine" onKeyPress={keyPress}>
        <div className="grid">
          <div className="display">{buttonPressed}</div>
          <div className="drum-pad">
            <div className="top-row">
              <button
                className="drum-pad__button"
                data-action="snare"
                onClick={clicked}
              >
                Q
              </button>
              <button
                className="drum-pad__button"
                data-action="tom"
                onClick={clicked}
              >
                W
              </button>
              <button
                className="drum-pad__button"
                data-action="tink"
                onClick={clicked}
              >
                E
              </button>
            </div>
            <div className="mid-row">
              <button
                className="drum-pad__button"
                data-action="kick"
                onClick={clicked}
              >
                A
              </button>
              <button
                className="drum-pad__button"
                data-action="boom"
                onClick={clicked}
              >
                S
              </button>
              <button
                className="drum-pad__button"
                data-action="hihat"
                onClick={clicked}
              >
                D
              </button>
            </div>
            <div className="bottom-row">
              <button
                className="drum-pad__button"
                data-action="ride"
                onClick={clicked}
              >
                Z
              </button>
              <button
                className="drum-pad__button"
                data-action="openhat"
                onClick={clicked}
              >
                X
              </button>
              <button
                className="drum-pad__button"
                data-action="clap"
                onClick={clicked}
              >
                C
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrumPresentational;
