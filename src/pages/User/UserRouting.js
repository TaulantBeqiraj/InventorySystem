import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Inventory from "./Inventory";
import Profile from "./Profile";
import Request from "./Request";
import RequestCRUD from "./RequestCRUD";



const UserRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/profile" element={<Profile  />} />
      <Route path="/requests" element={<Request  />} />
      <Route path="/requests/create" element={<RequestCRUD  />} />
    </Routes>
  );
};

export default UserRouting;