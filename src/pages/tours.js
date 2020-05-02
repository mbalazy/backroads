import React from "react";
import { Link } from "gatsby";
import MainLayout from "templates/MainLayout.component";

const tours = () => {
  return (
    <MainLayout>
      hallo and welcome from tours page <Link to="/blog/">blog</Link>
    </MainLayout>
  );
};

export default tours;
