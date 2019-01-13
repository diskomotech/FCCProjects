import React from "react";

const Editor = props => {
  return (
    <div className="editor-container">
      <form>
        <label>
          <textarea
            type="text"
            id="editor"
            value={props.markdown}
            onChange={props.handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Editor;
