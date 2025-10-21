import { useState } from "react";
import s from "./Header.module.scss";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "../Logo/Logo";
import { motion } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <motion.header layout className={s.header}>
      <Logo />
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
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              About Me
            </a>
          </li>
          <li>
            <a href="#tech" onClick={() => setIsMenuOpen(false)}>
              My Tech Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};
