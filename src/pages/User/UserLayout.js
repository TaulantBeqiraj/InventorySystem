import React from "react";
import { userSidebarItems } from "../../data/SidebarItems";
import UserRouting from "./UserRouting";
import Layout from "../../components/shared/Layout/Layout";


export const UserLayout = () => {
  return (
    <Layout navItems={userSidebarItems} redirectTo={'/user/profile'}>
      <UserRouting />
    </Layout>
  );
};

