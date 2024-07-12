import React, { useState } from "react";

const ToggleButton = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  console.log(children);

  const [child1, child2] = children;

  return (
    <div className="toggleButton">
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      {isVisible ? child1  : child2}
    </div>
  );
};

export default ToggleButton;
