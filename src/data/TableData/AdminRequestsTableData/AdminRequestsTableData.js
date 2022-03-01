import React, { useState } from "react";
import { RequestsRawData } from "./RequestsRawData";
import { useNavigate } from "react-router-dom";

const AdminInventoryTableData = () => {

  const navigate = useNavigate();
    const RequestData = JSON.parse(localStorage.getItem("requests") || "[]");
  
    const [requests, setRequests] = useState(RequestData);
  
    const init = () => {
      localStorage.setItem("requests", JSON.stringify(RequestsRawData));
      setRequests(JSON.parse(localStorage.getItem("requests") || "[]"));
    };
  
    const handleDelete = (id) => {
      let newItems = requests.filter((item) => item.id !== id);
  
      localStorage.setItem("requests", JSON.stringify(newItems));
      setRequests(newItems);
    };

    const handleEdit = (id) => {
      navigate("/admin/requests/manage", {
        state: { requests: requests.filter((i) => i.id == id)[0] },
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
              <th scope="col">Request</th>
              <th scope="col">Status</th>
              <th scope="col">Issuer</th>
              <th style={{ width: "205px" }}></th>
            </tr>
          </thead>
          <tbody>
            {requests.map((item, index) => {
              return (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td title={item.request}>{item.request}</td>
                <td style={{ color: "orange" }}>{item.status}</td>
                <td>{item.issuer}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger btn-sm mr-5"
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
              </tr>);
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminInventoryTableData;
