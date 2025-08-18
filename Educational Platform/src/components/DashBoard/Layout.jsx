import React from "react";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="dashboard">
      <Topbar />
      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
