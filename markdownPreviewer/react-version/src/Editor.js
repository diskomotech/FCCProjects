import React from "react";

const Editor = ({ rawText, handleChange }) => {
  return (
    <div className="editor-container">
      <form>
        <label>
          Editor
          <input
            type="textarea"
            id="editor"
            value={rawText}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Editor;
