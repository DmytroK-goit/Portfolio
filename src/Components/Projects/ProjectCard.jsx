import { useTranslation } from "react-i18next";
import s from "./IndividualStyles.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { FcPrevious, FcNext } from "react-icons/fc";
import { FaHandPointRight } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index = 0) => {
    if (!project.images || project.images.length === 0) return;
    setCurrentIndex(index);
    setSelectedImg(project.images[index]);
  };

  const handleCloseModal = () => {
    setSelectedImg(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % project.images.length;
    setCurrentIndex(newIndex);
    setSelectedImg(project.images[newIndex]);
  };

  const prevImage = () => {
    const newIndex =
      (currentIndex - 1 + project.images.length) % project.images.length;
    setCurrentIndex(newIndex);
    setSelectedImg(project.images[newIndex]);
  };

  useEffect(() => {
    if (!selectedImg) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImg, currentIndex]);

  return (
    <div className={`${s.block_project} ${s[project.style]}`}>
      <h3 className={s.title}>{project.title}</h3>

      <div className={s.container}>
        <img
          className={s.project_img}
          src={project.preview}
          alt={project.title}
          onClick={() => openModal(0)}
        />

        <div>
          <p className={s.parag}>{t(`projects.${project.key}.desc`)}</p>

          <p className={s.role}>
            <strong>Role:</strong> {t(`projects.${project.key}.role`)}
          </p>

          <p className={s.tech}>
            <strong>Technologies:</strong> {t(`projects.${project.key}.tech`)}
          </p>
        </div>
      </div>

      <div className={s.cont_button}>
        <p>{t("projects.btn")}</p>
        <FaHandPointRight />

        <motion.a
          className={s.but}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          animate={{ scale: [1, 1.05, 0.95, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {project.title}
        </motion.a>
      </div>

      {selectedImg && (
        <div className={s.modalOverlay} onClick={handleCloseModal}>
          <div
            className={s.modalImageWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={s.modalCloseBtn} onClick={handleCloseModal}>
              <VscChromeClose />
            </button>

            <button className={s.prevBtn} onClick={prevImage}>
              <FcPrevious />
            </button>

            <img src={selectedImg} alt="project screenshot" />

            <button className={s.nextBtn} onClick={nextImage}>
              <FcNext />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
