import "./Header.css";
import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const redirectPage = async () => {
    navigate(`/SignUp-Login`);
  };

  return (
    <div id="header-container">
      <div id="header-heading-container">
        <h1>Elevate Your Game with Sportz - Your All-in-One Sports Hub!</h1>

        <button id="header-sign-up-button" onClick={redirectPage}>
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
