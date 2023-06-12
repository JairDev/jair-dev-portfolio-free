import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ArrowIcon from "../../assets/arrow.svg";

import * as styles from "./Projects.module.css";

gsap.registerPlugin(ScrollTrigger);

function Projects({ id, name, imgSrcApp, linkDemo, subTitle, imageAlt }) {
  return (
    <>
      <a href="https://twitter.com/" className={styles.wrapperProjectLink}>
        <div id={id} className={styles.contentPersonalProject}>
          <div className={styles.contentPersonalProjectImg}>
            <img width="640" height="360" src={imgSrcApp} alt={imageAlt} />
          </div>

          <div className={styles.contentInfoProject}>
            <div className={styles.contentTitleProject}>
              <h3>{name}</h3>
              <h6>{subTitle}</h6>
            </div>
            <div className={styles.contentLinkProject}>
              <div className={styles.contentExternalLinkArrow}>
                <img
                  className={styles.externalLinkArrow}
                  src={ArrowIcon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default Projects;
