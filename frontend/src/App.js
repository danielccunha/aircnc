import React from "react";

import Routes from "./routes";

import "./global.css";
import logo from "./assets/logo.svg";

export default () => {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
};
