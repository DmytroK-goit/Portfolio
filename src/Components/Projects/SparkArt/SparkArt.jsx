import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
export const SparkArt = () => {
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
    <div className={(s.block_project, s.sparkart)}>
      <h3 className={s.title}>SparkArt</h3>
      <div className={s.container}>
        <ul className={s.list}>
          <li>
            <img
              className={s.project_img}
              src="/SparkArt/main.jpg"
              alt="SparkArt image"
            />
          </li>
        </ul>

        <div>
          <p className={s.parag}>
            The landing page for Spark Art showcases a creative and visually
            appealing design focused on presenting the brand's services and
            offerings. It emphasizes user-friendly navigation and an engaging
            layout, likely aimed at attracting potential customers or clients.
            The design is modern, with a clear focus on aesthetics and
            functionality.
          </p>
        </div>
      </div>{" "}
      <div className={s.cont_button}>
        <p>PRESS</p>
        <FaHandPointRight />
        <motion.a
          className={s.but}
          href="https://dmytrok-goit.github.io/stp-7973/"
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
          SparkArt
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
