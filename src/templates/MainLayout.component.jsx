import React from "react";
import Footer from "components/organisms/Footer.component";
import Navbar from "components/organisms/Navbar.component";

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
