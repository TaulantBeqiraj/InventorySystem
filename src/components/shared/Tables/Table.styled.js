import styled from "styled-components";

export const StyledTable = styled.div`

  margin-top: 100px;
  padding: 0 40px;

  .container {
    max-width: 100%;
    width: 100%;
    padding: 0px;
  }

  .btn {
    margin-right: 10px;
  }

  .btn.reset {
    background-color: var(--clr-grey-2);
    color: white;
  }

  .btn.btn-secondary {
    background-color: var(--clr-primary-1);
  }

  th:first-child {
    width: 50px;
  }
  th:nth-of-type(3) {
    width: 300px !important;
    white-space: nowrap;
  }
  td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    max-width: 300px;
  }
`;
