import React, { useEffect, useRef } from "react";

import { ReactLenis } from "@studio-freight/react-lenis";

import Home from "../src/pages/Home";
import Layout from "../src/pages/Layout/Layout";

import "./App.css";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const ref = useRef(null);

  const options = {
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={{ ...options }}>
      <Layout>
        <div ref={ref} className="App">
          <Home />
        </div>
      </Layout>
    </ReactLenis>
  );
}

export default App;
