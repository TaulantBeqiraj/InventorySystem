import React from 'react'
import PagesWithTable from '../../components/shared/PagesWithTable/PagesWithTable';
import UserInventoryTableData from '../../data/TableData/UserInventoryTableData/UserInventoryTableData';

const Inventory = () => {
  return (
    <>
      <PagesWithTable redirectTo={"/admin/inventory/create"}>
        <UserInventoryTableData />
      </PagesWithTable>
    </>
  );
};

export default Inventory