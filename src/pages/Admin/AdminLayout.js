import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import AdminRouting from "./AdminRouting";
import { adminSidebarItems } from "../../data/SidebarItems";

const AdminLayout = () => {
  return (
    <Layout navItems={adminSidebarItems} redirectTo={"/admin/profile"}>
      <AdminRouting />
    </Layout>
  );
};


export default AdminLayout;