import Layout from "pages/Layout/Layout";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  const [projectInfo, setProjectInfo] = useState({});
  const imageRef = useRef([]);
  const options = {
    smoothWheel: true,
  };

  useEffect(() => {
    async function project() {
      const project = await getProject(id);
      setProjectInfo(project);
    }
    project();
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (projectInfo.id) {
      const gsapContext = gsap.context(() => {
        imageRef.current.forEach((image) => {
          gsap.to(image.firstChild, {
            scale: 1.2,
            scrollTrigger: {
              trigger: image,
              start: "top 35%",
              end: "bottom -=200",
              scrub: true,
            },
          });
        });
      });
      return () => gsapContext.revert();
    }
  }, [projectInfo]);

  return (
    <ReactLenis root options={{ ...options }}>
      <Layout>
        <Helmet>
          <title>{id}</title>
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
                    {projectInfo.name}
                  </h1>
                  <div className={styles.contentLink}>
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
                  </div>
                </div>
                <p className={styles.description}>{projectInfo.description}</p>
                <p className={styles.role}>
                  <span className={styles.roleSpan}>Role:</span> Desarrollo
                </p>
              </div>
              <div className={styles.appContentProject}>
                {projectInfo.descriptionImg?.map((img, index) => (
                  <div
                    key={img}
                    ref={(image) => (imageRef.current[index] = image)}
                    className={styles.contentProjectImage}
                  >
                    <img width={600} height={280} src={img} alt="" />
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
