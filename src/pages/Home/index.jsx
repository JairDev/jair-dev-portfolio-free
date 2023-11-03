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
import { handleClickToLink } from "utils/handleClickToLink";
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
    window.scrollTo(0, 0);
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
        const cardsArr = gsap.utils.toArray("[data-card]");
        gsap.to(cardsArr, {
          xPercent: -50 * (cardsArr.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: "[data-pin-process]",
            start: "top 10%",
            end: `bottom -=800`,
            pin: true,
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
                  ease: "power2.out",
                  autoAlpha: 1,
                  x: 0,
                  y: 0,
                  z: 0,
                  duration: 0.7,
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

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Alfredo Moscoso | Diseño y Desarrollo Web</title>
        <meta
          name="description"
          content="Desarrollo y Diseño de páginas web, diseños personalizados, integración con CMS, interactivas, modernas."
        />
        <link rel="canonical" href="https://alfredomoscoso.netlify.app/" />
        <meta property="og:image" content="/previewimgapp.png" />
      </Helmet>
      <div className={styles.backLayerHero}></div>
      <section className={`${styles.wrapperPadding} ${styles.appContentHero}`}>
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.appLeftContentHero}>
            <h1 className={styles.role}>Sitios web que dan vida a tus ideas</h1>
            <h2 className={styles.subTitleRole}>
              Desarrollo de sitios web modernos que se adaptan a tus
              necesidades.
            </h2>
            <div className={styles.contentButtonContact}>
              <Button classButton="hero">
                <a
                  ref={initProjectLinkRef}
                  className={`${styles.link} ${styles.hero}`}
                  href="#contact"
                  data-link-to-contact
                  onClick={(e) => handleClickToLink(e, initProjectLinkRef, 0.5)}
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
                <div key={item.name}>
                  <Projects
                    id={item.id}
                    name={item.name}
                    imgSrcApp={item.imgSrcApp}
                    imgSrcAppMedium={item.imgSrcAppMedium}
                    imgSrcAppSmall={item.imgSrcAppSmall}
                    imageAlt={item.imageAlt}
                    linkGit={item.linkGit}
                    linkDemo={item.linkDemo}
                    dataDescription={item.dataDescription}
                    role={item.role}
                    idx={i}
                  />
                </div>
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
                {/* <span className={styles.labelServicesCard}>1 página</span> */}
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
                {/* <span className={styles.labelServicesCard}>3 - 4 páginas</span> */}
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
                única, construyendo sitios web que captan la esencia de tu
                marca.
              </p>
            </div>

            <div
              data-wrap-benefits="data-wrap-benefits"
              className={styles.wrapperBenefits}
            >
              {/* mobile */}
              <div className={styles.wrapperCardBenefits}>
                <div className={styles.wrapperCardBenefitsTitle}>
                  <div className={styles.gridList}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div>
                    <h3 className={styles.benefitsHeader}>
                      Optimización para dispositivos moviles
                    </h3>
                    <p className={styles.benefitsSubTitle}>
                      Diseño adaptable para diferentes dispositivos y pantallas.
                    </p>
                  </div>
                </div>
                <div className={styles.wrapperMobileFeatureAnimation}>
                  <div className={styles.featureAnimation}>
                    <img src={phoneLine} alt="" />
                  </div>
                </div>
              </div>
              {/* seo */}
              <div className={styles.wrapperCardBenefits}>
                <div className={styles.wrapperCardBenefitsTitle}>
                  <div className={styles.gridList}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div>
                    <h3 className={styles.benefitsHeader}>
                      Optimización básica de motores de búsqueda (SEO)
                    </h3>
                    <p className={styles.benefitsSubTitle}>
                      Palabras clave que atraen a tus clientes, optimización de
                      imágenes para aumentar la visibilidad en línea.
                    </p>
                  </div>
                </div>
              </div>
              {/* maintenance */}
              <div className={styles.wrapperCardBenefits}>
                <div className={styles.wrapperCardBenefitsTitle}>
                  <div className={styles.gridList}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div>
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
          <img src={wave} alt="imagen svg en forma de curva" />
        </div>
        <div className={styles.wrapperMaxWidth}>
          <div className={styles.contentCircleBlur}></div>

          <div
            data-pin-process="data-pin-process"
            className={styles.wrapperAppContentProcess}
          >
            <div data-pin-title className={styles.wrapperProcessTitle}>
              <h2
                data-text="text"
                className={`${styles.processTitle} ${styles.titleSections}`}
                data-animate-title
              >
                Mi proceso
              </h2>

              <p className={styles.processDescription}>
                Trabajemos juntos para crear un sitio web que se destaque de la
                competencia.
              </p>
            </div>

            <div ref={pinProcess} className={styles.wrapperProcess}>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  <span>01.</span> Descubrir
                </h3>
                <p className={styles.appContentTitleIDoWorkSubTitle}>
                  Tendremos nuestro primer acercamiento, por videollamada,
                  mensajes de texto, llamada télefonica, lo que sea mas cómodo
                  para ti, para saber mas sobre tu proyecto, definir el alcance
                  y acordar el costo total del trabajo. Luego haces un pre-pago
                  del 50% para comenzar a trabajar en el proyecto.
                </p>
              </div>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  <span>02.</span> Estructura
                </h3>
                <p className={styles.appContentTitleIDoWorkSubTitle}>
                  Se analiza la competencia y el público objetivo, te muestro la
                  estructura que podría tener el sitio web a través de un
                  sitemap y procedemos a diseñar la primera pantalla.
                </p>
              </div>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  <span>03.</span> Diseño
                </h3>
                <p className={styles.appContentTitleIDoWorkSubTitle}>
                  Comenzaré con el diseño para determinar la dirección del
                  estilo. Luego de acordar la propuesta de diseño que
                  presentaré, continuamos diseñando todo el sitio, te presento
                  el diseño completo y procedemos al desarrollo del sitio web.
                </p>
              </div>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  <span>04.</span> Desarrollo
                </h3>
                <p
                  data-text1="data-text1"
                  className={styles.appContentTitleIDoWorkSubTitle}
                >
                  Comienzo el desarrollo del sitio web, estaré en constante
                  comunicación para informar sobre el avance del proyecto.
                </p>
              </div>
              <div data-card="data-card" className={styles.cardProcess}>
                <h3 className={styles.appContentTitleIDoWork}>
                  <span>05.</span> Lanzamiento
                </h3>
                <p
                  data-text1="data-text1"
                  className={styles.appContentTitleIDoWorkSubTitle}
                >
                  Se hará la configuración de dominios, hosting del sitio y
                  otros elementos que se requieran. Procedes a pagar el 50%
                  restante del pago y es cuando tendrás acceso al sitio web.
                </p>
              </div>
            </div>
            <div className="end-element"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
