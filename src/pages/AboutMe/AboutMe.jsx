import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import collage from "assets/coll.png";
import aboutPhoto from "assets/about-photo.png";

import styles from "./AboutMe.module.css";
import Header from "components/Header/Header";
import Layout from "pages/Layout/Layout";
import { ReactLenis } from "@studio-freight/react-lenis";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const options = {
    smoothWheel: true,
  };

  useEffect(() => {
    ScrollTrigger.getAll("circle-blur").forEach((item) => item.kill);

    ScrollTrigger.refresh();
    console.log("mount about");

    return () => {
      console.log("unmount about");
    };
  }, []);

  return (
    <ReactLenis root options={{ ...options }}>
      <Layout>
        <Helmet>
          <title>Quien soy?</title>
        </Helmet>
        <div className="App">
          <section
            id="about-me"
            className={`${styles.wrapperPadding} ${styles.appContentAboutMe}`}
          >
            <div className={styles.wrapperMaxWidth}>
              <div className={styles.wrapperContentHero}>
                <div className={styles.appLeftContentHero}>
                  <div className={styles.appLeftContentHeroRole}>
                    <div className={styles.wordHeroColor}>
                      <h1 className={styles.role}>
                        "Me impulsa{" "}
                        <span className={styles.roleSpan}>desarmar</span>{" "}
                        constuir cosas que ayudarán a otros"
                      </h1>
                    </div>
                  </div>
                </div>
                <div className={styles.appRightContentHero}>
                  <div className={styles.wrapperAboutPhoto}>
                    <div className={styles.contentAboutPhoto}>
                      <img src={aboutPhoto} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles.wrapperPadding}`}>
            <div className={styles.wrapperMaxWidth}>
              <div className={styles.wrapperAboutMe}>
                <div className={styles.appContentAboutMeHeader}>
                  <div className={styles.appContentAboutMeTitle}>
                    <h3
                      data-text="text"
                      className={`${styles.text} ${styles.spanName}`}
                    >
                      Hola
                    </h3>
                  </div>
                </div>

                <div className={styles.appContentAboutMeDescription}>
                  <div className={styles.wrapperAboutMeDescription}>
                    {/* <span className={styles.lineRightAbout}></span> */}
                    {/* <span className={styles.lineLeftAbout}></span> */}
                    <p
                      data-text="text"
                      className={`${styles.text} ${styles.pDescription}`}
                    >
                      {/* ¡Muestra lo único que eres y destaca en el mundo digital! */}
                    </p>
                    <p
                      data-text="text"
                      className={`${styles.text} ${styles.pDescription}`}
                    >
                      Soy Alfredo Moscoso, desarrollador web con experiencia en
                      construcción de sitios web personalizados, puedo ayudarte
                      para que logres tener éxito en internet y mostrar lo
                      excepcional de ti.
                    </p>
                    <p
                      data-text="text"
                      className={`${styles.text} ${styles.pDescription}`}
                    >
                      Me impulsa poder crear cosas que ayudarán a otras
                      personas, ese sitio web para la repostera emprenderora que
                      está comenzando con su negocio y quiere aumentar su
                      clientela, aquel fotógrafo que quiero mostrar su trabajo
                      de forma única en internet.
                    </p>
                    {/* <p
                    data-text="text"
                    className={`${styles.text} ${styles.pDescription}`}
                  >
                    Comencé en esta carrera motivado siempre por un gusto por la
                    tecnología, la curiosidad que desde niño tenía por saber
                    como funcionaban las cosas, por ejemplo aquel dispositivo
                    electrónico de mi sobrina que desarmé para "repararlo" y mas
                    nunca fue el mismo, ja, ja, ja.
              
                  </p> */}
                    {/* <p
                    data-text="text"
                    className={`${styles.text} ${styles.pDescription}`}
                  >
                    Esa misma curiosidad fue la que me llevó a querer saber como
                    funcionaba internet, ahí fue cuando descubrí el desarrollo
                    web y comenzó este viaje. Un viaje lleno de retos y
                    frustraciones, pero un viaje que solo me ha dejado
                    aprendizajes.
                  </p> */}
                    <p
                      data-text="text"
                      className={`${styles.text} ${styles.pDescription}`}
                    >
                      Los sitios web que realizo están enfocados en brindar una
                      buena experiencia de usuario, adaptables a dispositivos
                      móviles y accesibles.
                      {/* hechos con amor y profesionalismo. */}
                    </p>
                  </div>
                  <div className={styles.contentColl}>
                    <div className={styles.contentCollImg}>
                      <img src={collage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section
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
              </div>
              <div className={styles.wrapperAppContentIDoWork}>
                <h2 data-text="text" className={styles.spanIDoWorkName}>
                  Puedo ayudarte con
                </h2>

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
          </section> */}
        </div>
      </Layout>
    </ReactLenis>
  );
}

export default AboutMe;
