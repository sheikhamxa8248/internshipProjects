import React, { useState } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

function Nav() {
  //state used to toggle classes for the hamburger menu
  const [crossClicked, setCrossClicked] = useState(true);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo"></img>
      <Link to="/" style={{ textDecoration: "none", color: " white" }}>
        <h1 className="heading">Sign-in Sheet</h1>{" "}
      </Link>
      <a
        href="#"
        className={crossClicked ? "toggle-button" : "toggle-button active"}
        onClick={() => setCrossClicked(false)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <a
        href="#"
        className={crossClicked ? "close active" : "close"}
        onClick={() => setCrossClicked(true)}
      >
        X
      </a>
      <div className={crossClicked ? "navbar-links active" : "navbar-links"}>
        <ul>
          <Link
            style={{ textDecoration: "none", color: " white" }}
            to="/student"
          >
            <li className="student">Student</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: " white" }}
            to="/teacher"
          >
            <li>Teacher</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
