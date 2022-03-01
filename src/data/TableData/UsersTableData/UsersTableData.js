import React, { useState } from "react";
import { UsersRawData } from "./UsersRawData";

const UsersTableData = () => {
  const UsersData = JSON.parse(localStorage.getItem("users") || "[]");

  const [users, setUsers] = useState(UsersData);

  const init = () => {
    localStorage.setItem("users", JSON.stringify(UsersRawData));
    setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
  };


  const handleDelete = (id) => {
    let newItems = users.filter((item) => item.id !== id);

    localStorage.setItem("users", JSON.stringify(newItems));
    setUsers(newItems);
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
              <th scope="col">Userame</th>
              <th scope="col">Role</th>
              <th scope="col">Status</th>
              <th style={{width: '205px'}}></th>
            </tr>
          </thead>
          <tbody>

          {users.map((item, index) => {
            return (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.username}</td>
              <td>{item.role}</td>
              <td style={{color: 'green'}}>{item.status}</td>
              <td>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger btn-sm mr-5"
                >
                  Delete
                </button>
                <button 
                  onClick={() => alert("Are you sure you want to edit this record?")}
                  className="btn btn-secondary btn-sm text-white">
                    Edit
                </button>
              </td>
            </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTableData;
