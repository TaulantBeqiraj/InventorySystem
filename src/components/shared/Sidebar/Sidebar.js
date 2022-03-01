import React from "react";
import { StyledSidebar, 
         NavItem, 
         Menu, 
         LogoutItem } from "./Sidebar.styled";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <StyledSidebar>
      <Logo />

      <Menu>
        <ul>
          {props.navItems.map((item, index) => {
            return (
              <NavItem key={index}>
                <Link to={item.redirectTo} 
                      onClick={ () => props.changePageTitle(item.text)}
                >
                  <img src={item.image} alt="" />
                  <p>{item.text}</p>
                </Link>
                <hr />
              </NavItem>

            );
          })}
        </ul>
      </Menu>

      <LogoutItem>
        <Link to={'/'}>
          <img src="../../images/logout.png" alt="" />
          <p>Log Out</p>
        </Link>
      </LogoutItem>
    </StyledSidebar>
  );
};

export default Sidebar;
