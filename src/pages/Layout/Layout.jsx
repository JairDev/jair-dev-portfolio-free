import React from "react";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div id="container">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
