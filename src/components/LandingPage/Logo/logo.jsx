import React from "react";
import LogoImg from "../../../assets/images/logo.png";

const Logo = ({ className = "" }) => {
  return (
    <img
      src={LogoImg}
      alt="Olympian House International logo"
      className={`block h-11 w-auto object-contain md:h-13 ${className}`}
    />
  );
};

export default Logo;
