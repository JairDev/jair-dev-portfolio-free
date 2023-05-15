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

  const pinBenefits = useRef(null);

  const pinProcess = useRef(null);

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
      const split = gsap.utils.toArray("[data-text]").map((node, i) => {
        const results = Splitting({ target: node.current, by: "chars" });
        return results[i];
      });

      split.forEach((letters) => {
        letters.chars.forEach((l) => {
          const randomPosition = () => gsap.utils.random(-200, 200);
          gsap.set(l.parentNode, { perspective: 1000 });
          gsap.set(l, {
            opacity: 0,
            translateY: randomPosition(),
            translateX: randomPosition(),
            z: randomPosition(),
          });
          ScrollTrigger.batch(l, {
            onEnter: (batch) =>
              gsap.to(batch, {
                // ease: "power1.out",
                opacity: 1,
                translateY: 0,
                translateX: 0,
                z: 0,
              }),
            onLeaveBack: (batch) =>
              gsap.to(batch, {
                // ease: "power1.out",
                opacity: 0,
                translateY: randomPosition(),
                translateX: randomPosition(),
                z: randomPosition(),
              }),
            start: "top 95%",
            // markers: true,
          });
        });
      });

      // split.forEach((chars) => {
      //   // console.log(chars.chars);
      //   chars.chars.forEach((letter) => {
      //     gsap.set(letter.parentNode, { perspective: 1000 });
      //     gsap.fromTo(
      //       chars.chars,
      //       {
      //         "will-change": "opacity, transform",
      //         // opacity: 0,
      //         // rotateX: () => gsap.utils.random(-120, 120),
      //         // rotateX: () => 120,
      //         // translateX: gsap.utils.random(-100, 100),
      //         // translateY: gsap.utils.random(-100, 100),
      //         z: () => gsap.utils.random(-200, 200),
      //       },
      //       {
      //         // ease: "none",
      //         // opacity: 1,
      //         // rotateX: 0,
      //         // translateX: 0,
      //         // translateY: 0,
      //         // translate: (0, 0),
      //         z: 0,
      //         // stagger: { each: 0.02, from: "random" },
      //         scrollTrigger: {
      //           trigger: letter,
      //           start: "top 80%",
      //           end: "bottom 40%",
      //           scrub: true,
      //           markers: true,
      //         },
      //       }
      //     );
      //   });
      // });

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

  useEffect(() => {
    if (isMounted) {
      const pin = gsap.timeline({
        scrollTrigger: {
          trigger: "[data-pin]",
          start: "top 10%",
          end: "bottom 45%",
          pin: true,
          scrub: true,
          // markers: true,
        },
      });
      pin.from("[data-wrap-benefits]", {
        // opacity: 0,
        y: 500,
      });
      // const be = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "[data-wrap-benefits]",
      //     start: "top 100%",
      //     end: "10% 70%",
      //     scrub: true,
      //     markers: true,
      //   },
      // });
      // be.from("[data-wrap-benefits]", {
      //   y: 300,
      //   // opacity: 0,
      // });
      // pin.to(pinBenefits.current, {
      //   // yPercent: 100,
      //   // duration: 10,
      //   // ease: "sine.out",
      // });

      // gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "[data-pin-process]",
      //     start: "top 60%",
      //     end: "bottom 20%",
      //     pin: true,
      //     scrub: true,
      //     markers: true,
      //   },
      // });

      // gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "[data-pin-p]",
      //     start: "top 80%",
      //     end: "bottom top",
      //     pin: true,
      //     scrub: true,
      //     markers: true,
      //   },
      // });

      const cardsArr = gsap.utils.toArray("[data-card]").map((card) => card);

      const widthProcess = pinProcess.current.getBoundingClientRect().width;

      // it's work -----------------!!!!!!!!

      gsap.from(cardsArr, {
        // duration: 5,
        x: widthProcess,
        opacity: 0,
        stagger: {
          // ease: "none",
          each: 0.5,
          // amount: 4,
        },
        scrollTrigger: {
          trigger: "[data-pin-process]",
          start: "top 10%",
          // end: `bottom -=${widthProcess}`,
          end: `bottom -=1000`,
          pin: "[data-pin-process]",
          scrub: true,
          // markers: true,
        },
      });
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
                    Construye tu presencia en línea
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
                    {/* • scroll • scroll • scroll • scroll • scroll • scroll •
                    scroll • scroll • scroll • scroll */}
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
            {projects.slice(0, 3).map((item, i) => (
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
                <div className={styles.wrapperServicesContent}>
                  <h3 className={styles.appContentTitleIDoWork}>
                    Landing pages
                  </h3>
                  <div className={styles.appContentTitleIDoWorkSubTitle}>
                    Sitio web de una página, ideal para emprendedores, pequeñas
                    empresas, presentación de productos.
                  </div>
                </div>
                <span className={styles.labelServicesCard}>1 página</span>
              </div>
              <div className={styles.servicesCard}>
                <div className={styles.wrapperServicesContent}>
                  <h3 className={styles.appContentTitleIDoWork}>
                    Sitios web de múltiples de páginas
                  </h3>
                  <div className={styles.appContentTitleIDoWorkSubTitle}>
                    Autenticación (registro/inicio de sesión), integración con
                    bases de datos.
                  </div>
                </div>
                <span className={styles.labelServicesCard}>3 - 4 páginas</span>
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
          <div className={styles.wrapperAppBenefits}>
            <div
              ref={pinBenefits}
              data-pin="data-pin"
              className={styles.wrapperBenefitsTitle}
            >
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
                Mi enfoque en el desarrollo web se centra en ofrecer resultados
                que sean importantes para tu negocio. Me tomo el tiempo para
                comprender tus necesidades, objetivos y así crear una solución
                personalizada adaptada a tus necesidades.
              </p>
            </div>

            <div
              data-wrap-benefits="data-wrap-benefits"
              className={styles.wrapperBenefits}
            >
              {/* mobile */}
              <div className={styles.wrapperMobileBenefits}>
                <p className={styles.benefitsHeader}>
                  Optimización para dispositivos moviles
                </p>
                <div className={styles.wrapperMobileFeatureAnimation}>
                  <div className={styles.featureAnimation}>
                    <img src={phone} alt="" />
                  </div>
                </div>
              </div>
              {/* security */}
              <div className={styles.wrapperCardBenefits}>
                <p className={styles.benefitsHeader}>
                  La seguridad es primordial
                </p>
                <div
                  data-benefitsCard="data-benefitsCard"
                  className={styles.benefitsCard}
                >
                  Utilizo herramientas que proporcionan una infraestructura
                  donde tus datos estarán 100% seguros.
                </div>
              </div>
              {/* seo */}
              <div className={styles.wrapperCardBenefits}>
                <p className={styles.benefitsHeader}>
                  Optimización básica de motores de búsqueda (SEO)
                </p>
                <div
                  data-benefitsCard="data-benefitsCard"
                  className={styles.benefitsCard}
                >
                  El SEO básico consiste en utilizar buenas prácticas para
                  aparecer en los principales buscadores web.
                </div>
              </div>
              {/* maintenance */}
              <div className={styles.wrapperCardBenefits}>
                <p className={styles.benefitsHeader}>Soporte y mantenimiento</p>
                <div
                  data-benefitsCard="data-benefitsCard"
                  className={styles.benefitsCard}
                >
                  Soporte y mantenimiento sin coste adicional por 6 meses.
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

          <div
            data-pin-process="data-pin-process"
            className={styles.wrapperAppContentIDoWork}
          >
            <div
              ref={pinBenefits}
              // data-pin-p="data-pin-p"
              className={styles.wrapperProcessTitle}
            >
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
                Tengo los conocimientos y la experiencia para ayudarte a lograr
                tus objetivos.
              </p>
            </div>

            <div ref={pinProcess} className={styles.wrapperProcess}>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>01. Descubrir</h3>
                <div className={styles.appContentTitleIDoWorkSubTitle}>
                  Tendremos nuestra primera reunión para saber mas sobre tu
                  proyecto, te daré una aproximación de cuanto tiempo tomaría y
                  el presupuesto del proyecto.
                </div>
              </div>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>02. Diseño</h3>
                <div className={styles.appContentTitleIDoWorkSubTitle}>
                  Luego de saber sobre tu genial idea, comenzaré mi proceso de
                  diseño, al finalizar mi propuesta nos volvemos a reunir para
                  intercambiar ideas y si estas de acuerdo con el diseño vamos
                  al siguiente punto.
                </div>
              </div>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  03. Desarrollo
                </h3>
                <div className={styles.appContentTitleIDoWorkSubTitle}>
                  Utilizando las herramientas con las que trabajo, comienzo con
                  el proceso de construcción del sitio web, en este punto
                  seguiremos en contacto porque tu también formas parte del
                  proceso.
                </div>
              </div>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  04. Lanzamiento
                </h3>
                <div
                  data-text1="data-text1"
                  className={styles.appContentTitleIDoWorkSubTitle}
                >
                  Publicaré tu sitio web, haré las pruebas necesarias para
                  asegurarme de entregar un trabajo de calidad, si todo marcha
                  bien, serás otro cliente satisfecho.
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
