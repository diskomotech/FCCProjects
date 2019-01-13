import React, { Component } from "react";
import "./App.css";
import Editor from "./Editor";
import Previewer from "./Previewer";
import marked from "marked";

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

  getMarkdownText = () => {
    const rawMarkup = marked(this.state.rawText, { sanitize: true });
    return { __html: rawMarkup };
  };

  render() {
    return (
      <div className="App">
        <Editor handleChange={this.handleChange} rawText={this.state.rawText} />
        <Previewer marked={this.getMarkdownText()} />
      </div>
    );
  }
}

export default App;
