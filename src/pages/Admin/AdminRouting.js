import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Inventory from "./Inventory";
import InventoryCRUD from "./InventoryCRUD";
import Product from "./Product";
import ProductCRUD from "./ProductCRUD";
import Profile from "./Profile";
import Users from "./Users";
import UserCRUD from "./UserCRUD";
import Requests from "./Requests";
import RequestPage from "./RequestPage";

const AdminRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/inventory/create" element={<InventoryCRUD />} />
      <Route path="/inventory/create/:id" element={<InventoryCRUD />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/create" element={<ProductCRUD />} />
      <Route path="/product/create/:id" element={<ProductCRUD />} />
      <Route path="/user" element={<Users />} />
      <Route path="/user/create" element={<UserCRUD />} />
      <Route path="/user/create/:id" element={<UserCRUD />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/requests/manage" element={<RequestPage />} />
    </Routes>
  );
};

export default AdminRouting;
