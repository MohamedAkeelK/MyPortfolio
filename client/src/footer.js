import React from "react";

const Footer = (props) => {
  return (
    <div>
      <footer>
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
      </footer>

      <small>@ 2020 Mohamed Akeel Khans Website all rights reserved</small>
    </div>
  );
};

export default Footer;
