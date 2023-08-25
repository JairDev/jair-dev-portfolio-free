import React from "react";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import "./Layout.css";

function Layout({ children }) {
  return (
    <>
      <div className="layout ">
        <Header />
        <div id="container">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
