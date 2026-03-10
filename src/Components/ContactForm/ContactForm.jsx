import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import s from "./ContactForm.module.scss";
import { useTranslation } from "react-i18next";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState("");

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),

    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),

    message: yup
      .string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_u5q4tdn",
        "template_rjwr7w4",
        form.current,
        "mX8v7esN_nY_Buz5-",
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          reset();
        },
        () => {
          setStatus("Something went wrong...");
        },
      );
  };

  return (
    <motion.div
      id="contactMe"
      className={s.container}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className={s.title}>{t("contact.title")}</h2>

      <div className={s.form_block}>
        <img src="/form/Form_man.png" alt="Man in table" />

        <form ref={form} onSubmit={handleSubmit(sendEmail)} className={s.form}>
          <label>{t("contact.name")}</label>
          <input type="text" placeholder="Your Name" {...register("name")} />
          {errors.name && <p className={s.error}>{errors.name.message}</p>}

          <label>{t("contact.email")}</label>
          <input type="email" placeholder="Your Email" {...register("email")} />
          {errors.email && <p className={s.error}>{errors.email.message}</p>}

          <label>{t("contact.msg")}</label>
          <textarea
            rows="8"
            placeholder="Your Message"
            {...register("message")}
          />
          {errors.message && (
            <p className={s.error}>{errors.message.message}</p>
          )}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : t("contact.btn")}
          </button>

          {status && <p className={s.status}>{status}</p>}
        </form>
      </div>
    </motion.div>
  );
};
