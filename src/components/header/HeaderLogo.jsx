import React from 'react';
import logo from "../../assets/min-logo.png";

const HeaderLogo = () => {
  return (
    <div className="logo">
      <h1>
        <a href="#">
          <img src={logo} alt="Logo Douglas" />
        </a>
      </h1>
    </div>
  )
}

export default HeaderLogo