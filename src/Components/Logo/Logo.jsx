import React from "react";
import s from "./Logo.module.scss";
import logo from "../../images/logo2.png";
export const Logo = () => {
  return (
    <a href="/" className={s.container}>
      <img src={logo} alt="Logo" />
    </a>
  );
};
