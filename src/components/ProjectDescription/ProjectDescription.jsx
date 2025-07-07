import Layout from "pages/Layout/Layout";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./ProjectsDescription.module.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ArrowIcon from "../../assets/arrow.svg";

import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getProject } from "utils/getProjects";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function ProjectsDescription() {
  const { id } = useParams();
  const [projectInfo, setProjectInfo] = useState();
  const options = {
    smoothWheel: true,
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function project() {
      const project = getProject(id);
      console.log(project);
      setProjectInfo(project);
    }
    project();
  }, []);

  return (
    <ReactLenis root options={{ ...options }}>
      <Layout>
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{id} | Diseño y Desarrollo Web</title>
          <meta
            name="description"
            content="Desarrollo y Diseño de páginas web, diseños personalizados, integración con CMS, interactivas, modernas."
          />
          <link rel="canonical" href="https://alfredomoscoso.netlify.app/" />
          <meta property="og:image" content="/previewimgapp.png" />
        </Helmet>
        <div className="App">
          <section
            className={`${styles.wrapperPadding} ${styles.appContentDescriptionProject}`}
          >
            <div
              className={`${styles.wrapperMaxWidth} ${styles.wrapperProjectDescription}`}
            >
              <div className={styles.appContentHeader}>
                <div className={styles.contentHeader}>
                  <h1 className={styles.descriptionHeader}>
                    {projectInfo?.name}
                  </h1>
                  <div className={styles.contentLink}>
                    {projectInfo?.demo && (
                      <Link
                        to={projectInfo.url}
                        className={styles.viewSite}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>Ver sitio</p>
                        <div className={styles.contentSocialArrow}>
                          <img src={ArrowIcon} alt="" />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
                <p className={styles.description}>{projectInfo?.description}</p>
                <p className={styles.role}>
                  <span className={styles.roleSpan}>Role:</span>{" "}
                  {projectInfo?.role}
                </p>
              </div>
              <div className={styles.appContentProject}>
                {/* <div className={styles.contentProjectVideo}>
                  <video
                    src="/src/assets/andreaf/andrea-vid.webm"
                    autoPlay
                    muted
                    loop
                  ></video>
                </div> */}
                {projectInfo?.descriptionImg?.map((img) => (
                  <div key={img.small} className={styles.contentProjectImage}>
                    {img.isVideo ? (
                      <div className={styles.contentProjectVideo}>
                        <video src={img.srcVideo} autoPlay muted loop></video>
                      </div>
                    ) : (
                      <picture>
                        <source srcSet={img.large} media="(min-width: 768px)" />
                        <img
                          src={img.small}
                          // decoding="async"
                          // loading="lazy"
                          alt={img.alt}
                          width="640"
                          height="400"
                        />
                      </picture>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </ReactLenis>
  );
}

export default ProjectsDescription;
