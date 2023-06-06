import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

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
  const [isLoad, setIsLoad] = useState(false);
  const [isLoadEn, setIsLoadEnd] = useState(false);

  // const [elN, setElN] = useState(0);
  const screenRef = useRef(null);
  // const arr = Array(elN).fill("a");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // let elementsWidth = Math.floor(ref.current.clientWidth / 80);
      // let elementsHeight = Math.round(window.innerHeight / 80);
      // setElN(elementsWidth * elementsHeight);
    }
  }, [isMounted]);

  const entranceAnimation = () => {
    const tl = gsap.timeline().to(".App", {
      opacity: 1,
    });
  };

  const loadFunction = () => {
    // const tl = gsap
    //   .timeline({
    //     onComplete: () => {
    //       // setIsLoad(true);
    //       setIsLoadEnd(true);
    //       if (isLoad) entranceAnimation();
    //     },
    //   })
    // const sq = gsap.utils.toArray(".sq");
    // const tl = gsap
    //   .timeline()
    //   .to(sq, {
    //     autoAlpha: 0,
    //     stagger: {
    //       each: 0.03,
    //       from: "random",
    //     },
    //   })
    //   .from(ref.current, {
    //     duration: 0.3,
    //     // autoAlpha: 0,
    //     // y: 200,
    //   });
  };

  useLayoutEffect(() => {
    if (isMounted) {
      // loadFunction();
      // screenRef.current.style = "background: #7c4dff;";
      // entranceAnimation();
      // setIsLoad(true);
      // console.log(sq);
    }
  }, [isMounted]);

  const options = {
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={{ ...options }}>
      <Layout isMounted={isMounted}>
        <div ref={ref} className={`App ${isMounted ? "active" : "noActive"}`}>
          <Home />
        </div>
      </Layout>
    </ReactLenis>
  );
}

export default App;
