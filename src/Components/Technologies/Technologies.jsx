import s from "./Technologies.module.scss";
import html from "../../images/svg/html-1.svg";
import css from "../../images/svg/css-3.svg";
import sass from "../../images/svg/sass-1.svg";
import JS from "../../images/svg/javascript-2.svg";
import react from "../../images/svg/react-2.svg";
import nodejs from "../../images/svg/nodejs-1.svg";
import redux from "../../images/svg/redux.svg";
import VSC from "../../images/svg/visual-studio-code-1.svg";
import Tailwind from "../../images/svg/tailwind-css-1.svg";
import Figma from "../../images/svg/figma-icon.svg";
import Postman from "../../images/svg/postman.svg";
import Mongo from "../../images/svg/mongodb-icon-1.svg";
import next from "../../images/svg/nextjs.svg";
import { motion } from "framer-motion";

export const Technologies = () => {
  return (
    <motion.div layout id="tech" className={s.container}>
      <h2 className={s.title}>My Tech Skills</h2>
      <motion.ul
        className={s.list}
        layout
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <li className={s.item}>
          <img src={html} alt="Html" />
          <p>HTML</p>
        </li>
        <li className={s.item}>
          <img src={css} alt="Css" />
          <p>CSS</p>
        </li>
        <li className={s.item}>
          <img src={sass} alt="Sass" />
          <p>SASS</p>
        </li>
        <li className={s.item}>
          <img src={JS} alt="JS" />
          <p>JS</p>
        </li>
        <li className={s.item}>
          <img src={react} alt="React" />
          <p>React</p>
        </li>
        <li className={s.item}>
          <img src={next} alt="Next" />
          <p>Next.js</p>
        </li>
        <li className={s.item}>
          <img src={nodejs} alt="NodeJS" />
          <p>NodeJS</p>
        </li>
        <li className={s.item}>
          <img src={Mongo} alt="Mongo" />
          <p>MongoDB</p>
        </li>
        <li className={s.item}>
          <img src={redux} alt="Redux" />
          <p>Redux</p>
        </li>
        <li className={s.item}>
          <img src={Tailwind} alt="Tailwind" />
          <p>Tailwind</p>
        </li>
        <li className={s.item}>
          <img src={VSC} alt="VS CODE" />
          <p>VS Code</p>
        </li>
        <li className={s.item}>
          <img src={Figma} alt="Figma" />
          <p>Figma</p>
        </li>
        <li className={s.item}>
          <img src={Postman} alt="Postman" />
          <p>Postman</p>
        </li>
      </motion.ul>
    </motion.div>
  );
};
