import { AboutMe } from "../AboutMe/AboutMe";
import { Hero } from "../Hero/Hero";
import { Projects } from "../Projects/Projects";
import { Technologies } from "../Technologies/Technologies";
import s from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={s.container}>
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
    </div>
  );
};
