import React, { useEffect, useRef } from "react";

import { Link, useLocation } from "react-router-dom";

import { motion, useScroll } from "framer-motion";

import NavIcon from "../../assets/nav-bar-icon.svg";
import NavIconClose from "../../assets/nav-bar-close.svg";

import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const refObject = {
    menuStyle: useRef(null),
    iconOpenRef: useRef(null),
    iconCloseRef: useRef(null),
    parentIcon: useRef(null),
    logoRef: useRef(null),
    refContentLinks: useRef(),
    parentMove: useRef(),
    refLinkWork: useRef(),
    refSvg: useRef(),
    refPath: useRef(),
  };

  const [yVisibility, setYVisibility] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  // const clip_path_variants = {
  //   open: {
  //     d: "M -1 222 L 0 -3 L 283 -3 C 283 175 286 265 287 429 L -1 427 Z",
  //   },
  //   closed: {
  //     d: "M -1 222 L 0 -3 L 232 -2 C 279 178 279 260 242 428 L -1 427 Z",
  //   },
  // };

  const clip_path_variants = {
    open: {
      d: "M 35 24 v 248 h 137 s 0 -39 0 -124 c 0 -84 0 -124 0 -124 z",
    },
    closed: {
      d: "M 35 24 v 248 h 104 s 33 -39 33 -124 c 0 -84 -32 -124 -32 -124 z",
    },
  };

  const moveVariants = {
    open: {
      translateX: "0%",
    },
    closed: {
      translateX: "100%",
    },
  };

  useEffect(() => {
    refObject.parentIcon.current.style.opacity = "1";
    if (
      location.pathname === "/desafios" ||
      location.pathname === "/proyectos"
    ) {
      refObject.parentIcon.current.style.opacity = "0";
    }

    return scrollY.onChange((latest) => {
      setYVisibility(latest);
    });
  }, [location.pathname, refObject, scrollY]);

  useEffect(() => {
    if (isOpen) {
      refObject.iconOpenRef.current.firstChild.classList.add(styles.noOpen);
      refObject.iconCloseRef.current.firstChild.classList.add(styles.open);
    } else {
      refObject.iconOpenRef.current.firstChild.classList.remove(styles.noOpen);
      refObject.iconCloseRef.current.firstChild.classList.remove(styles.open);
    }
  }, [
    isOpen,
    refObject.iconCloseRef,
    refObject.iconOpenRef,
    refObject.menuStyle,
  ]);

  useEffect(() => {
    let pathData = refObject.refPath.current.getBBox();
    refObject.refSvg.current.setAttribute(
      "viewBox",
      `${pathData.x} ${pathData.y} ${pathData.width} ${pathData.height}`
    );
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickLinks = () => {
    if (refObject.menuStyle.current.className.includes("show")) {
      refObject.menuStyle.current.classList.remove(styles.show);
      refObject.iconOpenRef.current.firstChild.classList.remove(styles.noOpen);
      refObject.iconCloseRef.current.firstChild.classList.remove(styles.open);
    }
  };

  const handleMouseMove = (e) => {
    const coords = refObject.parentIcon.current.getBoundingClientRect();
    const xCoord = e.clientX - (coords.left + Math.floor(coords.width / 2));
    const yCoord = e.clientY - (coords.top + Math.floor(coords.height / 2));

    if (refObject.parentIcon.current) {
      refObject.parentIcon.current.style.setProperty("--x", `${xCoord}px`);
      refObject.parentIcon.current.style.setProperty("--y", `${yCoord}px`);
    }
  };

  const handleMouseLeave = () => {
    refObject.parentIcon.current.style.setProperty("--x", `${0}px`);
    refObject.parentIcon.current.style.setProperty("--y", `${0}px`);
  };

  return (
    <header id="nav-hidden" className={styles.appContentNav}>
      <span id="back-header" className={styles.spanBack}></span>
      <span id="nav-show" className={styles.spanStyleNav}></span>
      <nav className={styles.appNav}>
        <div className="app-content-nav-logo">
          <div className="app-nav-logo">
            <Link ref={refObject.logoRef} className={styles.logoName} to="/">
              Alfredo Moscoso
            </Link>
          </div>
        </div>
        <motion.div
          ref={refObject.refLinkWork}
          // animate={{ opacity: yVisibility >= 1 ? 0 : 1 }}
          className={styles.linkWorkNav}
        >
          <ul className={styles.contentNavTopLinks}>
            <li>
              <a href="/about-me" className={styles.linkTop}>
                Quien soy?
              </a>
            </li>
            <li>
              <a
                href="#personal-work"
                data-link="link"
                className={styles.linkTop}
              >
                Trabajos
              </a>
            </li>
          </ul>
        </motion.div>
        <div onClick={handleClick} className={styles.parentMenu}>
          <motion.div
            animate={{ opacity: yVisibility >= 300 ? 1 : 0 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={styles.iconNaCoord}
            transition={{
              ease: "easeInOut",
              duration: 0.4,
            }}
          >
            <div
              id="parent-icon"
              ref={refObject.parentIcon}
              className={styles.iconNav}
            >
              <svg width="60" height="60" viewBox="0 0 63 63">
                <circle className={styles.path} cx="50%" cy="50%" r="30" />
                <circle className={styles.pathLayer} cx="50%" cy="50%" r="30" />
              </svg>

              <div
                id="open-click"
                ref={refObject.iconOpenRef}
                className={styles.parentIconOpen}
              >
                <img src={NavIcon} width="32" height="32" alt="" />
              </div>
              <div
                id="close-click"
                ref={refObject.iconCloseRef}
                className={styles.parentIconClose}
              >
                <img src={NavIconClose} width="32" height="32" alt="" />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          id="content-nav-links"
          ref={refObject.menuStyle}
          className={styles.appContentNavLinks}
          initial={{ translateX: "100%" }}
          variants={moveVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{
            ease: "easeIn",
            duration: 0.5,
          }}
        >
          <ul
            ref={refObject.refContentLinks}
            onClick={handleClickLinks}
            id="ul-content-li"
            className={styles.ulContentLinks}
          >
            <li className={styles.liLink}>
              <a
                href="#personal-work"
                data-link="link"
                className={styles.itemLink}
              >
                Proyectos Personales
              </a>
            </li>

            <li className={styles.liLink}>
              <a
                href="#challenges"
                data-link="link"
                className={styles.itemLink}
              >
                Desafíos Frontend
              </a>
            </li>
            <li className={styles.liLink}>
              <a href="#about-me" data-link="link" className={styles.itemLink}>
                Conóceme
              </a>
            </li>

            <li className={styles.liLink}>
              <a href="#contact" data-link="link" className={styles.itemLink}>
                Contacto
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          className={styles.contentSvg}
          initial={{ translateX: "100%" }}
          animate={isOpen ? { translateX: "0%" } : { translateX: "100%" }}
          transition={{
            ease: "easeIn",
            duration: 0.5,
          }}
        >
          <motion.svg
            ref={refObject.refSvg}
            className={styles.shape}
            // viewBox="0 0 172.2084 248.56923"
            viewBox=""
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            initial={{ translateX: "100%", rotate: "180deg" }}
            variants={moveVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{
              ease: "easeIn",
              duration: 0.5,
            }}
          >
            <motion.path
              ref={refObject.refPath}
              d={
                "M 35 24 v 248 h 104 s 33 -39 33 -124 c 0 -84 -32 -124 -32 -124 z"
              }
              fill="#7c4dff"
              variants={clip_path_variants}
              animate={isOpen ? "open" : " closed"}
              transition={{
                ease: "easeIn",
                duration: 0.5,
              }}
            />
          </motion.svg>
        </motion.div>
      </nav>
    </header>
  );
}

export default Header;
