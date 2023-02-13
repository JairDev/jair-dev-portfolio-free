import React from "react";

import { Icon } from "@iconify/react";
import linkOut from "@iconify/icons-akar-icons/link-out";
import githubFill from "@iconify/icons-akar-icons/github-fill";

import { motion } from "framer-motion";

import styles from "./IconSocial.module.css";
import { useRef } from "react";

function IconSocial({ urlGithub, urlLive, fontSizeIcon }) {
  const refAnimateLink = useRef(null);
  const handleMouseMove = (e) => {
    console.log(refAnimateLink.current);
    const coords = refAnimateLink.current.getBoundingClientRect();
    const xCoord = e.clientX - (coords.left + Math.floor(coords.width / 2));
    const yCoord = e.clientY - (coords.top + Math.floor(coords.height / 2));
    console.log(xCoord);
    if (refAnimateLink.current) {
      refAnimateLink.current.style.setProperty("--x", `${xCoord}px`);
      refAnimateLink.current.style.setProperty("--y", `${yCoord}px`);
    }
  };

  const handleMouseLeave = (e) => {
    refAnimateLink.current.style.setProperty("--x", `${0}px`);
    refAnimateLink.current.style.setProperty("--y", `${0}px`);
  };
  return (
    <div
      className={`${styles.personalProjectsExternalLink} translate-icon`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={refAnimateLink} className={styles.contentIconExLinkProjects}>
        <a href={urlLive} target="_blank" rel="noopener noreferrer">
          <Icon
            icon={linkOut}
            style={{ fontSize: `${fontSizeIcon}`, color: "#ffffff" }}
          />
        </a>
      </div>
    </div>
  );
}

export default IconSocial;
