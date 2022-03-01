import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button.styled";
import Table from "../Tables/Table";

const PagesWithTable = (props) => {
  return (
    <>
      <div>
        <Link to={props.redirectTo}>
          <Button>Add New</Button>
        </Link>
        <Table>
          {props.children}
        </Table>
      </div>
    </>
  );
};

export default PagesWithTable;
