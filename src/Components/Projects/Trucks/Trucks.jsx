import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import head from "../../../images/Trucks/main_page.jpg";
import mainPage from "../../../images/Trucks/head.jpg";
import settings from "../../../images/Trucks/TrackInfo.png";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export const Trucks = () => {
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
    <div className={`${s.block_project} ${s.trucks}`}>
      <h3 className={s.title}>Trucks Campers</h3>
      <div className={s.container}>
        <img
          className={s.project_img}
          width="550"
          src="/Trucks/head.jpg"
          alt="Trucks Campers image"
        />

        <div>
          <p className={s.parag}>{t("projects.truck")}</p>
        </div>
      </div>
      <div className={s.cont_button}>
        <p>{t("projects.btn")}</p>
        <FaHandPointRight />
        <motion.a
          className={s.but}
          href="https://travel-trucks-wine.vercel.app/"
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
          Trucks Сampers
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
