import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-[calc(100vh-130px)]">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
