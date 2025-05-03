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

export const Hero = () => {
  return (
    <div id="home" className={s.container}>
      <div className={s.main_inf}>
        <div className={s.cont_info}>
          <h1 className={s.title}>
            <Typewriter
              words={["Dmytro Kovbasiuk"]}
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
        {/* <li className={s.contact_item}>
          <a href="tel:+380979638775">
            <img className={s.icon} src={phone} alt="Phone" />
            <p className={s.contact_text}>+38(097)963-87-75</p>
          </a>
        </li> */}

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
              {/* <p className={s.contact_text}>Telegram</p> */}
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
              {/* <p className={s.contact_text}>GitHub</p> */}
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
              {/* <p className={s.contact_text}>Gmail</p> */}
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
              {/* <p className={s.contact_text}>LinkedIn</p> */}
            </a>
          </motion.div>
        </li>
      </ul>
    </div>
  );
};
