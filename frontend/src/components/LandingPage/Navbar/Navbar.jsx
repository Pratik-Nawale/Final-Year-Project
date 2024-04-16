import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const navElements = [
  {
    title: "Home",
    link: "header-container",
    offset: 20,
  },
  {
    title: "Features",
    link: "features",
    offset: 0,
  },
  {
    title: "Pricing",
    link: "pricing-section",
    offset: 0,
  },
  {
    title: "About",
    link: "pricing-about-us",
    offset: 50,
  },
];

const Navbar = () => {
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      setclicked(false);
    } else if (!clicked) {
      setclicked(true);
    }
  };

  return (
    <nav id="nav-container">
      <Link href="">SPORTZ</Link>
      <div>
        <ul
          id="nav-elements-container"
          className={
            clicked ? "nav-elements-container active" : "nav-elements-container"
          }
        >
          {navElements.map((item, key) => (
            <li>
              <Link
                to={item.link}
                key={key}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={600}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <NavLink to="/contactus">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/SignUp-Login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>

      <div id="nav-sidebar" onClick={handleClick}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
