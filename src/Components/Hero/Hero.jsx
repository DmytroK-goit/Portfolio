import s from "./Hero.module.scss";
import avatar from "../../images/avatar.jpg";
import avatar2 from "../../images/foto.webp";

import phone from "../../images/svg/contacts/phone_icon.svg";
import telegram from "../../images/svg/contacts/telegram-1.svg";
import linkedin from "../../images/svg/contacts/linkedin-icon.svg";
import gmail from "../../images/svg/contacts/gmail-icon-1.svg";
import github from "../../images/svg/contacts/github-icon-2.svg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      layout
      id="home"
      className={s.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className={s.main_inf}>
        <div className={s.cont_info}>
          <h1 className={s.title}>
            <Typewriter
              words={[t("hero.name")]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>

          <p className={s.information}>Fullstack Developer</p>
        </div>
        <div className={s.container_avatar}>
          <img
            className={s.avatar}
            src={avatar2}
            alt="Dmytro Kovbasiuk Avatar"
          />
        </div>
      </div>
      <ul className={s.contacts_list}>
        <li className={s.contact_item}>
          <motion.div
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.5 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <a
              href="https://t.me/doccuper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={s.icon} src={telegram} alt="Telegram" />
            </a>
          </motion.div>
        </li>
        <li className={s.contact_item}>
          <motion.div
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.5 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <a
              href="https://github.com/DmytroK-goit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={s.icon} src={github} alt="GitHub" />
            </a>
          </motion.div>
        </li>
        <li className={s.contact_item}>
          <motion.div
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.5 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <a href="mailto:k0vbasyuk.dim0n@gmail.com">
              <img className={s.icon} src={gmail} alt="Gmail" />
            </a>
          </motion.div>
        </li>
        <li className={s.contact_item}>
          <motion.div
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.5 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <a
              href="https://www.linkedin.com/in/dmytro-kovbasiuk-b473002b9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={s.icon} src={linkedin} alt="LinkedIn" />
            </a>
          </motion.div>
        </li>
      </ul>
    </motion.div>
  );
};
