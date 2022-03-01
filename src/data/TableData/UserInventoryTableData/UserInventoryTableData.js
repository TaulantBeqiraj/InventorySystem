import React, { useState } from "react";
import { UserInventoryRawData } from "./UserInventoryRawData";

const UserInventoryTableData = () => {

  const [inventory, setInventory] = useState(UserInventoryRawData)

  return (
    <>
      <div className="container mb-5 mt-3" >
        <table
          id="DT_load"
          className="table table-hover table-striped table-bordered mydatatable"
          style={{width: "100%"}}
        >
          <thead>
            <tr className="table-secondary">
              <th scope="col">Id</th>
              <th scope="col">Created Date</th>
              <th scope="col">Product Name</th>
              <th scope="col">Issuer Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Status</th>
              <th scope="col">Notes</th>
              <th style={{width: '205px'}}></th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => {
              return (
                <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.creDate}</td>
                <td>{item.prodName}</td>
                <td>{item.issName}</td>
                <td>{item.quantity}</td>
                <td style={{color: 'orange'}}>{item.status}</td>
                <td><a href="#">{item.notes}</a></td>
                <td>
                <button 
                    onClick={() => alert("We are really happy that you recieved your product!")}
                    className="btn btn-success btn-sm text-white">
                      Recieved
                  </button>
                  <button
                    onClick={() => alert("We're sad you rejected this product, can you please tell us the reason?!")}
                    className="btn btn-danger btn-sm mr-5"
                  >
                    Reject
                  </button>
                </td>
              </tr>
              );
            })}
            <tr>
              <th scope="row">1</th>
              <td>22/02/2022</td>
              <td>Microsoft Surface</td>
              <td>Mark Otto</td>
              <td>5</td>
              <td style={{color: 'orange'}}>Pending</td>
              <td><a href="#">View Notes</a></td>
              <td>
              <button 
                  onClick={() => alert("We are really happy that you recieved your product!")}
                  className="btn btn-success btn-sm text-white">
                    Recieved
                </button>
                <button
                  onClick={() => alert("We're sad you rejected this product, can you please tell us the reason?!")}
                  className="btn btn-danger btn-sm mr-5"
                >
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserInventoryTableData;
