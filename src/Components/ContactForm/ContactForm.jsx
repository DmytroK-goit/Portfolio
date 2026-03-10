import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import s from "./ContactForm.module.scss";

export const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

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
          form.current.reset();
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
      <h2 className={s.title}>Contact Me</h2>
      <div className={s.form_block}>
        <img src="/form/Form_man.png" alt="Man in table" />
        <form ref={form} onSubmit={sendEmail} className={s.form}>
          <input type="text" name="name" placeholder="Your Name" required />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="8"
            required
          />

          <button type="submit">Send Message</button>
        </form>

        {status && <p className={s.status}>{status}</p>}
      </div>
    </motion.div>
  );
};
