import React, { Component } from "react";
import "./App.css";
import Editor from "./Editor";
import Previewer from "./Previewer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor />
        <Previewer />
      </div>
    );
  }
}

export default App;
