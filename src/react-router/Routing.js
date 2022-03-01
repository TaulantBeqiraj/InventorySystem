import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import AdminLayout from "../pages/Admin/AdminLayout";
import { UserLayout } from "../pages/User/UserLayout";

const Routing = () => {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/user/*" element={<UserLayout />} />
          </Routes>
        </Router>
      );
};

export default Routing;