import React, { useEffect, useRef, useState } from "react";

import { Helmet } from "react-helmet";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { personalProjects } from "../../data/info-portfolio";

import phoneLine from "assets/mobile-phone-line.svg";
import wave from "assets/wave.svg";

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
  const [projects, setProjects] = useState([]);

  const [isMounted, setIsMounted] = useState(false);

  const initProjectLinkRef = useRef(null);

  const pinBenefits = useRef(null);

  const pinProcess = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(personalProjects);
      }, 0)
    ).then((res) => setProjects(res));

    window.scrollTo(0, 0);
  }, []);

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
          },
        });
        pin.from("[data-wrap-benefits]", {
          y: 500,
        });

        // process animations
        const cardsArr = gsap.utils.toArray("[data-card]").map((card) => card);
        const widthProcess = pinProcess.current.getBoundingClientRect().width;
        gsap.from(cardsArr, {
          x: widthProcess / 2,
          y: "random(-50, 200)",
          rotateZ: "random(-30, 30)",
          stagger: {
            each: 0.3,
          },
          scrollTrigger: {
            trigger: "[data-pin-process]",
            start: "top 10%",
            end: `bottom -=2000`,
            pin: "[data-pin-process]",
            scrub: true,
          },
        });
      }
      ////////////////////////////letters animation
      const split = Splitting({
        target: "[data-animate-title]",
        by: "chars",
      });
      split.forEach((letters) => {
        letters.chars.forEach((l) => {
          const randomPosition = () => gsap.utils.random(-100, 100);
          gsap.set(l.parentNode, { perspective: 1000 });
          gsap.set(l, {
            autoAlpha: 0,
            x: randomPosition(),
            y: randomPosition(),
            z: randomPosition(),
          });
          ScrollTrigger.batch(l, {
            onEnter: (batch) =>
              gsap.to(batch, {
                ease: "none",
                autoAlpha: 1,
                x: 0,
                y: 0,
                z: 0,
              }),
            onLeaveBack: (batch) =>
              gsap.to(batch, {
                ease: "none",
                autoAlpha: 0,
                x: randomPosition(),
                y: randomPosition(),
                z: randomPosition(),
              }),
            start: "top 95%",
          });
        });
      });
    }
  }, [isMounted]);

  const handleLinkToClick = (e, target, duration) => {
    e.preventDefault();
    const linkTo = target.current.getAttribute("href");
    gsap.to(window, { duration: duration, scrollTo: { y: linkTo } });
  };

  return (
    <>
      <Helmet>
        <title>Alfredo Moscoso | Desarrollador web</title>
      </Helmet>
      <section
        className={`${styles.wrapperPadding} ${styles.appContentHero}`}
        id={"wrapper-padding"}
      >
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.appLeftContentHero}>
            <h1 className={styles.role}>Construyo sitios web</h1>
            <h2 className={styles.subTitleRole}>
              Sitios web personalizados que se adaptan a tus necesidades.
            </h2>
            <div id="trigger-button" className={styles.contentButtonContact}>
              <Button classButton="hero">
                <a
                  ref={initProjectLinkRef}
                  className={`${styles.link} ${styles.hero}`}
                  href="#contact"
                  data-link-to-contact
                  onClick={(e) => handleLinkToClick(e, initProjectLinkRef, 3)}
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
              data-text="text"
              className={`${styles.spanWorkName} ${styles.titleSections}`}
              data-animate-title
              data-effect17
            >
              Trabajos recientes
            </h2>
          </div>
          <div className={styles.contentProject}>
            {projects &&
              projects.map((item, i) => (
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
          <div className={styles.wrapperAppContentIDoWork}>
            <h2
              data-text="text"
              className={`${styles.titleSections}`}
              data-animate-title
            >
              Puedo ayudarte con
            </h2>

            <div className={styles.wrapperServices}>
              <div className={styles.servicesCard}>
                <div className={styles.wrapperServicesContent}>
                  <h3 className={styles.appContentTitleIDoWork}>
                    Landing pages
                  </h3>
                  <p className={styles.appContentTitleIDoWorkSubTitle}>
                    Sitio web de una página, ideal para emprendedores, pequeñas
                    empresas, presentación de productos.
                  </p>
                </div>
                <span className={styles.labelServicesCard}>1 página</span>
              </div>
              <div className={styles.servicesCard}>
                <div className={styles.wrapperServicesContent}>
                  <h3 className={styles.appContentTitleIDoWork}>
                    Sitios web de múltiples páginas
                  </h3>
                  <p className={styles.appContentTitleIDoWorkSubTitle}>
                    Sitios web con una estructura donde puedas mostrar
                    información mas detallada de tu producto o servicio.
                  </p>
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
          <div className={styles.wrapperAppBenefits}>
            <div
              ref={pinBenefits}
              data-pin="data-pin"
              className={styles.wrapperBenefitsTitle}
            >
              <h2
                data-text="text"
                className={`${styles.titleSections}`}
                data-animate-title
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
                <h3 className={styles.benefitsHeader}>
                  Optimización para dispositivos moviles
                </h3>
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
                <h3 className={styles.benefitsHeader}>
                  La seguridad es primordial
                </h3>
                <p className={styles.benefitsSubTitle}>
                  Utilizo herramientas que proporcionan una infraestructura
                  donde tus datos estarán 100% seguros.
                </p>
              </div>
              {/* seo */}
              <div className={styles.wrapperCardBenefits}>
                <h3 className={styles.benefitsHeader}>
                  Optimización básica de motores de búsqueda (SEO)
                </h3>
                <p className={styles.benefitsSubTitle}>
                  Palabras clave que atraen a tus clientes, optimización de
                  imágenes y contenido para aumentar la visibilidad en línea.
                </p>
              </div>
              {/* maintenance */}
              <div className={styles.wrapperCardBenefits}>
                <h3 className={styles.benefitsHeader}>
                  Soporte y mantenimiento
                </h3>
                <p className={styles.benefitsSubTitle}>
                  Soporte y mantenimiento sin coste adicional por 6 meses.
                </p>
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
            <div ref={pinBenefits} className={styles.wrapperProcessTitle}>
              <h2
                data-text="text"
                className={`${styles.processTitle} ${styles.titleSections}`}
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
                <p className={styles.appContentTitleIDoWorkSubTitle}>
                  Tendremos nuestra primera reunión para saber mas sobre tu
                  proyecto, te daré una aproximación de cuanto tiempo tomaría y
                  el presupuesto del proyecto.
                </p>
              </div>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>02. Diseño</h3>
                <p className={styles.appContentTitleIDoWorkSubTitle}>
                  Luego de saber sobre tu genial idea, comenzaré mi proceso de
                  diseño, al finalizar mi propuesta nos volvemos a reunir para
                  intercambiar ideas y si estas de acuerdo con el diseño vamos
                  al siguiente punto.
                </p>
              </div>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  03. Desarrollo
                </h3>
                <p className={styles.appContentTitleIDoWorkSubTitle}>
                  Utilizando las herramientas con las que trabajo, comienzo con
                  el proceso de construcción del sitio web, en este punto
                  seguiremos en contacto porque tu también formas parte del
                  proceso.
                </p>
              </div>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  04. Lanzamiento
                </h3>
                <p
                  data-text1="data-text1"
                  className={styles.appContentTitleIDoWorkSubTitle}
                >
                  Publicaré tu sitio web, haré las pruebas necesarias para
                  asegurarme de entregar un trabajo de calidad, si todo marcha
                  bien, serás otro cliente satisfecho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
