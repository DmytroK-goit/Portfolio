import { useState } from "react";
import s from "./Header.module.scss";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "../Logo/Logo";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../SwitchTransator/LanguageSwitcher";

export const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <motion.header layout className={s.header}>
      <Logo />

      <LanguageSwitcher className="px-4" />

      <button className={s.menuButton} onClick={toggleMenu}>
        <FiMenu size={24} />
      </button>

      <nav className={`${s.nav} ${isMenuOpen ? s.open : ""}`}>
        {isMenuOpen && (
          <button
            className={s.closeButton}
            onClick={() => setIsMenuOpen(false)}
          >
            <FiX size={24} />
          </button>
        )}

        <ul className={s.list}>
          <li>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              {t("nav.home")}
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              {t("nav.about")}
            </a>
          </li>
          <li>
            <a href="#tech" onClick={() => setIsMenuOpen(false)}>
              {t("nav.tech")}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              {t("nav.projects")}
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};
