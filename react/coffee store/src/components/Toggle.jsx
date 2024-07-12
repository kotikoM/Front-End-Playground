import React, { useState } from "react";
import "./Toggle.css";

const Toggle = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`toggle-button ${isActive ? "active" : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="circle"></div>
    </button>
  );
};

export default Toggle;
