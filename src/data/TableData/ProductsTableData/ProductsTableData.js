import React, { useState } from "react";
import { ProductsRawData } from "./ProductsRawData";
import { useNavigate } from "react-router-dom";

const ProductsTableData = () => {

  const navigate = useNavigate();

  const productData = JSON.parse(localStorage.getItem("products") || "[]");
  
  const [products, setProducts] = useState(productData)

  const init = () => {
    localStorage.setItem("products", JSON.stringify(ProductsRawData));
    setProducts(JSON.parse(localStorage.getItem("products") || "[]"));
  };

  const handleDelete = (id) => {
    let newItems = products.filter((item) => item.id !== id);

    localStorage.setItem("products", JSON.stringify(newItems));
    setProducts(newItems);
  };

  const handleEdit = (id) => {
    navigate("/admin/product/create", {
      state: { products: products.filter((i) => i.id == id)[0] },
    });
  };

  return (
    <>
      <button className="btn reset" onClick={() => init()}>
        Reset
      </button>
      <div className="container mb-5 mt-3">
        <table
          id="DT_load"
          className="table table-hover table-striped table-bordered mydatatable"
          style={{ width: "100%" }}
        >
          <thead>
            <tr className="table-secondary">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Stock</th>
              <th scope="col">Date Added</th>
              <th scope="col">Owner</th>
              <th scope="col">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td title={item.description} >{item.description}</td>
                <td>{item.category}</td>
                <td>{item.stock}</td>
                <td>{item.dateAdded}</td>
                <td>{item.owner}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger btn-sm mr-5"
                  >
                    Delete
                  </button>
                  <button 
                    onClick={() => handleEdit(item.id)}
                    className="btn btn-secondary btn-sm text-white">
                      Edit
                  </button>
                </td>
              </tr>
              );
            })}

          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsTableData;
