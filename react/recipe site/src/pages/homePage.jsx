import React from "react";
import "../styles/homePage.css";

const homePage = () => {
  return (
    <div className="home">
      <img src="/logo.svg" alt="" className="logo" />

      <div className="description">
        <h2>Best recipes</h2>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, ex.</p>
      </div>
    </div>
  );
};

export default homePage;
