import styled from "styled-components";

export const StyledProfile = styled.div`

display: flex;

  p {
    text-decoration: none;
    margin-right: 10px;
    margin-bottom: 2px;
    color: var(--clr-primary-4);
  }

  .profile-name {
    font-weight: 800;
    font-size: 1.2rem;
  }

  .profile-email {
    font-size: 0.8rem;
  }

  img {
    display: flex;
    height: 50px;
  }
`;