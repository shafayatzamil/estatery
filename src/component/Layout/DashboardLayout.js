import React from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import Sidebar from "../pages/dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="">
      <Sidebar></Sidebar>
      <outlet></outlet>
    </div>
  );
};

export default DashboardLayout;
