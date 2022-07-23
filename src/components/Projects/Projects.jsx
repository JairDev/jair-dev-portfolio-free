import React, { useRef } from "react";

import IconSocial from "components/IconSocial/IconSocial";

import * as styles from "./Projects.module.css";

function Projects({
  id,
  name,
  imgSrcApp,
  linkGit,
  linkDemo,
  dataDescription,
  challenge,
  difficulty,
  source,
  isChallege = false,
}) {
  const refMoveElement = useRef();
  const refParentHeight = useRef();
  const refImage = useRef();
  return (
    <>
      <div id={id} className={styles.contentPersonalProject}>
        <div
          ref={refParentHeight}
          className={styles.contentPersonalProjectFlex}
        >
          <div
            className={styles.contentPersonalProjectImg}
            ref={refMoveElement}
          >
            <div ref={refImage} className={styles.wrapperImage}>
              <img src={imgSrcApp} alt="" />
              <IconSocial
                urlGithub={linkGit}
                urlLive={linkDemo}
                fontSizeIcon="24px"
              />
            </div>
          </div>
          <div
            data-height="parent-paragraph"
            className={styles.contentPersonalProjectDescription}
          >
            <div className={styles.contentTitleProject}>
              <h3>{name}</h3>
            </div>
            {isChallege ? (
              <>
                <div className={styles.challengeDescription}>
                  <span id="text">Desafío: {challenge}</span>
                  <span id="text">Dificultad: {difficulty}</span>
                  <span id="text">Fuente: {source}</span>
                </div>
                {dataDescription.map((text) => (
                  <p
                    data-text="text"
                    key={text.paragraph}
                    className={styles.pDescriptionPersonal}
                  >
                    {text.paragraph}
                  </p>
                ))}
              </>
            ) : (
              <>
                {dataDescription.map((text) => (
                  <p
                    data-text="text"
                    key={text.paragraph}
                    className={styles.pDescriptionPersonal}
                  >
                    {text.paragraph}
                  </p>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;