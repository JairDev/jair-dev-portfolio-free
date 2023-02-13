import React, { useRef } from "react";
import { useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

// import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Home from "../src/pages/Home";
import Layout from "../src/pages/Layout/Layout";
import MoreProjects from "pages/MoreProjects/MoreProjects";
import MoreChallenges from "pages/MoreChallenges/MoreChallenges";

import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import useLocoScroll from "hooks/useLocoScroll";

// gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  const ref = useRef(null);
  // useLocoScroll(true);

  const options = {
    smooth: true,
    multiplier: 3,
    smartphone: {
      smooth: true,
    },
  };

  useEffect(() => {
    // LocomotiveScroll.destroy();
    // ScrollTrigger.removeEventListener("refresh", lsUpdate);
    // const locoScroll = new LocomotiveScroll({
    //   el: document.querySelector(".App"),
    //   smooth: true,
    //   smoothMobile: true,
    // });
    // ScrollTrigger.scrollerProxy(".App", {
    // scrollTop(value) {
    //   return arguments.length
    //     ? locoScroll.scrollTo(value, 0, 0)
    //     : locoScroll.scroll.instance.scroll.y;
    // }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    // getBoundingClientRect() {
    //   return {
    //     top: 0,
    //     left: 0,
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   };
    // },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    // pinType: document.querySelector(".App").style.transform
    //   ? "transform"
    //   : "fixed",
    // });
  }, []);
  return (
    // <LocomotiveScrollProvider options={options} containerRef={ref}>
    <div ref={ref} className="App">
      <Layout>
        {/* <Routes location={location} key={location.pathname}>
          <Route path="/proyectos" element={<MoreProjects />} />
          <Route path="/desafios" element={<MoreChallenges />} />
          <Route path="/" element={<Home />} />
        </Routes> */}
        <Home />
      </Layout>
    </div>
    // </LocomotiveScrollProvider>
  );
}

export default App;
