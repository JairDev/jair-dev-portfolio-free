import { personalProjects } from "data/info-portfolio";
import Layout from "pages/Layout/Layout";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./ProjectsDescription.module.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useParams } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function ProjectsDescription() {
  const { id } = useParams();
  const [projectInfo, setProjectInfo] = useState({});
  const options = {
    smoothWheel: true,
  };
  // console.log(id);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      // gsapContext.kill();
      // ScrollTrigger.getAll().forEach((pined) => pined.kill());
    };
  }, []);

  useEffect(() => {
    async function project() {
      const project = await getProject(id);
      // console.log(project);
      setProjectInfo(project);
    }
    project();
  }, []);

  return (
    <ReactLenis root options={{ ...options }}>
      <Layout>
        {/* <Helmet>
          <title>Sobre mí</title>
        </Helmet> */}
        <div className="App">
          <section
            id="about-me"
            className={`${styles.wrapperPadding} ${styles.appContentAboutMe}`}
          >
            <div
              className={`${styles.wrapperMaxWidth} ${styles.wrapperProjectDescription}`}
            >
              <div className={styles.appLeftContentHero}>
                <div className={styles.appLeftContentHeroRole}>
                  <div className={styles.contentHeader}>
                    <h1 className={styles.descriptionHeader}>
                      {projectInfo.name}
                    </h1>
                    <p className={styles.viewSite}>Ver sitio</p>
                  </div>
                  <p className={styles.description}>
                    {projectInfo.description}
                  </p>
                </div>
              </div>
              <div className={styles.appRightContentHero}>
                <div className={styles.contentAboutPhoto}>
                  <span className={`${styles.spanSquare} ${styles.sA}`}></span>
                  <span className={`${styles.spanSquare} ${styles.sB}`}></span>
                  <img src={projectInfo.imgSrcApp} alt="" />
                </div>
                <div className={styles.contentAboutPhoto}>
                  <span className={`${styles.spanSquare} ${styles.sA}`}></span>
                  <span className={`${styles.spanSquare} ${styles.sB}`}></span>
                  <img src={projectInfo.imgSrcApp} alt="" />
                </div>
                <div className={styles.contentAboutPhoto}>
                  <span className={`${styles.spanSquare} ${styles.sA}`}></span>
                  <span className={`${styles.spanSquare} ${styles.sB}`}></span>
                  <img src={projectInfo.imgSrcApp} alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </ReactLenis>
  );
}

async function getProject(id) {
  const find = personalProjects.find((project) => project.id === id);
  // console.log(find);
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(find);
    }, 0)
  );
}

export default ProjectsDescription;
