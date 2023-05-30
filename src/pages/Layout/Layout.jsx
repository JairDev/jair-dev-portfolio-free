import React from "react";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import "./Layout.css";

function Layout({ children, isMounted }) {
  return (
    <>
      <div className={`layout ${isMounted ? "active" : "noActive"}`}>
        <Header />
        <div id="container">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
