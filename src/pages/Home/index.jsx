import React, { useEffect, useRef } from "react";

import { Helmet } from "react-helmet";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import CircleType from "circletype";

import { gsapAnimations } from "utils/gsapAnimations/gsapAnimations";

import { personalProjects } from "../../data/info-portfolio";

// import ArrowIcon from "../../assets/arrow.svg";
// import blob from "../../assets/blob.svg";
// import blobBlur from "../../assets/blob-blur2.png";
import coll from "assets/coll.png";
import lines from "assets/lines.png";

import Button from "components/Button/Button";
import Projects from "components/Projects/Projects";

import styles from "./Home.module.css";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Home() {
  const objRef = {
    word: useRef(null),
    heroImage: useRef(null),
    rotateText: useRef(),
  };

  const refCircleText = useRef();

  const projects = personalProjects.slice(0, 4);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    window.scrollTo(0, 0);

    gsapAnimations(objRef);

    gsap.utils.toArray("[data-link]").forEach((link) => {
      const scroll = link.getAttribute("href");
      link.addEventListener("click", (e) => {
        console.log(scroll);
        gsap.to(window, { duration: 1, scrollTo: scroll });
        e.preventDefault();
      });
    });

    const circleType = new CircleType(refCircleText.current);
    circleType.radius(40);
  }, [objRef]);

  useEffect(() => {
    if (isMounted) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#circle-blur",
            start: "top 65% ",
            end: "100% -10%",
            scrub: true,
            // markers: true,
          },
        })
        .to("#circle-blur", {
          ease: "sine.out",
          duration: 0.7,
          opacity: 1,
          y: 280,
        });
    }
  }, [isMounted]);

  return (
    <>
      <Helmet>
        <title>Alfredo Moscoso | Portfolio</title>
      </Helmet>
      <section
        className={`${styles.wrapperPadding} ${styles.appContentHero}`}
        id={"wrapper-padding"}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.wrapperContentHero}>
            <div className={styles.appLeftContentHero}>
              <div className={styles.appLeftContentHeroRole}>
                {/* <h1 className={styles.role}>
                  Potencia tu marca en el mundo digital.
                </h1>
                <h2 className={styles.subTitleRole}>
                  Tu negocio también debe brillar de forma online.Destaca sobre
                  la competencia mostrando lo único que eres.
                </h2> */}
                <div className={styles.wordHeroColor}>
                  <h1 className={styles.role}>
                    {/* <span className={styles.wordHeroColor}> */}
                    {/* </span> */}
                    Destaca sobre la competencia.
                  </h1>
                  {/* <img src={lines} alt="" />s */}
                </div>

                <h2 className={styles.subTitleRole}>
                  Potencia tu marca en el mundo digital mostrando lo único que
                  eres.
                </h2>
                <div
                  ref={objRef.triggerButton}
                  id="trigger-button"
                  className={styles.contentButtonContact}
                >
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
                    • scroll • scroll • scroll • scroll • scroll
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
              </div>
              <span
                ref={objRef.word}
                className={`${styles.wordsHero} ${styles.bottomLeft}`}
                data-wordweb="wordweb"
              >
                {/* Web */}
              </span>
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
              Trabajos seleccionados
            </h2>
          </div>
          <div className={styles.contentProject}>
            {projects.slice(0, 2).map((item, i) => (
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
            ))}
          </div>
        </div>
      </section>

      <section
        id="personal-work"
        className={`${styles.wrapperPadding} ${styles.serviceSection}`}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.contentCircleBlur}>
            <span
              id="circle-blur"
              data-span-ani="data-span-ani"
              className={styles.circleBlur}
            ></span>

            <span
              className={`${styles.circleBlur} ${styles.circleBlurGrey}`}
            ></span>
          </div>
          <div className={styles.wrapperAppContentIDoWork}>
            <h2 data-text="text" className={styles.spanIDoWorkName}>
              Puedo ayudarte con
            </h2>

            <div className={styles.wrapperServices}>
              <div className={styles.appContentIDoWork}>
                <div className={styles.appContentTitleIDoWork}>
                  Landing pages
                </div>
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
                  Autenticación (registro/inicio de sesión), integración con
                  bases de datos.
                </div>
              </div>
              <div className={styles.appContentIDoWork}>
                <div className={styles.appContentTitleIDoWork}>
                  Rediseño de sitios web
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
