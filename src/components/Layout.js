import React from "react";
import { Navbar } from "./index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-screen-xl mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
