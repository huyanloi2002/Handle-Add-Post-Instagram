import React, { useState } from "react";

const DropButton = ({ name, render }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <button onClick={() => setIsOpen(!isOpen)}>{name}</button>
      {isOpen && <div>{render}</div>}
    </React.Fragment>
  );
};

export default DropButton;
