import React, { useState } from "react";
import { InventoryRawData } from "./InventoryRawData";
import { useNavigate } from "react-router-dom";

const AdminInventoryTableData = () => {

  const navigate = useNavigate();

  const inventoryData = JSON.parse(localStorage.getItem("inventory") || "[]");

  const [inventory, setInventory] = useState(inventoryData);

  const init = () => {
    localStorage.setItem("inventory", JSON.stringify(InventoryRawData));
    setInventory(JSON.parse(localStorage.getItem("inventory") || "[]"));
  };

  const handleDelete = (id) => {
    let newItems = inventory.filter((item) => item.id !== id);

    localStorage.setItem("inventory", JSON.stringify(newItems));
    setInventory(newItems);
  };

  const handleEdit = (id) => {
    navigate("/admin/inventory/create", {
      state: { inventory: inventory.filter((i) => i.id == id)[0] },
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
          className="table table-hover table-striped table-bordered"
          style={{ width: "100%" }}
        >
          <thead>
            <tr className="table-secondary">
              <th scope="col">Id</th>
              <th scope="col">Created Date</th>
              <th scope="col">Product Name</th>
              <th scope="col">Reciever Name</th>
              <th scope="col">Issuer Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Status</th>
              <th scope="col">Notes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.creDate}</td>
                  <td>{item.prodName}</td>
                  <td>{item.recName}</td>
                  <td>{item.issName}</td>
                  <td>{item.quantity}</td>
                  <td style={{ color: "orange" }}>{item.status}</td>
                  <td>
                    <a href="#">{item.notes}</a>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm mr-5"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="btn btn-secondary btn-sm text-white"
                    >
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

export default AdminInventoryTableData;
