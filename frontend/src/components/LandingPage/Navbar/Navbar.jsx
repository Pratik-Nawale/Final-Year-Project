import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const navElements = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Features",
    link: "/",
  },
  {
    title: "Pricing",
    link: "/",
  },
  {
    title: "About",
    link: "/",
  },
  {
    title: "Contact",
    link: "/",
  },
];

const Navbar = () => {
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    console.log("clicked");
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
        <ul id="nav-elements-container" className={clicked? "nav-elements-container active": "nav-elements-container"}>  
          {navElements.map((item, key) => (
            <li>
              <NavLink className="active" to={item.link} key={key}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div id="nav-sidebar" onClick={handleClick}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
