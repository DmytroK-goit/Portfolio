import s from "./Footer.module.scss";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Logo } from "../Logo/Logo";
export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_cont}>
        <Logo />
        <p>© 2025</p>
        <address className={s.address}>
          <ul className={s.address_list}>
            {/* <li>
              <h3>Contact Owner</h3>
            </li> */}
            <li>
              <a
                href="mailto:k0vbasyuk.dim0n@gmail.com"
                className="text-blue-400 hover:underline"
              >
                <SiGmail />
              </a>
            </li>
            <li>
              <a
                href="tel:+380979638775"
                className="text-blue-400 hover:underline"
              >
                <FaPhoneAlt />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/doccuper"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DmytroK-goit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dmytro-kovbasiuk-b473002b9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
};
