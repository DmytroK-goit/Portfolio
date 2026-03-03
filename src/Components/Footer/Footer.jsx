import s from "./Footer.module.scss";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Logo } from "../Logo/Logo";
import { motion } from "framer-motion";

export const Footer = ({ isUpwork }) => {
  return (
    <motion.footer layout className={s.footer}>
      <div className={s.footer_cont}>
        <Logo />
        <p>© 2026</p>

        {!isUpwork ? (
          <address className={s.address}>
            <ul className={s.address_list}>
              <li>
                <a href="mailto:k0vbasyuk.dim0n@gmail.com">
                  <SiGmail />
                </a>
              </li>

              <li>
                <a href="tel:+380979638775">
                  <FaPhoneAlt />
                </a>
              </li>

              <li>
                <a
                  href="https://t.me/doccuper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/DmytroK-goit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/dmytro-kovbasiuk-b473002b9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </address>
        ) : (
          <p className={s.upworkText}>Contact me via Upwork</p>
        )}
      </div>
    </motion.footer>
  );
};
