import React from "react";
import { Link } from "react-router-dom";
// import logo from "./logo.png";
import { Input, Icon } from "semantic-ui-react";

const NavBar = (props) => {
  return (
    <div>
      <header>
        <h2 className="logo">Akeel</h2>
        <nav>
          <ul className="nav_links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Resume</a>
            </li>
          </ul>
        </nav>

        <a className="cta" href="/">
          <button>Contact</button>
        </a>
      </header>
    </div>
  );
};

export default NavBar;
