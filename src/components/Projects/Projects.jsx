import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  motion,
  // useScroll,
  // useTransform,
} from "framer-motion";

import IconSocial from "components/IconSocial/IconSocial";

import * as styles from "./Projects.module.css";

gsap.registerPlugin(ScrollTrigger);

function Projects({
  id,
  name,
  imgSrcApp,
  linkGit,
  linkDemo,
  subTitle,
  dataDescription,
  challenge,
  difficulty,
  source,
  isChallege = false,
  idx,
}) {
  const refMoveElement = useRef();
  // const refParentHeight = useRef();
  // const refImage = useRef();
  const refAnimateLink = useRef(null);
  // const [isInView, setIsInView] = useState();

  const refDiv = useRef([]);
  const refPath = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: refDiv,
  // });
  // const { scrollYProgress } = useScroll();
  const shape = idx + 1;

  useEffect(() => {
    console.log("idx", idx);
    // console.log(refPath.current);
    // const pathTo = refPath.current.dataset.pathTo;
    // console.log(pathTo);
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: refPath.current,
    //       start: "top 50%",
    //       end: "20% 10%",
    //       scrub: true,
    //       markers: true,
    //     },
    //   })
    //   .to(refPath.current, {
    //     ease: "none",
    //     attr: { d: pathTo },
    //   });
  }, []);

  const handleMouseMove = (e) => {
    // console.log(refAnimateLink.current);
    // const coords = refAnimateLink.current.getBoundingClientRect();
    // const xCoord =
    //   e.clientX - (coords.left + Math.floor(coords.width / 2 - 100));
    // const yCoord =
    //   e.clientY - (coords.top + Math.floor(coords.height / 2 - 100));
    // console.log(refAnimateLink.current);
    // console.log(xCoord);
    // if (refAnimateLink.current) {
    //   refAnimateLink.current.style.setProperty("--x", `${xCoord}px`);
    //   refAnimateLink.current.style.setProperty("--y", `${yCoord}px`);
    // }
  };

  const handleMouseLeave = (e) => {
    // refAnimateLink.current.style.setProperty("--x", `${0}px`);
    // refAnimateLink.current.style.setProperty("--y", `${0}px`);
  };

  const output = [
    "M 0 0 L 530 1 C 531 203 536 390 541 549 L 0 549 C 1 255 0 253 0 0 Z",
    "M 0 0 L 530 1 C 365 259 673 449 531 542 L 0 542 C 78 307 75 184 0 0 Z",
  ];

  return (
    <>
      <div
        ref={(node, i) => refDiv.current.push(node)}
        id={id}
        className={styles.contentPersonalProject}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={refAnimateLink} className={styles.contentPersonalProjectFlex}>
          <div
            className={styles.contentPersonalProjectImg}
            ref={refMoveElement}
          >
            <motion.div className={styles.contentSides} data-test="data-test">
              <svg
                className={styles.imageClip}
                width="100%"
                height="100%"
                viewBox="0 0 560 600"
                preserveAspectRatio="none"
                x="0"
                y="0"
              >
                <defs>
                  {/* <clipPath id="shape1"> */}
                  <clipPath id={`shape${shape}`}>
                    <motion.path
                      data-ani="data-ani"
                      ref={refPath}
                      className="path-anim"
                      d="M 0 0 L 530 1 C 531 203 536 390 541 549 L 0 549 C 1 255 0 253 0 0 Z"
                      data-path-to="M 0 0 L 530 1 C 365 259 673 449 531 542 L 0 542 C 78 307 75 184 0 0 Z"
                    />
                  </clipPath>
                </defs>
                <image
                  // clipPath="url(#shape1)"
                  clipPath={`url(#shape${shape})`}
                  xlinkHref={imgSrcApp}
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                />
              </svg>
            </motion.div>
            {/* <IconSocial
              urlGithub={linkGit}
              urlLive={linkDemo}
              fontSizeIcon="24px"
            /> */}
          </div>

          <div className={styles.contentTitleProject}>
            <h3>{name}</h3>
            <h6>{subTitle}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
