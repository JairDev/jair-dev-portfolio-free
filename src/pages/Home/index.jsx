import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import LocomotiveScroll from "locomotive-scroll";

import { gsapAnimations } from "utils/gsapAnimations/gsapAnimations";

import CircleType from "circletype";

import Lenis from "@studio-freight/lenis";

// import { Icon } from "@iconify/react";
// import Projects from ".../../../src/components/Projects/Projects";
import Button from "components/Button/Button";
// import IconSocial from "components/IconSocial/IconSocial";

import phone3 from "../../assets/hero-phone5.webp";
// import phoneChallenge from "../../assets/aerolab-screen.webp";
// import ArrowIcon from "../../assets/arrow.svg";
import blob from "../../assets/blob.svg";
import blobBlur from "../../assets/blob-blur.png";

import { personalProjects } from "../../data/info-portfolio";

import styles from "./Home.module.css";

import { Helmet } from "react-helmet";
import Projects from "components/Projects/Projects";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Home() {
  const objRef = {
    word: useRef(null),
    heroImage: useRef(null),
    rotateText: useRef(),
  };

  const refDivAnimate = useRef([]);
  const refAni = useRef(null);
  const refPath = useRef(null);

  const refCircleText = useRef();

  const projects = personalProjects.slice(0, 4);

  useEffect(() => {
    // console.log("array", refDivAnimate);
    window.scrollTo(0, 0);
    if (window.innerWidth > 860) {
      gsap.timeline({
        scrollTrigger: {
          trigger: ["[data-phone]"],
          pin: true,
          start: "center 30%",
          end: "top -=250",
          scrub: true,
          // markers: true,
        },
      });
    }
    gsapAnimations(objRef);

    gsap.utils.toArray("[data-link]").forEach((link) => {
      const scroll = link.getAttribute("href");
      link.addEventListener("click", (e) => {
        gsap.to(window, { duration: 0.3, scrollTo: scroll });
        e.preventDefault();
      });
    });

    const circleType = new CircleType(refCircleText.current);
    circleType.radius(40);
  }, [objRef]);

  useEffect(() => {
    // console.log(refAni);
    const svgNode = gsap.utils.toArray("[data-ani]");

    svgNode.forEach((svg) => {
      // const svgEl = svg.closest("svg");
      // console.log("svg", svg);
      const pathTo = svg.dataset.pathTo;
      // console.log(pathTo);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: svg,
            start: "20% 70% ",
            end: "100% -30%",
            scrub: true,
            // markers: true,
          },
        })
        .to(svg, {
          ease: "sine.out",
          attr: { d: pathTo },
          // x: 50,
          duration: 2,
        });
    });
  }, []);

  useEffect(() => {
    // const el = refPath.current;
    // const pathData = el.getBBox();
    // const pathTo = el.dataset.pathTo;
    // console.log(pathTo);
    // el.setAttribute(
    //   "viewBox",
    //   `${pathData.x} ${pathData.y} ${pathData.width} ${pathData.height}`
    // );
    // console.log(pathData);
    // const svgNode = gsap.utils.toArray("[data-ani]");
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "[data-span-ani]",
          start: "top 65% ",
          end: "100% top",
          scrub: true,
          // markers: true,
        },
      })
      .to("[data-span-ani]", {
        ease: "sine.out",
        // attr: { d: pathTo },
        duration: 0.7,
        yPercent: 100,
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Alfredo Moscoso | Portfolio</title>
      </Helmet>
      <section
        className={`${styles.wrapperPadding} ${styles.appContentHero}`}
        id={"wrapper-padding"}
      >
        <span className={styles.backgroundSectionLeft}>
          {/* <img src={blob} alt="" /> */}
          <img src={blobBlur} alt="" />
        </span>
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.wrapperContentHero}>
            <div className={styles.appLeftContentHero}>
              <div className={styles.appLeftContentHeroRole}>
                <h1 className={styles.role}>
                  Llevando tu negocio al siguiente nivel.
                </h1>
                <h2 className={styles.subTitleRole}>
                  Construyo páginas web, eficientes, interactivas, que brindan
                  una buena experiencia de usuario.
                </h2>
                <div
                  ref={objRef.triggerButton}
                  id="trigger-button"
                  className={styles.contentButtonContact}
                >
                  {/* <a
                    className={`${styles.link} ${styles.heroViewWork}`}
                    href="#contact"
                    data-link="link"
                  >
                    Ver mi trabajo
                  </a> */}
                  <Button classButton="hero">
                    <a
                      className={`${styles.link} ${styles.hero}`}
                      href="#contact"
                      data-link="link"
                    >
                      Contáctame
                    </a>
                  </Button>
                </div>
              </div>

              <div className={styles.appContentScrollArrow}>
                <div
                  ref={objRef.rotateText}
                  className={styles.contentCircleText}
                  data-rotate-text="rotate-text"
                >
                  <p ref={refCircleText} className={styles.circleText}>
                    {/* • scroll • scroll • scroll • scroll • scroll */}
                  </p>
                </div>
                <span className={styles.scrollBack}>
                  {/* <img src={ArrowIcon} alt="arrow icon" /> */}
                </span>
              </div>
            </div>
            <div className={styles.appRightContentHero}>
              <div
                ref={objRef.heroImage}
                data-heroimage="heroimage"
                className={styles.appRightContentHeroImg}
              >
                <span className={`${styles.wordsHero} ${styles.top}`}>
                  Responsive Design
                </span>
                <span className={`${styles.wordsHero} ${styles.topRight}`}>
                  Px
                </span>
                {/* <span className={`${styles.wordsHero} ${styles.rightMiddle}`}>
                  Layout
                </span> */}
                <span className={`${styles.wordsHero} ${styles.bottomRight}`}>
                  Interaction
                </span>
                {/* <img
                  className={styles.heroImg}
                  src={phone3}
                  alt="teléfono con imagen"
                /> */}
              </div>
              <span
                ref={objRef.word}
                className={`${styles.wordsHero} ${styles.bottomLeft}`}
                data-wordweb="wordweb"
              >
                Web
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-me"
        className={`${styles.wrapperPadding} ${styles.appContentAboutMe}`}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.appContentAboutMeHeader}>
            <div className={styles.appContentAboutMeTitle}>
              <h3
                data-text="text"
                className={`${styles.text} ${styles.spanName}`}
              >
                Hola,
              </h3>
              <h4
                data-text="text"
                ref={objRef.h2Name}
                className={`${styles.text} ${styles.h2Name}`}
              >
                soy Alfredo
              </h4>
            </div>
          </div>
          <div className={styles.appContentAboutMeDescription}>
            <div className={styles.wrapperAboutMeDescription}>
              <span className={styles.lineRightAbout}></span>
              <span className={styles.lineLeftAbout}></span>
              <p
                data-text="text"
                className={`${styles.text} ${styles.pDescription}`}
              >
                Me llamo Alfredo Moscoso, soy desarrollador web con base en
                Caracas Venezuela, creo sitios web para que te diferencies de la
                competencia.
              </p>
              <p
                data-text="text"
                className={`${styles.text} ${styles.pDescription}`}
              >
                Ayudo a tu marca, negocio, a tener presencia online
                desarrollando sitios web personalizados.
              </p>

              {/* <p
                data-text="text"
                className={`${styles.text} ${styles.pDescription}`}
              >
                Saludos, espero verte pronto !
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <section
        id="personal-work"
        className={`${styles.wrapperPadding} ${styles.projectsSection}`}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.appContentPersonalProjectsHeader}>
            <h2 data-text="text" className={styles.spanWorkName}>
              Trabajos
            </h2>
          </div>
          <div className={styles.contentProject}>
            {projects.slice(0, 2).map((item, i) => (
              // <div
              // ref={(node) => (refDivAnimate.current[i] = node)}
              // >
              <Projects
                key={item.name}
                id={item.id}
                name={item.name}
                imgSrcApp={item.imgSrcApp}
                linkGit={item.linkGit}
                linkDemo={item.linkDemo}
                dataDescription={item.dataDescription}
                subTitle={item.subTitle}
                idx={i}
              />
              // </div>
            ))}
          </div>
          {/* <div className={styles.contentMoreLink}>
            <div className={styles.contentLinesCustomLink}>
              <span className={styles.lineCustomLink}></span>
              <span className={styles.circleCustomLink}></span>
              <Link className={styles.moreLink} to="/proyectos">
                Más proyectos
              </Link>
            </div>
          </div> */}
        </div>
      </section>

      <section
        id="personal-work"
        className={`${styles.wrapperPadding} ${styles.projectsSection}`}
      >
        {/* <div className={styles.contentSvgIDoWork}>
          <svg
            className={styles.imageClip}
            viewBox="2 -1 530 252"
            preserveAspectRatio="none"
            x="0"
            y="0"
          >
            <path
              data-svg-work="data-svg-work"
              ref={refPath}
              className={styles.pathAni}
              d="M 110 0 L 532 -1 C 316 0 96 0 2 0 L 4 -1 C 4 0 4 0 3 0 Z"
              data-path-to="M 110 0 L 532 -1 C 829 436 -311 532 2 0 L 4 -1 C 4 0 4 0 3 0 Z"
              vectorEffect="non-scaling-stroke"
              fill="#7c4dff"
            />
          </svg>
        </div> */}
        <div className={styles.wrapperMaxWidth}>
          <span
            data-span-ani="data-span-ani"
            className={styles.circleBlur}
          ></span>
          <div className={styles.wrapperAppContentIDoWork}>
            <h2 data-text="text" className={styles.spanIDoWorkName}>
              Servicios
            </h2>

            <div className={styles.appContentIDoWork}>
              <div className={styles.appContentTitleIDoWork}>Landing pages</div>
              <div className={styles.appContentTitleIDoWorkSubTitle}>
                Sitio web de una página, ideal para emprendedores, pequeñas
                empresas, presentación de productos.
              </div>
            </div>
            <div className={styles.appContentIDoWork}>
              <div className={styles.appContentTitleIDoWork}>
                Sitios web de múltiples de páginas
              </div>
              <div className={styles.appContentTitleIDoWorkSubTitle}>
                Sitio web de múltiples páginas.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
