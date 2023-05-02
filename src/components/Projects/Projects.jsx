import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  motion,
  // useScroll,
  // useTransform,
  useMotionValueEvent,
  useMotionValue,
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
  const refViewSite = useRef(null);
  const refAnimateLink = useRef(null);

  const refDiv = useRef([]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const coords = refAnimateLink.current.getBoundingClientRect();
    const xx = e.clientX - 50;
    const yy = e.clientY - 50;

    x.set(e.clientX - coords.x);
    y.set(e.clientY - coords.y);
  };

  return (
    <>
      <div
        ref={(node) => refDiv.current.push(node)}
        id={id}
        className={styles.contentPersonalProject}
      >
        {/* <motion.div className={styles.contentPersonalProjectFlex}> */}
        <div
          ref={refAnimateLink}
          className={styles.contentPersonalProjectImg}
          onMouseMove={handleMouseMove}
        >
          <motion.div
            ref={refViewSite}
            className={styles.viewSite}
            style={{
              translateX: x,
              translateY: y,
            }}
          ></motion.div>
          <img src={imgSrcApp} alt="" />
          <div className={styles.blurImg}></div>
          <motion.div
            ref={refViewSite}
            className={`${styles.viewSite} ${styles.viewSiteText}`}
            style={{
              translateX: x,
              translateY: y,
            }}
          >
            Ver sitio
          </motion.div>
        </div>

        <div className={styles.contentInfoProject}>
          <div className={styles.contentTitleProject}>
            <h3>{name}</h3>
            <h6>{subTitle}</h6>
          </div>
          <div className={styles.contentLinkProject}>
            <div>link</div>
          </div>
        </div>
        {/* </motion.div> */}
      </div>
    </>
  );
}

export default Projects;
