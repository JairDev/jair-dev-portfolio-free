import React, { useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import "./Layout.css";
import { useEffect } from "react";

function Layout({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [numberOfNodes, setNumberOfNodes] = useState(0);
  const screenRef = useRef(null);
  const layoutRef = useRef(null);
  const loadTextRef = useRef(null);
  const squaresLoadRef = useRef([]);
  const nodeCounArray = Array(numberOfNodes).fill(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useLayoutEffect(() => {
    let elementsWidth = Math.floor(layoutRef.current.clientWidth / 60);
    let elementsHeight = Math.ceil(window.innerHeight / 60);
    setNumberOfNodes(elementsWidth * elementsHeight);
  }, []);

  useEffect(() => {
    const xPosition = {
      loadSquareA: -20,
      loadSquareB: 20,
      loadSquareC: -20,
      loadSquareD: 20,
    };
    const yPosition = {
      loadSquareA: -20,
      loadSquareB: -20,
      loadSquareC: 20,
      loadSquareD: 20,
    };

    // let gsapContext = gsap.context(() => {
    //   const tl = gsap.timeline();
    //   for (const key in yPosition) {
    //     const valueY = yPosition[key];
    //     const valueX = xPosition[key];
    //     tl.to(
    //       `.${key}`,
    //       {
    //         duration: 0.4,
    //         x: valueX,
    //         y: valueY,
    //         repeat: 7,
    //         yoyo: true,
    //       },
    //       0
    //     ).to(`.${key}`, {
    //       duration: 0.1,
    //       opacity: 0,
    //     });
    //   }
    //   tl.to(loadTextRef.current, {
    //     opacity: 0,
    //     duration: 0.1,
    //   });
    //   tl.to(squaresLoadRef.current, {
    //     autoAlpha: 0,
    //     stagger: {
    //       each: 0.004,
    //       from: "random",
    //     },
    //   })
    //     .to(screenRef.current, {
    //       duration: 0.01,
    //       autoAlpha: 0,
    //     })
    //     .to(layoutRef.current, {
    //       height: "auto",
    //     });
    // }, layoutRef);

    // return () => gsapContext.revert();
  }, [isMounted]);

  return (
    <>
      <div ref={layoutRef} className="layout ">
        {/* <div ref={screenRef} className="screen">
          <div className="contentLoad">
            <div className="load">
              <div className="loadSquareA"></div>
              <div className="loadSquareB"></div>
              <div className="loadSquareC"></div>
              <div className="loadSquareD"></div>
            </div>
            <div ref={loadTextRef} className="loadText">
              Cargando...
            </div>
          </div>
          {nodeCounArray.length > 0 &&
            nodeCounArray.map((el, i) => (
              <div
                ref={(div) => (squaresLoadRef.current[i] = div)}
                key={i}
                className="sq"
              ></div>
            ))}
        </div> */}
        <Header />
        <div id="container">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
