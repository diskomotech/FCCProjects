import React, { Component, Fragment } from "react";
import Quotes from "./Quotes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    };
  }
  randomQuoteGenerate = () => {
    const random = Math.floor(Math.random() * 12);
    this.setState({
      quote: Quotes[random]
    });
  };

  render() {
    return (
      <Fragment>
        <div id="wrapper">
          <div id="quote-box" className="col-lg-5">
            <div id="text">
              {this.state.quote ? (
                <h2>
                  <i class="fa fa-quote-left" /> {this.state.quote.quotation}
                </h2>
              ) : null}
            </div>
            <div id="author">
              {this.state.quote ? <h4>- {this.state.quote.author}</h4> : null}
            </div>
            <div id="buttons">
              <a
                id="tweet-quote"
                className="fa fa-twitter-square"
                href="https://twitter.com/intent/tweet"
              />
              <button
                onClick={this.randomQuoteGenerate}
                id="new-quote"
                className="btn btn-outline-dark"
              >
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
