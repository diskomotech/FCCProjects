import React, { Component } from "react";
import Previewer from "./Previewer";

class Editor extends Component {
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
  render() {
    return (
      <div className="editor-container">
        <form>
          <label>
            Editor
            <input
              type="textarea"
              id="editor"
              value={this.state.rawText}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Editor;
