import { useState } from "react";
import s from "./Header.module.scss";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={s.header}>
      <Logo />
      <nav className={`${s.nav} ${isMenuOpen ? s.open : ""}`}>
        <ul className={s.list}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#tech" onClick={closeMenu}>
              My Tech Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <button className={s.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </header>
  );
};
