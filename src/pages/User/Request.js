import React from 'react'
import PagesWithTable from "../../components/shared/PagesWithTable/PagesWithTable"
import UserRequestsTableData from '../../data/TableData/UserRequestsTableData/UserRequestsTableData';

const Request = () => {
  return (
    <>
    <PagesWithTable redirectTo={"/user/requests/create"}>
      <UserRequestsTableData />
    </PagesWithTable>
  </>
  );
};

export default Request