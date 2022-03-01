import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { StyledMain } from "../Main/Main.styled";
import Header from "../Header/Header";
import Page from "../Main/Page";

const Layout = ({ navItems, redirectTo, children }) => {
  const [pageTitle, setpageTitle] = useState("dashboard");

  const changePageTitle = (pageTitle) => {
    setpageTitle(pageTitle);
  };

  return (
    <>
      <Sidebar navItems={navItems} changePageTitle={changePageTitle} />

      <StyledMain>
        <Header
          pageTitle={pageTitle}
          redirectTo={redirectTo}
          changePageTitle={changePageTitle}
        />

        <Page>{children}</Page>
      </StyledMain>
    </>
  );
};

export default Layout;
