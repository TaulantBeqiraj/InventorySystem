import React from "react";
import PagesWithTable from "../../components/shared/PagesWithTable/PagesWithTable";
import ProductsTableData from "../../data/TableData/ProductsTableData/ProductsTableData";

const Product = () => {
  return (
    <>
      <PagesWithTable redirectTo={"/admin/product/create/new"}>
        <ProductsTableData />
      </PagesWithTable>
    </>
  );
};

export default Product;
