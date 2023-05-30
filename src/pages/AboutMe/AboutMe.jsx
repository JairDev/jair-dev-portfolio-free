import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import collage from "assets/coll.png";
import aboutPhoto from "assets/about-photo2.png";

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
                    <h1 className={styles.descriptionHeader}>Hola</h1>
                    <p className={styles.description}>
                      Soy Alfredo Moscoso, desarrollador web con experiencia en
                      construcción de sitios web personalizados, puedo ayudarte
                      para que logres tener éxito en internet y mostrar lo
                      excepcional de ti.
                    </p>
                  </div>
                </div>
                <div className={styles.appRightContentHero}>
                  <div className={styles.wrapperAboutPhoto}>
                    <div className={styles.contentAboutPhoto}>
                      <span
                        className={`${styles.spanSquare} ${styles.sA}`}
                      ></span>
                      <span
                        className={`${styles.spanSquare} ${styles.sB}`}
                      ></span>
                      <img src={aboutPhoto} alt="" />
                    </div>
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
