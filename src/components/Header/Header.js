import React from "react";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [nav, setNav] = useState(["Home", "About", "Languages"]);

  return (
    <div className="header">
      <div className="header__logo">
        <img
          className="header__logo-img"
          src="https://feedbackbooster.io/img/roadmap-icon.png"
          alt=""
        />
      </div>
      <h1 className="header__title">RoadAz</h1>
      <ul className="header__nav">
        {nav.map((item) => (
          <li className="header__nav-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
