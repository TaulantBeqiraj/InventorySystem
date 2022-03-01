import React from "react";
import PagesWithTable from "../../components/shared/PagesWithTable/PagesWithTable";
import AdminInventoryTableData from "../../data/TableData/AdminInventoryTableData/AdminInventoryTableData";

const Inventory = () => {
  return (
    <>
      <PagesWithTable redirectTo={"/admin/inventory/create/new"}>
        <AdminInventoryTableData />
      </PagesWithTable>
    </>
  );
};

export default Inventory;
