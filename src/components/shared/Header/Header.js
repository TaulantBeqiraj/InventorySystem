import React from "react";
import { StyledHeader } from "./Header.styled";
import Profile from "./Profile";

const Header = ({ pageTitle, redirectTo, changePageTitle }) => {
  return (
    <>
      <StyledHeader>
          <h2>{pageTitle}</h2>

          <Profile 
            name={'Taulant Beqiraj'}  
            email={'taulant@beriflapp.com'}
            image={'../../images/profile-pic.png'}
            redirectTo={redirectTo}
            changePageText={changePageTitle}
          />

      </StyledHeader>
    </>
  );
};

export default Header;
