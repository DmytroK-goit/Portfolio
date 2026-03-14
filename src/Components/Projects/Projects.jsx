import { useState } from "react";
import { useTranslation } from "react-i18next";
import { EffectCube, Pagination } from "swiper/modules";
import s from "./Projects.module.scss";
import { projects } from "../../dbProjects/dbProjects";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "./ProjectCard";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <motion.div layout id="projects" className={s.container}>
      <h2 className={s.title}>{t("projects.title")}</h2>

      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className={s.mySwiper}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={
                activeIndex === index
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 70 }
              }
              transition={{ duration: 0.6 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};
