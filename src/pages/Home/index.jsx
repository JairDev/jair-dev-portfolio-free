import React, { useEffect, useRef, useState } from "react";

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
// import cube from "assets/render.webp";
import phone from "assets/mobile-phone-img.svg";
// import tablet from "assets/mobile-tablet-img.svg";
// import lines from "assets/lines.png";

import Button from "components/Button/Button";
import Projects from "components/Projects/Projects";

import styles from "./Home.module.css";

import Splitting from "splitting";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
Splitting();

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

  const refText = useRef(null);

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
    circleType.radius(80);
  }, [objRef]);

  useEffect(() => {
    if (isMounted) {
      // console.log(refText.current);
      const split = gsap.utils.toArray("[data-text]").map((node, i) => {
        const results = Splitting({ target: node.current, by: "chars" });
        // console.log(results[i]);
        return results[i];
      });
      split.forEach((chars) => {
        // console.log(chars.chars);
        chars.chars.forEach((letter) => {
          gsap.set(letter.parentNode, { perspective: 1000 });
          // gsap.fromTo(
          //   chars.chars,
          //   {
          //     "will-change": "opacity, transform",
          //     opacity: 0,
          //     rotateX: () => gsap.utils.random(-120, 120),
          //     z: () => gsap.utils.random(-200, 200),
          //   },
          //   {
          //     ease: "none",
          //     opacity: 1,
          //     rotateX: 0,
          //     z: 0,
          //     stagger: 0.02,
          //     scrollTrigger: {
          //       trigger: letter,
          //       start: "top 140%",
          //       end: "bottom 25%",
          //       scrub: true,
          //       // markers: true,
          //     },
          //   }
          // );
        });
      });

      // gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: "#circle-blur",
      //       start: "top 65% ",
      //       end: "100% -10%",
      //       scrub: true,
      //       // markers: true,
      //     },
      //   })
      //   .to("#circle-blur", {
      //     ease: "sine.out",
      //     duration: 0.7,
      //     opacity: 1,
      //     y: 280,
      //   });
    }
  }, [isMounted]);

  return (
    <>
      <Helmet>
        <title>Alfredo Moscoso | Portafolio</title>
      </Helmet>
      <section
        className={`${styles.wrapperPadding} ${styles.appContentHero}`}
        id={"wrapper-padding"}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.wrapperContentHero}>
            <div className={styles.appLeftContentHero}>
              <div className={styles.appLeftContentHeroRole}>
                <div className={styles.wordHeroColor}>
                  <h1 className={styles.role}>
                    Construye tu presencia en línea.
                  </h1>
                </div>

                <h2 className={styles.subTitleRole}>
                  Sitios web personalizados que se adaptan a tus necesidades.
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
                      Iniciar un proyecto
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
                    • scroll • scroll • scroll • scroll • scroll • scroll •
                    scroll • scroll • scroll • scroll
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.appRightContentHero}>
              <div
                ref={objRef.heroImage}
                data-heroimage="heroimage"
                className={styles.appRightContentHeroImg}
              >
                {/* <img src={cube} /> */}
              </div>
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
            <h2
              ref={refText}
              data-text="text"
              className={`${styles.spanWorkName} ${styles.titleSections}`}
              data-splitting
              data-effect17
            >
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

      {/* ----------------------services------------------ */}
      <section
        id="personal-work"
        className={`${styles.wrapperPadding} ${styles.serviceSection}`}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.contentCircleBlur}></div>
          <div className={styles.wrapperAppContentIDoWork}>
            <h2
              ref={refText}
              data-text="text"
              className={`${styles.titleSections}`}
              data-splitting
              data-effect17
            >
              Puedo ayudarte con
            </h2>

            <div className={styles.wrapperServices}>
              <div className={styles.servicesCard}>
                <h3 className={styles.appContentTitleIDoWork}>Landing pages</h3>
                <div className={styles.appContentTitleIDoWorkSubTitle}>
                  Sitio web de una página, ideal para emprendedores, pequeñas
                  empresas, presentación de productos.
                </div>
              </div>
              <div className={styles.servicesCard}>
                <h3 className={styles.appContentTitleIDoWork}>
                  Sitios web de múltiples de páginas
                </h3>
                <div className={styles.appContentTitleIDoWorkSubTitle}>
                  Autenticación (registro/inicio de sesión), integración con
                  bases de datos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="personal-work"
        className={`${styles.wrapperPadding} ${styles.benefitsSection}`}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.contentCircleBlur}></div>
          <div className={styles.wrapperAppContentIDoWork}>
            <h2
              ref={refText}
              data-text="text"
              className={`${styles.titleSections}`}
              data-splitting
              data-effect17
            >
              Que obtendrás
            </h2>
            <p className={styles.youGetDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              voluptates earum ipsum odio, aspernatur ducimus corrupti
              necessitatibus magnam eligendi eius impedit voluptatem ipsam iure!
              Deserunt laudantium molestiae enim natus ipsum.
            </p>

            <div className={styles.wrapperBenefits}>
              {/* mobile */}
              <div className={styles.wrapperMobileBenefits}>
                <p className={styles.benefitsHeader}>
                  Sitios web optimizados para dispositivos moviles
                </p>
                <div className={styles.wrapperMobileFeatureAnimation}>
                  <div className={styles.featureAnimation}>
                    <img src={phone} alt="" />
                  </div>
                </div>
              </div>
              {/* security */}
              <div className={styles.wrapperSecurityBenefits}>
                <p className={styles.benefitsHeader}>
                  La seguridad es primordial
                </p>
                <div className={styles.benefitsCard}>
                  Utilizo herramientas que proporcionan una infraestructura
                  donde tus datos estarán 100% seguros.
                </div>
              </div>
              {/* seo */}
              <div className={styles.wrapperSeoBenefits}>
                <p className={styles.benefitsHeader}>
                  Optimización básica de motores de búsqueda (SEO)
                </p>
                <div className={styles.benefitsCard}>
                  Utilizo herramientas que proporcionan una infraestructura
                  donde tus datos estarán 100% seguros.
                </div>
              </div>
              {/* maintenance */}
              <div className={styles.wrapperSupportBenefits}>
                <p className={styles.benefitsHeader}>Soporte y mantenimiento</p>
                <div className={styles.benefitsCard}>
                  Utilizo herramientas que proporcionan una infraestructura
                  donde tus datos estarán 100% seguros.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentSquare}>
          <svg
            // width="1040"
            // height="1040"
            viewBox="0 0 1040 1040"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1040"
              width="1040"
              height="1040"
              rx="80"
              transform="rotate(90 1040 0)"
              fill="#382273"
            />
          </svg>
        </div>
      </section>

      <section
        id="personal-work"
        className={`${styles.wrapperPadding} ${styles.processSection}`}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.contentCircleBlur}></div>
          <div className={styles.wrapperAppContentIDoWork}>
            <h2
              ref={refText}
              data-text="text"
              className={`${styles.processTitle} ${styles.titleSections}`}
              data-splitting
              data-effect17
            >
              Mi proceso
            </h2>

            <p className={styles.processDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              voluptates earum ipsum odio, aspernatur ducimus corrupti
            </p>

            <div className={styles.wrapperServices}>
              <div className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>Landing pages</h3>
                <div className={styles.appContentTitleIDoWorkSubTitle}>
                  Sitio web de una página, ideal para emprendedores, pequeñas
                  empresas, presentación de productos.
                </div>
              </div>
              <div className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  Sitios web de múltiples de páginas
                </h3>
                <div className={styles.appContentTitleIDoWorkSubTitle}>
                  Autenticación (registro/inicio de sesión), integración con
                  bases de datos.
                </div>
              </div>
              <div className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  Sitios web de múltiples de páginas
                </h3>
                <div className={styles.appContentTitleIDoWorkSubTitle}>
                  Autenticación (registro/inicio de sesión), integración con
                  bases de datos.
                </div>
              </div>
              <div className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  Sitios web de múltiples de páginas
                </h3>
                <div className={styles.appContentTitleIDoWorkSubTitle}>
                  Autenticación (registro/inicio de sesión), integración con
                  bases de datos.
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
