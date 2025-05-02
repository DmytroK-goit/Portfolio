import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
export const Portfolio = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpenModal = (imgSrc) => {
    setSelectedImg(imgSrc);
  };

  const handleCloseModal = () => {
    setSelectedImg(null);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedImg) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImg]);
  return (
    <div className={(s.block_project, s.portfolio)}>
      {" "}
      <h3 className={s.title}>Portfolio</h3>
      <div className={s.container}>
        <ul className={s.list}>
          <li>
            <img
              className={s.project_img}
              src="/portfolio/head_info.jpg"
              alt="Portfolio image"
            />
          </li>
        </ul>

        <div>
          <p className={s.parag}>
            Team project. A website with a responsive layout. Role: Team Lead,
            developer. As a team lead on the project, I needed to set up a
            GitHub repository for project contributors, as well as hook up
            styles with basic settings and fonts. As a team leader, I checked,
            accepted pull requests, and helped project participants. As a
            developer I was responsible for the "work-together" section.
          </p>
        </div>
      </div>
      <div className={s.cont_button}>
        <p>PRESS</p>
        <FaHandPointRight />
        <motion.a
          className={s.but}
          href="https://dmytrok-goit.github.io/project-js-group02/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          animate={{
            scale: [1, 1.05, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          Portfolio
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
            <img src={selectedImg} alt="Zoomed AquaTrack" />
          </div>
        </div>
      )}
    </div>
  );
};
