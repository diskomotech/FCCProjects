import React from "react";
import "./App.css";

const DrumPresentational = props => {
  const { clicked } = props;
  return (
    <div className="container">
      <div id="drum-machine">
        <div className="grid">
          <div className="display" />
          <div className="drum-pad">
            <div className="top-row">
              <button
                className="drum-pad__button"
                data-action="snare"
                onClick={clicked}
              >
                Q
              </button>
              <button className="drum-pad__button" data-action="tom">
                W
              </button>
              <button className="drum-pad__button" data-action="tink">
                E
              </button>
            </div>
            <div className="mid-row">
              <button className="drum-pad__button" data-action="kick">
                A
              </button>
              <button className="drum-pad__button" data-action="boom">
                S
              </button>
              <button className="drum-pad__button" data-action="hihat">
                D
              </button>
            </div>
            <div className="bottom-row">
              <button className="drum-pad__button" data-action="ride">
                Z
              </button>
              <button className="drum-pad__button" data-action="openhat">
                X
              </button>
              <button className="drum-pad__button" data-action="clap">
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
