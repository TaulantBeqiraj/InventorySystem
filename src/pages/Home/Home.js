import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../components/shared/Logo/Logo";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  const [showRegister, setShowRegister] = useState(false);

  console.log(showRegister);
  return (
    <>
      <Header>
        <Logo />
      </Header>
      {showRegister ? (
        <Register
          setShowRegister={setShowRegister}
          showRegister={showRegister}
        />
      ) : (
        <Login setShowRegister={setShowRegister} 
               showRegister={showRegister} />
      )}
    </>
  );
};

export const Header = styled.header`
  height: 10%;
`;

export default Home;
