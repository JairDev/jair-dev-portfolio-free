import React, { useEffect, useRef, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import NavIcon from "../../assets/nav-bar-icon.svg";
import NavIconClose from "../../assets/nav-bar-close.svg";
import ArrowIcon from "../../assets/arrow.svg";

import styles from "./Header.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Splitting from "splitting";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import useAnimateLetterHover from "hooks/useAnimateLetterHover";
Splitting();

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

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
  const [isMounted, setIsMounted] = useState(false);
  const projectsLinkRef = useRef(null);
  const headerRef = useRef(null);
  const [mouseHover, mouseLeave, r] = useAnimateLetterHover();

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
    setIsMounted(true);
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const gsapContext = gsap.context(() => {
        const letter = Splitting({
          target: "[data-letter-hover]",
          by: "chars",
        });
        letter.forEach((chars) => {
          chars.chars.forEach((l) => {
            const hover = gsap.timeline({ paused: true });
            const randomPosition = () => gsap.utils.random(-12, 12);
            hover
              .to(l, {
                translateX: randomPosition(),
                translateY: randomPosition(),
                duration: 0.15,
              })
              .to(l, {
                translateX: 0,
                translateY: 0,
                duration: 0.15,
              });
            chars.el.addEventListener("mouseenter", () => hover.play(0));
          });
        });
      }, headerRef);
      return () => gsapContext.revert();
    }
  }, [isMounted]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setYVisibility(latest);
    });
  }, [location.pathname, refObject, scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isOpen && latest <= 0) {
      setIsOpen(!isOpen);
    }
  });

  useEffect(() => {
    if (isOpen) {
      refObject.iconOpenRef.current.firstChild.classList.add(styles.noOpen);
      refObject.iconCloseRef.current.firstChild.classList.add(styles.open);
    } else {
      refObject.iconOpenRef.current.firstChild.classList.remove(styles.noOpen);
      refObject.iconCloseRef.current.firstChild.classList.remove(styles.open);
    }
  }, [isOpen]);

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

  const handleMenuVisibility = () => {
    if (yVisibility >= 200 && window.innerWidth > 860) {
      return 1;
    } else if (yVisibility <= 200 && window.innerWidth > 860) {
      return 0;
    }
    return 1;
  };

  const handleLinkToClick = (e, target, duration) => {
    e.preventDefault();
    const linkTo = target.current.getAttribute("href");
    gsap.to(window, { duration: duration, scrollTo: { y: linkTo } });
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="nav-hidden"
      ref={headerRef}
      className={`${styles.appContentNav} ${styles.wrapperPadding}`}
    >
      <div className={styles.wrapperMaxWidth}>
        <span id="back-header" className={styles.spanBack}></span>
        <span id="nav-show" className={styles.spanStyleNav}></span>
        <nav className={styles.appNav}>
          <div className="app-content-nav-logo">
            <div className="app-nav-logo">
              <Link
                ref={refObject.logoRef}
                data-letter-hover
                className={styles.logoName}
                to="/"
              >
                ALFREDO MOSCOSO
              </Link>
            </div>
          </div>
          <motion.div
            ref={refObject.refLinkWork}
            className={styles.linkWorkNav}
          >
            <ul className={styles.contentNavTopLinks}>
              <li data-ani>
                <a
                  ref={projectsLinkRef}
                  onMouseEnter={mouseHover}
                  onMouseLeave={mouseLeave}
                  href="#personal-work"
                  data-letter-hover
                  className={styles.linkTop}
                  data-link-to
                  onClick={(e) => handleLinkToClick(e, projectsLinkRef, 1)}
                >
                  Trabajos
                </a>
              </li>
              <li data-ani>
                <a
                  href="/about-me"
                  data-letter-hover
                  className={styles.linkTop}
                >
                  Sobre mí
                </a>
              </li>
              <li className={styles.linkTopSocial}>
                <a
                  href="https://www.linkedin.com/in/alfredo-moscoso-desarrollador-frontend/"
                  data-letter-hover
                  className={styles.linkTop}
                >
                  Linkedin
                </a>
                <div className={styles.contentSocialArrow}>
                  <img src={ArrowIcon} alt="" />
                </div>
              </li>
              <li className={styles.linkTopSocial}>
                <a
                  href="https://t.me/jairdev"
                  data-letter-hover
                  className={styles.linkTop}
                >
                  Telegram
                </a>
                <div className={styles.contentSocialArrow}>
                  <img src={ArrowIcon} alt="" />
                </div>
              </li>
            </ul>
          </motion.div>
          <motion.div
            onClick={handleClick}
            className={styles.parentMenu}
            animate={{
              opacity: handleMenuVisibility(),
            }}
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={styles.iconNavCoord}
              transition={{
                ease: "easeIn",
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
                  <circle
                    className={styles.pathLayer}
                    cx="50%"
                    cy="50%"
                    r="30"
                  />
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
          </motion.div>
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
              id="ul-content-li"
              className={styles.ulContentLinks}
            >
              <li className={styles.liLink}>
                <a
                  href="#personal-work"
                  data-link="link"
                  data-letter-hover
                  className={styles.itemLink}
                  onClick={(e) => handleLinkToClick(e, projectsLinkRef, 1)}
                >
                  Trabajos
                </a>
              </li>

              <li className={styles.liLink}>
                <a
                  href="/about-me"
                  data-link="link"
                  data-letter-hover
                  className={styles.itemLink}
                >
                  Sobre mí
                </a>
              </li>
              <li className={styles.liLink}>
                <a
                  href="#about-me"
                  data-link="link"
                  data-letter-hover
                  className={styles.itemLink}
                >
                  Iniciar un proyecto
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
      </div>
    </header>
  );
}

export default Header;
