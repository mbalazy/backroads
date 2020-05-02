import React from "react";
import Footer from "components/organisms/Footer.component";
import Navbar from "components/organisms/Navbar.component";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
