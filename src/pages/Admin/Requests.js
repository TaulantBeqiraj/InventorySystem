import React from 'react'
import PagesWithTable from '../../components/shared/PagesWithTable/PagesWithTable';
import AdminRequestsTableData from '../../data/TableData/AdminRequestsTableData/AdminRequestsTableData';

const Requests = () => {
  return (
      <>
        <PagesWithTable redirectTo={"/admin/requests/manage"}>
          <AdminRequestsTableData />
        </PagesWithTable>
      </>
  );
};

export default Requests