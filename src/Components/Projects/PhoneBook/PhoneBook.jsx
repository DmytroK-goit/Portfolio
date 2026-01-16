import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export const PhoneBook = () => {
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
    <div className={`${s.block_project} ${s.phoneBook}`}>
      <h3 className={s.title}>PhoneBook</h3>
      <div className={s.container}>
        <img
          className={s.project_img}
          width="550"
          src="/PhoneBook/mainForms.jpg"
          alt="PhoneBook image"
        />

        <div>
          <p className={s.parag}>{t("projects.phonebook")}</p>
        </div>
      </div>
      <div className={s.cont_button}>
        <p>{t("projects.btn")}</p>
        <FaHandPointRight />
        <motion.a
          className={s.but}
          href="https://phone-book-full-stack.vercel.app/"
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
          PhoneBook
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
