import React from "react";

const Previewer = ({ marked }) => {
  return (
    <div className="previewer-container">
      <div className="previewer" dangerouslySetInnerHTML={marked} />
    </div>
  );
};

export default Previewer;
