import React from "react";
import { Navbar } from "./index";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-screen-xl mx-auto">
        <Outlet />
      </main>
      <Footer />  
    </div>
  );
};

export default Layout;
