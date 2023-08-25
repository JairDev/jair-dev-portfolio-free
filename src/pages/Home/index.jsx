import React, { useEffect, useRef, useState, useLayoutEffect } from "react";

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
  const projectsRef = useRef(null);
  const initProjectLinkRef = useRef(null);
  const pinBenefits = useRef(null);
  const pinBenefitsParent = useRef(null);
  const pinWord = useRef(null);
  const pinProcess = useRef(null);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(personalProjects);
      }, 0)
    ).then((res) => setProjects(res));
  }, []);

  useLayoutEffect(() => {
    if (window.innerWidth > 1280) {
      const gsapContext = gsap.context(() => {
        const pin = gsap.timeline({
          scrollTrigger: {
            trigger: pinBenefits.current,
            start: "top 10%",
            end: "bottom 45%",
            pin: true,
            scrub: true,
          },
        });
        pin.from("[data-wrap-benefits]", {
          y: 500,
        });

        ///////////////////// process animations
        const cardsArr = gsap.utils.toArray("[data-card]").map((card) => card);
        const widthProcess = pinProcess.current.getBoundingClientRect().width;
        gsap.from(cardsArr, {
          x: widthProcess / 2,
          y: "random(-100, 200)",
          rotateZ: "random(-40, 40)",
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

        ////////////////////////////letters animations
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
      });
      return () => {
        gsapContext.revert();
      };
    }
  });

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
      <section className={`${styles.wrapperPadding} ${styles.appContentHero}`}>
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.appLeftContentHero}>
            <h1 className={styles.role}>Construyo sitios web</h1>
            <h2 className={styles.subTitleRole}>
              Desarrollo de sitios web personalizados que se adaptan a tus
              necesidades.
            </h2>
            <div className={styles.contentButtonContact}>
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
        ref={projectsRef}
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
            {/* {isViewProject && (
              <Suspense fallback={"Cargando"}>
              </Suspense>
            )} */}
            {projects &&
              projects.map((item, i) => (
                <Projects
                  key={item.name}
                  id={item.id}
                  name={item.name}
                  imgSrcApp={item.imgSrcApp}
                  imageAlt={item.imageAlt}
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
      <section className={`${styles.wrapperPadding} ${styles.serviceSection}`}>
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

      <section className={`${styles.wrapperPadding} ${styles.benefitsSection}`}>
        <span ref={pinWord} className={styles.benefitsWord}>
          BENEFICIOS
        </span>
        <div className={styles.wrapperMaxWidth}>
          <div ref={pinBenefitsParent} className={styles.wrapperAppBenefits}>
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
                única, con una solución personalizada.
              </p>
            </div>

            <div
              data-wrap-benefits="data-wrap-benefits"
              className={styles.wrapperBenefits}
            >
              {/* mobile */}
              <div className={styles.wrapperCardBenefits}>
                <div className={styles.gridList}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
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
              {/* seo */}
              <div className={styles.wrapperCardBenefits}>
                <div className={styles.gridList}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <h3 className={styles.benefitsHeader}>
                  Optimización básica de motores de búsqueda (SEO)
                </h3>
                <p className={styles.benefitsSubTitle}>
                  Palabras clave que atraen a tus clientes, optimización de
                  imágenes para aumentar la visibilidad en línea.
                </p>
              </div>
              {/* maintenance */}
              <div className={styles.wrapperCardBenefits}>
                <div className={styles.gridList}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <h3 className={styles.benefitsHeader}>
                  Soporte y mantenimiento
                </h3>
                <p className={styles.benefitsSubTitle}>
                  Soporte y mantenimiento sin costo adicional por 60 días.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.wrapperPadding} ${styles.processSection}`}>
        <span className={`${styles.spanMask} ${styles.spanMaskStyle}`}></span>
        <span className={`${styles.spanMask} ${styles.spanMaskStyle}`}></span>
        <span className={`${styles.spanMask} ${styles.spanMaskStyle}`}></span>
        <span className={`${styles.spanMask} ${styles.spanMaskStyle}`}></span>
        <span className={`${styles.spanMask} ${styles.spanMaskStyle}`}></span>
        <span className={`${styles.spanMask} ${styles.spanMaskStyle}`}></span>
        <span className={`${styles.spanMask} ${styles.spanMaskStyle}`}></span>
        <span className={`${styles.spanMask} ${styles.spanMaskStyle}`}></span>
        <div className={styles.contentWave}>
          <img
            // width="1000"
            // height="560"
            src={wave}
            alt="imagen svg en forma de curva"
          />
        </div>
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.contentCircleBlur}></div>

          <div
            data-pin-process="data-pin-process"
            className={styles.wrapperAppContentProcess}
          >
            <div className={styles.wrapperProcessTitle}>
              <h2
                data-text="text"
                className={`${styles.processTitle} ${styles.titleSections}`}
                data-animate-title
              >
                Mi proceso
              </h2>

              <p className={styles.processDescription}>
                Puedo ayudarte a lograr tus objetivos.
              </p>
            </div>

            <div ref={pinProcess} className={styles.wrapperProcess}>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  <span>01.</span> Descubrir
                </h3>
                <p className={styles.appContentTitleIDoWorkSubTitle}>
                  Tendremos nuestra primera reunión para saber mas sobre tu
                  proyecto, te daré una aproximación de cuanto tiempo tomaría y
                  el presupuesto del proyecto.
                </p>
              </div>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  <span>02.</span> Diseño
                </h3>
                <p className={styles.appContentTitleIDoWorkSubTitle}>
                  Luego de saber sobre tu genial idea, comenzaré mi proceso de
                  diseño, al finalizar mi propuesta nos volvemos a reunir para
                  intercambiar ideas y si estas de acuerdo con el diseño vamos
                  al siguiente punto.
                </p>
              </div>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  <span>03.</span> Desarrollo
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
                  <span>04.</span> Lanzamiento
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
