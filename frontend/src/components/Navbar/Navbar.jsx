import React from "react";
import "./Navbar.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo1.png" alt="Logo" />
      </div>

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>

          <li className="nav-item">
            <a href="/sports">Sports</a>
            <div className="dropdown-content">
              <a href="/football">Football</a>
              <a href="/basketball">Basketball</a>
              <a href="/tennis">Tennis</a>
            </div>
          </li>

          <li className="nav-item">
            <a href="/coaching">Coaching</a>
            <div className="dropdown-content">
              <a href="/individual">Individual Coaching</a>
              <a href="/team">Team Coaching</a>
            </div>
          </li>

          <li className="nav-item">
            <a href="/ai-features">AI Features</a>
            <div className="dropdown-content">
              <a href="/analysis">Performance Analysis</a>
              <a href="/personalized">Personalized Training</a>
            </div>
          </li>

          <li className="nav-item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>
          <img src="/images/search.png" alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
