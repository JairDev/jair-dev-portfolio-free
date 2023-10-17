import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from "react-router-dom";

import * as styles from "./Projects.module.css";

gsap.registerPlugin(ScrollTrigger);

function Projects({
  id,
  name,
  imgSrcApp,
  imgSrcAppMedium,
  imgSrcAppSmall,
  linkDemo,
  role,
  imageAlt,
}) {
  return (
    <>
      <Link
        to={`projects/${id}`}
        state={name}
        className={styles.wrapperProjectLink}
      >
        <div id={id} className={styles.contentPersonalProject}>
          <div className={styles.contentPersonalProjectImg}>
            <picture>
              <source srcSet={imgSrcApp} media="(min-width: 1200px)" />
              <source srcSet={imgSrcAppMedium} media="(min-width: 768px)" />
              <img
                src={imgSrcAppSmall}
                decoding="async"
                loading="lazy"
                alt={imageAlt}
                width="600"
                height="400"
              />
            </picture>
          </div>

          <div className={styles.contentInfoProject}>
            <div className={styles.contentTitleProject}>
              <h3>{name}</h3>
              <h4>{role}</h4>
            </div>
            <div className={styles.contentLinkProject}>
              <div className={styles.contentExternalLinkArrow}>
                {/* <img
                  className={styles.externalLinkArrow}
                  src={ArrowIcon}
                  alt=""
                /> */}
                Ver más
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Projects;
