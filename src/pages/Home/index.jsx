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
// import phone from "assets/mobile-phone-img.svg";
import phoneLine from "assets/mobile-phone-line.svg";
import wave from "assets/wave.svg";
import ArrowIcon from "../../assets/arrow.svg";

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
    // heroImage: useRef(null),
    rotateText: useRef(),
  };

  const refCircleText = useRef();

  const projects = personalProjects;

  const [isMounted, setIsMounted] = useState(false);

  const refText = useRef(null);

  const pinBenefits = useRef(null);

  const pinProcess = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    window.scrollTo(0, 0);

    gsapAnimations(objRef);

    // gsap.utils.toArray("[data-link-to]").forEach((link) => {
    //   const scroll = link.getAttribute("href");
    //   link.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     gsap.to(window, { duration: 1, scrollTo: { y: scroll } });
    //   });
    // });

    // const circleType = new CircleType(refCircleText.current);
    // circleType.radius(80);
  }, [objRef]);

  useEffect(() => {
    if (isMounted) {
      if (window.innerWidth > 1280) {
        ///// pins
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

        const cardsArr = gsap.utils.toArray("[data-card]").map((card) => card);

        const widthProcess = pinProcess.current.getBoundingClientRect().width;

        // it's work -----------------!!!!!!!!

        gsap.from(cardsArr, {
          // duration: 5,
          x: widthProcess,
          y: "random(-300, 300)",
          rotateZ: "random(-30, 30)",
          opacity: 0,
          stagger: {
            // ease: "none",
            each: 0.3,
            // amount: 4,
          },
          scrollTrigger: {
            trigger: "[data-pin-process]",
            start: "top 10%",
            // end: `bottom -=${widthProcess}`,
            end: `bottom -=2000`,
            pin: "[data-pin-process]",
            scrub: true,
            // markers: true,
          },
        });
      }

      const split = Splitting({
        target: "[data-animate-title]",
        by: "chars",
      });
      split.forEach((letters) => {
        letters.chars.forEach((l) => {
          // console.log(l);
          const randomPosition = () => gsap.utils.random(-100, 100);
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
                ease: "none",
                opacity: 1,
                translateY: 0,
                translateX: 0,
                z: 0,
              }),
            onLeaveBack: (batch) =>
              gsap.to(batch, {
                ease: "none",
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
      gsap.utils.toArray("[data-link-to]").forEach((link) => {
        const scroll = link.getAttribute("href");
        link.addEventListener("click", (e) => {
          e.preventDefault();
          gsap.to(window, { duration: 1, scrollTo: { y: scroll } });
        });
      });
      gsap.utils.toArray("[data-link-to-contact]").forEach((link) => {
        const scroll = link.getAttribute("href");
        link.addEventListener("click", (e) => {
          e.preventDefault();
          gsap.to(window, { duration: 3, scrollTo: { y: scroll } });
        });
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
          <div className={styles.appLeftContentHero}>
            <h1 className={styles.role}>Construye tu presencia en línea</h1>
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
                  data-l="data-l"
                  data-link-to-contact
                >
                  Iniciar un proyecto
                </a>
              </Button>
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
              // data-splitting
              data-animate-title
              data-effect17
            >
              Trabajos recientes
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
              // data-splitting
              data-animate-title
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
                    Sitios web de múltiples páginas
                  </h3>
                  <div className={styles.appContentTitleIDoWorkSubTitle}>
                    Pueden tener, autenticación (registro/inicio de sesión),
                    integración con bases de datos.
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
                // data-splitting
                data-animate-title
                data-effect17
              >
                Que obtendrás
              </h2>
              <p className={styles.youGetDescription}>
                Mi enfoque en el desarrollo web se centra en comprender tus
                objetivos comerciales para crear una experiencia de usuario
                única, con una solución personalizada obteniendo resultados
                como, mayores tasas de conversión, aumento de tráfico web y
                clientes potenciales.
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
                <p className={styles.benefitsSubTitle}>
                  Diseño adaptable para diferentes dispositivos y pantallas.
                </p>
                <div className={styles.wrapperMobileFeatureAnimation}>
                  <div className={styles.featureAnimation}>
                    <img src={phoneLine} alt="" />
                  </div>
                </div>
              </div>
              {/* security */}
              <div className={styles.wrapperCardBenefits}>
                <p className={styles.benefitsHeader}>
                  La seguridad es primordial
                </p>
                <div
                  // data-benefitsCard="data-benefitsCard"
                  className={styles.benefitsSubTitle}
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
                  // data-benefitsCard="data-benefitsCard"
                  className={styles.benefitsSubTitle}
                >
                  Palabras clave que atraen a tus clientes, optimización de
                  imágenes y contenido para aumentar la visibilidad en línea.
                </div>
              </div>
              {/* maintenance */}
              <div className={styles.wrapperCardBenefits}>
                <p className={styles.benefitsHeader}>Soporte y mantenimiento</p>
                <div
                  // data-benefitsCard="data-benefitsCard"
                  className={styles.benefitsSubTitle}
                >
                  Soporte y mantenimiento sin coste adicional por 6 meses.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="personal-work"
        className={`${styles.wrapperPadding} ${styles.processSection}`}
      >
        <div className={styles.contentWave}>
          <img src={wave} alt="" />
        </div>
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
                // data-splitting
                data-effect17
                data-animate-title
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
