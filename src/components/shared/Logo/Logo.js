import React from "react";
import { StyledLogo } from "./Logo.styled";


const Logo = (props) => {
  return (
    <StyledLogo {...props}>
      <div className="logo-">
      <div className="logo-image">
        <img src="/images/logo.png" alt="" />
      </div>
      <h1 className="logo-title">inventory</h1>
      </div>
    </StyledLogo>
  );
};

export default Logo;