import React from "react";
import marked from "marked";

const Previewer = props => {
  const renderer = new marked.Renderer();
  return (
    <div className="previewer-container">
      <div
        className="previewer"
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown, { renderer: renderer })
        }}
      />
    </div>
  );
};

export default Previewer;
