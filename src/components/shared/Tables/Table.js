import React from "react";
import { StyledTable } from "./Table.styled";

const Table = (props) => {

  return (
    <>
      <StyledTable>
        {props.children}
      </StyledTable>
    </>
  );
};

export default Table;
