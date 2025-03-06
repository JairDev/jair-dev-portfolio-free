import React, { useEffect } from "react";

import { Helmet } from "react-helmet";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ReactLenis } from "@studio-freight/react-lenis";

import aboutPhoto from "assets/preview-editv4.png";

import Layout from "pages/Layout/Layout";

import styles from "./AboutMe.module.css";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const refContentPhoto = React.useRef(null);

  useEffect(() => {
    if (window.innerWidth > 1280) {
      const gsapContext = gsap.to(refContentPhoto.current, {
        scrollTrigger: {
          trigger: refContentPhoto.current,
          start: "50% 75%",
          end: "bottom -=200",
          scrub: true,
          // markers: true,
        },
        rotate: 0,
      });
      return () => gsapContext.revert();
    }
  }, []);

  const options = {
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={{ ...options }}>
      <Layout>
        <Helmet>
          <title>Sobre mí | Diseño y Desarrollo de sitios web</title>
        </Helmet>
        <div className="App">
          <section
            id="about-me"
            className={`${styles.wrapperPadding} ${styles.appContentAboutMe}`}
          >
            <div className={styles.wrapperMaxWidth}>
              <div className={styles.wrapperContentHero}>
                <div className={styles.appLeftContentDescription}>
                  <h1 className={styles.descriptionHeader}>Hola</h1>
                  <p className={styles.description}>
                    Me llamo Alfredo Moscoso, soy un desarrollador web
                    apasionado por la tecnología. He dedicado mi carrera a
                    perfeccionar mis habilidades, creando sitios web
                    personalizados que te ayudan a lograr tus metas en el mundo
                    digital.
                  </p>
                  <p className={styles.description}>
                    Me enfoco en la experiencia del usuario, creando sitios web
                    dinámicos y responsivos que se adaptan a cualquier
                    dispositivo y pantalla. Utilizo animaciones e interacciones
                    para captar la atención de los visitantes y ofrecerles una
                    experiencia única.
                  </p>
                  <p className={styles.description}>
                    Si buscas un sitio web que refleje tu personalidad, tu marca
                    o tu negocio, yo puedo ayudarte a hacerlo realidad.
                    Contáctame y trabajemos juntos en tu proyecto.
                  </p>
                </div>
                <div className={styles.appRightContentHero}>
                  <div
                    ref={refContentPhoto}
                    className={styles.contentAboutPhoto}
                  >
                    <img width={400} height={600} src={aboutPhoto} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </ReactLenis>
  );
}

export default AboutMe;
