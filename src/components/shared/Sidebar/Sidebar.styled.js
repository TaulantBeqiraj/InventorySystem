import styled from "styled-components";

export const StyledSidebar = styled.nav`
  width: 350px;
  height: 100%;
  background-color: var(--clr-grey-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;

  .logo-:first-child {
    margin-top: 10px;
    margin-left: -30px;
  }
`;

export const Menu = styled.div`
  width: 100%;
  color: white;
  margin-top: 40px;
  
  ul {
    padding-left: 0px;
  }

`;

export const NavItem = styled.div`
  padding: 5px 70px;  //
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  //align-items: center;

  hr {
    width: 90%;
    
  }

  a {
    padding-left: 20px;
    color: white;
    text-decoration: none;
    font-size: 1.3rem;
    display: flex;
    //align-content: center;
    margin-top: 5px;
    transition: all 0.5s ease-in-out;
    margin-bottom: 5px;
  }

  a:hover {
    transform: scale(1.2);
  }

  p {
    margin-bottom: 0px;
    margin-left: 20px;
    font-size: 0.9em;
    font-weight: 500;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export const LogoutItem = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 20%;
  display: flex;
  flex-direction: column;
  color: white;
  padding-right: 20px;  //
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  a {
    display: flex;
    margin-top: auto;
    color: white;
    font-size: 1.1rem;
    transition: all 0.5s ease-in-out;
    text-decoration: none;
  }

  a:hover {
    transform: scale(1.2);
  }

  p {
    margin-left: 10px;
    margin-top: 8px;
    margin-bottom: 5px;
  }
`;
