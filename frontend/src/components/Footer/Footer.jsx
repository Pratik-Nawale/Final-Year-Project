// Footer.jsx

import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [message, setMessage] = useState("");

  const autoResizeTextarea = (element) => {
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
  };

  const handleTextareaInput = (e) => {
    setMessage(e.target.value);
    autoResizeTextarea(e.target);
  };

  useEffect(() => {
    const textarea = document.getElementById("message");
    if (textarea) {
      autoResizeTextarea(textarea);
    }
  }, []);

  return (
    <footer className="footer" style={{ backgroundColor: "#ffffff", color: "#333" }}>
      <div className="footer-content">
        <div className="section links">
          <h2>Important Links</h2>
          <ul>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>
        <div className="section tools">
          <h2>TOOLS</h2>
          <ul>
            <li><a href="/api">API</a></li>
            <li><a href="/google-workspace">Google Workspace</a></li>
          </ul>
        </div>
        <div className="section help">
          <h2>HELP</h2>
          <ul>
            <li><a href="/support">Support</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/icon-styles">Icon Styles</a></li>
            <li><a href="/icons-editor">Icons Editor</a></li>
            <li><a href="/flaticon-collections">Flaticon Collections</a></li>
          </ul>
        </div>
        <div className="section company">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/our-license">Our License</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/whats-new">What’s New</a></li>
          </ul>
        </div>
        <div className="section social-media">
          <h2>SOCIAL MEDIA</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
        <div className="section newsletter">
          <p>Get exclusive images straight in your inbox</p>
          <button style={{ backgroundColor: "#ff9933", color: "#ffffff" }}>Sign up</button>
        </div>
        <div className="section terms">
          <p>Terms and conditions Privacy policy Cookies policy Copyright notification</p>
        </div>
        <div className="section company-info">
          <p>"The Educators"</p>
          <p>Copyright © 2023-2024 Eather Bots All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
