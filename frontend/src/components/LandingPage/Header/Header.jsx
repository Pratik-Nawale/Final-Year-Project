import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div id="header-container">
      <div id="header-heading-container">
        <h1>Elevate Your Game with Sportz - Your All-in-One Sports Hub!</h1>
        {/* <button class="button-54" role="button">Button 54</button> */}
        <button id="header-sign-up-button" role="button">
          Sign Up
        </button>
      </div>
      <div id="header-image-container">
        <img src="./images/Header/3399852.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
