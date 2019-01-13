import React, { Component } from "react";
import "./App.css";
import Editor from "./Editor";
import Previewer from "./Previewer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawText:
        "## This is a sub-heading... ### And here's some other cool stuff:"
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  textConversion = () => {
    // Grab latest copy of state text

    //Convert into markdown
  }

  render() {
    return (
      <div className="App">
        <Editor handleChange={this.handleChange} rawText={this.state.rawText} />
        <Previewer />
      </div>
    );
  }
}

export default App;
