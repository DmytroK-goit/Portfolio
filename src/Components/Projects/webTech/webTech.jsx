import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { VscChromeClose } from "react-icons/vsc";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const images = [
  "/webtech/webtech.webp",
  "/webtech/webtech2.jpg",
  "/webtech/webtech3.jpg",
];

export const WebTech = () => {
  const { t } = useTranslation();
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImg(images[index]);
  };

  const handleCloseModal = () => {
    setSelectedImg(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImg(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImg(images[newIndex]);
  };

  useEffect(() => {
    if (!selectedImg) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) nextImage();
      if (touchEndX > touchStartX + 50) prevImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
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
          src={images[0]}
          alt="WebTech preview"
          onClick={() => openModal(0)}
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
          animate={{ scale: [1, 1.05, 0.95, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
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

            <button className={s.prevBtn} onClick={prevImage}>
              <FcPrevious />
            </button>

            <img src={selectedImg} alt="WebTech screenshot" />

            <button className={s.nextBtn} onClick={nextImage}>
              <FcNext />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
