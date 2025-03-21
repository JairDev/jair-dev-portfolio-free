import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from "react-router-dom";

import * as styles from "./Projects.module.css";
import { randomIndex } from "utils/randomIndex";

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
  const timeline = gsap.timeline();

  useEffect(() => {}, []);
  const handleMouseEnter = (e) => {
    // console.log(randomPosition);
    const isNode = e.target.childNodes;
    if (isNode.length === 1) {
      const width = e.target.getBoundingClientRect().width / 8;
      const height = e.target.getBoundingClientRect().height / 8;
      for (let i = 0; i < 8 * 8; i++) {
        const div = document.createElement("div");
        div.classList = "square-ani";
        div.style = `width: ${width}px; height: ${height}px; background: #db40ff; opacity: 0;`;
        e.target.appendChild(div);
      }
    }
    const randomPosition = randomIndex(isNode);
    for (let i = 0; i < randomPosition.length; i++) {
      timeline.to(isNode[randomPosition[i]], {
        opacity: 0.9,
        duration: 0.006,
      });
    }
  };
  const handleMouseLeave = (e) => {
    const element = e.target.childNodes;
    const randomPosition = randomIndex(element);
    for (let i = 0; i < randomPosition.length; i++) {
      timeline.to(element[randomPosition[i]], {
        opacity: 0,
        duration: 0.006,
      });
    }
  };

  return (
    <>
      <Link
        to={`projects/${id}`}
        state={name}
        className={styles.wrapperProjectLink}
      >
        <div id={id} className={`${styles.contentPersonalProject}`}>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${styles.hiddenLayeProject} target-project`}
          >
            <div data-view-project className={styles.viewProject}>
              Ver proyecto
            </div>
          </div>
          {/* <span
            ref={viewProjectRef}
            data-view-project
            className={styles.contentPersonalProjectView}
          ></span> */}
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
            {/* <div className={styles.contentLinkProject}>
              <div className={styles.contentExternalLinkArrow}>Ver más</div>
            </div> */}
          </div>
        </div>
      </Link>
    </>
  );
}

export default Projects;
