import React, { useEffect, useRef, useState } from "react";

import { ReactLenis } from "@studio-freight/react-lenis";

import Home from "../src/pages/Home";
import Layout from "../src/pages/Layout/Layout";

import "./App.css";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [elN, setElN] = useState(0);
  const screenRef = useRef(null);
  // const arr = Array(elN).fill("a");

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      let elementsWidth = Math.floor(ref.current.clientWidth / 80);
      let elementsHeight = Math.round(window.innerHeight / 80);
      // console.log(screenRef.current);
      // console.log(elNumbers);
      // console.log(window.innerHeight / 80);
      // console.log(12 * 8);
      // console.log(elementsWidth);
      // console.log(elementsHeight);
      // console.log(elementsWidth * elementsHeight);
      // setElN(elementsWidth * elementsHeight);
    }
  }, [isMounted]);
  useEffect(() => {
    if (isMounted) {
      // console.log(arr);
      // screenRef.current.style = "background: #7c4dff;";
    }
  }, [isMounted]);

  const options = {
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={{ ...options }}>
      {/* <div
        // key={i}
        ref={screenRef}
        className={`screen ${isMounted ? "active" : "noActive"}`}
      >
        {arr.length > 0 && arr.map((el, i) => <div key={i}></div>)}
      </div> */}
      <Layout isMounted={isMounted}>
        <div ref={ref} className={`App ${isMounted ? "active" : "noActive"}`}>
          <Home />
        </div>
      </Layout>
    </ReactLenis>
  );
}

export default App;
