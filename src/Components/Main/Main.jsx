import { Suspense } from "react";
import { Hero } from "../Hero/Hero";
import s from "./Main.module.scss";
import { AboutMe } from "../AboutMe/AboutMe";
import { Technologies } from "../Technologies/Technologies";
import { Projects } from "../Projects/Projects";
import { motion } from "framer-motion";
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Main = () => {
  return (
    <div className={s.container}>
      <Hero />

      <Suspense fallback={<div className={s.loader}>Loading...</div>}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <AboutMe />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Technologies />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Projects />
        </motion.div>
      </Suspense>
    </div>
  );
};
