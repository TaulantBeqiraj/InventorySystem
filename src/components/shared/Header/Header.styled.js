import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6%;
  padding-top: 37px;
  padding-left: 40px;
  padding-right: 40px;

  h2 {
    margin-bottom: auto;
    align-self: end;
    color: var(--clr-primary-4);
    font-family: "Nunito", serif;
    font-size: 1.3em;
    font-weight: 800;
    text-transform: uppercase;
  }
  @media screen and (max-width: 890px) {
    align-items: start;
    height: 10%;
  }
  `;
