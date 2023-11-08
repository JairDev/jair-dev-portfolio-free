import React, { useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import emailjs from "@emailjs/browser";

import { Icon } from "@iconify/react";
// import linkedinFill from "@iconify/icons-akar-icons/linkedin-fill";
import telegramFill from "@iconify/icons-akar-icons/telegram-fill";
import instagramFill from "@iconify/icons-akar-icons/instagram-fill";

import Button from "components/Button/Button";

import styles from "./FormatContact.module.css";

const socialIcons = [
  // {
  //   name: linkedinFill,
  //   label: "Linkedin",
  //   url: "https://www.linkedin.com/in/alfredo-moscoso-desarrollador-frontend/",
  // },
  { name: telegramFill, label: "Telegram", url: "https://t.me/jairdev" },
  {
    name: instagramFill,
    label: "Instagram",
    url: "https://www.instagram.com/jairdevep/",
  },
];

function FormContact() {
  let send = false;
  const formRef = useRef(null);
  const spanStatusRef = useRef(null);
  const [buttonState, setButtonState] = useState("Enviando...");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  useEffect(() => {
    emailjs.init("QQDER6PZw0GDyGhYI");
  });

  const onSubmit = (e) => {
    console.log(e);
    setButtonState("Enviando...");
    send = !send;
    if (send) {
      spanStatusRef.current.classList.add(styles.send);
    }
    emailjs.sendForm("service_g", "my_portfolio", formRef.current).then(
      function () {
        setButtonState("¡ Mensaje enviado !");
        send = !send;
        setTimeout(() => {
          spanStatusRef.current.classList.remove(styles.send);
        }, 500);
      },
      function (error) {
        setButtonState("¡ Mensaje no enviado !");
        setTimeout(() => {
          spanStatusRef.current.classList.remove(styles.send);
        }, 500);
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <>
      <h2
        className={`${styles.contactTitle} ${styles.titleSections}`}
        data-effect17
        data-animate-title
      >
        Trabajemos juntos
      </h2>
      <div className={styles.appContentFooterFormContact}>
        <div className={styles.wrapperForm}>
          <form
            ref={formRef}
            id="contact"
            className={styles.formContact}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.contentInput}>
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="fromName"
                {...register("fromName", { required: true })}
              ></input>
              <p className={styles.required}>
                {errors.fromName?.type === "required" && (
                  <ErrorMessage
                    errors={errors}
                    name="fromName"
                    render={({ messages }) => {
                      return messages
                        ? Object.entries(messages).map(([type]) => (
                            <span key={type}>
                              {"¡Ey! no se te olvide tu nombre"}
                            </span>
                          ))
                        : null;
                    }}
                  />
                )}
              </p>
            </div>

            <div className={styles.contentInput}>
              <label htmlFor="correo">Correo</label>
              <input
                id="correo"
                name="userEmail"
                {...register("userEmail", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Ingresa un correo electrónico válido",
                  },
                })}
              ></input>
              <p className={styles.required}>
                {errors.userEmail?.type === "pattern" && (
                  <ErrorMessage
                    errors={errors}
                    name="userEmail"
                    render={({ messages }) => {
                      console.log("messages", errors);
                      return messages
                        ? Object.entries(messages).map(([type]) => (
                            <span key={type}>{errors.userEmail.message}</span>
                          ))
                        : null;
                    }}
                  />
                )}
                {errors.userEmail?.type === "required" && (
                  <ErrorMessage
                    errors={errors}
                    name="userEmail"
                    render={({ messages }) => {
                      return messages
                        ? Object.entries(messages).map(([type]) => (
                            <span key={type}>
                              {"Dime tu correo para poder contactarte."}
                            </span>
                          ))
                        : null;
                    }}
                  />
                )}
              </p>
            </div>
            <div className={styles.contentInput}>
              <label htmlFor="sobre-proyecto">Cuéntame sobre tu proyecto</label>
              <textarea
                id="sobre-proyecto"
                name="message"
                {...register("message", {
                  required: true,
                })}
                rows="6"
              />
              <p className={styles.required}>
                {errors.message?.type === "required" && (
                  <ErrorMessage
                    errors={errors}
                    name="message"
                    render={({ messages }) => {
                      return messages
                        ? Object.entries(messages).map(([type]) => (
                            <span key={type}>
                              {"Háblame un poco acerca de tu genial idea !"}
                            </span>
                          ))
                        : null;
                    }}
                  />
                )}
              </p>
            </div>
            <div className={styles.wrapperButtonForm}>
              <span ref={spanStatusRef} className={styles.statusMailSend}>
                {buttonState}
              </span>
              <div className={styles.contentButtonForm}>
                <Button classButton="contactButton">Enviar</Button>
              </div>
            </div>
          </form>
          <div className={styles.contentSocial}>
            {socialIcons.map((icon) => (
              <div key={icon.label} className={styles.socialItem}>
                <a href={icon.url} target="_blank" rel="noopener noreferrer">
                  <Icon
                    icon={icon.name}
                    style={{ fontSize: "32px", color: "#1F1340" }}
                  />
                  <span className={styles.labelSocial}>{icon.label}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.copyright}>2023 ALFREDO MOSCOSO</div>
        <div className={styles.copyright}>Caracas - Venezuela</div>
      </div>
    </>
  );
}

export default FormContact;
