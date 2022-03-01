import styled from "styled-components";

export const StyledForm = styled.div`
  .form {
    background-color: var(--clr-white);
    width: 450px;
    margin: 100px auto;
    align-self: center;
    align-items: center;
    text-align: center;
    display: block;
    border-radius: 10px;
    padding: 3% 3%;
    box-shadow: 0px 3px 12px 0px rgba(43, 150, 236, 0.43);
  }

  .form-group {
    padding-top: 5px;
    margin: 15px;
    text-align: center;
  }

  select{
    -webkit-appearance: listbox !important
  }

  h2 {
    padding: 10px;
    margin-bottom: 10px;
    color: var(--clr-primary-4);
  }

  .forgot-password a {
    padding-top: 10px;
    padding-bottom: 20px;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    display: inline-block;
    color: var(--clr-primary-1);
  }

  .submit {
    background-color: var(--clr-primary-1);
    color: white;
    width: 100%;
    padding: 10px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 5px;
    transition: all 0.5s ease-in-out;
  }

  .submit:hover {
    transform: scale(1.05);
  }

  .submited {
    margin-top: 5px;
  }

  .register a {
    background-color: var(--clr-white);
    margin: 5px;
    text-decoration: none;
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;
