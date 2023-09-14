import React, { useEffect, useRef, useState } from "react";

import { ReactLenis } from "@studio-freight/react-lenis";

import Home from "../src/pages/Home";
import Layout from "../src/pages/Layout/Layout";

import "./App.css";

function App() {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const options = {
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={{ ...options }}>
      <Layout isMounted={isMounted}>
        <div ref={ref} className="App">
          <Home />
        </div>
      </Layout>
    </ReactLenis>
  );
}

export default App;
