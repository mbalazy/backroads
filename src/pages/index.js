import React from "react";
import MainLayout from "../templates/MainLayout.component";
import { Link } from "gatsby";

export default () => (
  <>
    <MainLayout>
      Hello kjs world! <Link to="blog">blog</Link>
    </MainLayout>
  </>
);
