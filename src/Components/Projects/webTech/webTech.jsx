import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export const WebTech = () => {
  const { t } = useTranslation();
  const [selectedImg, setSelectedImg] = useState(null);

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
    <div className={`${s.block_project} ${s.webTech}`}>
      <h3 className={s.title}>WebTech</h3>
      <div className={s.container}>
        <img
          className={s.project_img}
          width="550"
          src="/webtech/webtech.webp"
          alt="Trucks Campers image"
        />

        <div>
          <p className={s.parag}>{t("projects.webTech")}</p>
        </div>
      </div>
      <div className={s.cont_button}>
        <p>{t("projects.btn")}</p>
        <FaHandPointRight />
        <motion.a
          className={s.but}
          href="https://webtech-pied.vercel.app/"
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
          WebTech
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
