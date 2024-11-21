import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* <div className="logo">
        <Link to="/">My App</Link>
      </div> */}
      {/* <nav className="navigation">
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <div className="About">About</div>
      <div className="SignIn">SignIn</div>
    </header>
  );
};

export default Header;
