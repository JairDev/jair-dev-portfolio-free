import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";

import Splitting from "splitting";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
Splitting();

export default function useAnimateLetterHover() {
  const [isHover, setIsHover] = useState(false);
  const [target, setTarget] = useState(null);
  const tl = useRef(gsap.timeline({ paused: true }));
  const r = useRef(null);

  useEffect(() => {
    // if (isHover) {
    const letter = Splitting({
      target: target,
      by: "chars",
    });
    // console.log(target);
    // letter.forEach((chars) => {
    //   chars.chars.forEach((l) => {
    //     // console.log(l);
    //     const randomPosition = () => gsap.utils.random(-12, 12);
    //     tl.current.to(l, {
    //       translateX: randomPosition(),
    //       translateY: randomPosition(),
    //       duration: 0.15,
    //     });
    //     tl.current.to(l, {
    //       translateX: 0,
    //       translateY: 0,
    //       duration: 0.15,
    //     });
    //   });
    // });
    // letter.forEach((chars) => {
    //   chars.chars.forEach((l) => {
    //     const randomPosition = () => gsap.utils.random(-12, 12);
    //     tl.current
    //       .to(l, {
    //         translateX: randomPosition(),
    //         translateY: randomPosition(),
    //         duration: 0.15,
    //       })
    //       .to(l, {
    //         translateX: 0,
    //         translateY: 0,
    //         duration: 0.15,
    //       });
    //   });
    // });
    // }
    // console.log(target);
  }, [isHover, target]);

  const mouseHover = (e) => {
    tl.current.clear();

    setIsHover(true);
    const target = e.target.closest("[data-ani]");
    const targetAni = e.target.closest("[data-letter-hover]");
    // if (target) {
    //   // console.log(tl.current.play(0));
    //   setTarget(target.firstChild);
    //   tl.current.play(0);
    // }
    // console.log(target.firstChild);
    // console.log(target);
  };

  const mouseLeave = (e) => {
    // setIsHover(false);
    // setTarget(null);
    // tl.current.clear();
  };
  return [mouseHover, mouseLeave, r];
}
