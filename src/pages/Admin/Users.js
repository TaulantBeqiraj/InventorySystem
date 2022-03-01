import React from 'react'
import PagesWithTable from '../../components/shared/PagesWithTable/PagesWithTable'
import UsersTableData from '../../data/TableData/UsersTableData/UsersTableData';

const Users = () => {
  return (
    <>
      <PagesWithTable redirectTo={"/admin/user/create"}>
        <UsersTableData />
      </PagesWithTable>
  </>
  );
};

export default Users