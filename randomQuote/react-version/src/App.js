import React, { Component, Fragment } from "react";
import Quotes from "./Quotes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello world</h1>
        <div id="wrapper">
          <div id="quote-box" className="col-lg-5">
            <div id="text" />
            <div id="author" />
            <div id="buttons">
              <a
                id="tweet-quote"
                className="fa fa-twitter-square"
                href="https://twitter.com/intent/tweet"
              />
              <button id="new-quote" className="btn btn-outline-dark">
                New Quote
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
