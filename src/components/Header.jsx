import React from "react";
import "./Header.css";
import logo from "./log.png";
function Header() {
  return (
    <div className="header">
      <div className="left-header">
        <img src={logo} alt="" />
        <p>Medico</p>
      </div>
      <div className="right-header">
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Header;
