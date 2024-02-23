import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const elements = [
    "Products",
    "Services",
    "Industries",
    "Technologies",
    "Partners",
  ];
  const otherLinks = [
    {
      title: "Sitemap",
      link: "/sitemap",
    },
    {
      title: "Term of Use",
      link: "/term-of-use",
    },
    {
      title: "Privacy policy",
      link: "/privacy-policy",
    },
    {
      title: "Security",
      link: "/security",
    },
    {
      title: "Accessibility",
      link: "/accessibility",
    },
    {
      title: "ContactUs",
      link: "/contactus",
    },
  ];
  return (
    <div id="main-footer-div">
      <div id="upper-footer">
        
        <div id="footer-nav">
          {elements.map((ele, key) => (
            <a href="/">{ele}</a>
          ))}
        </div>
      </div>
      <div id="lower-footer">
        <div id="copy-right">&copy; SPORTZ. 2024. All Rights Reserved</div>
        <div id="other-sections">
          {otherLinks.map((ele, key) => (
            <>
              <NavLink to={ele.link} key={key}>
                {ele.title}
              </NavLink>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
