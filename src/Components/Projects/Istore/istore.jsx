import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";

export const Istore = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpenModal = (imgSrc) => setSelectedImg(imgSrc);
  const handleCloseModal = () => setSelectedImg(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleCloseModal();
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
    <div className={`${s.block_project} ${s.istore}`}>
      <h3 className={s.title}>Istore</h3>
      <div className={s.container}>
        <img
          className={s.project_img}
          width="550"
          src="/Istore/istore.webp"
          alt="Istore image"
        />

        <div>
          <p className={s.parag}>
            IStore is a full-stack e-commerce application for seamless online
            shopping. Users can browse products, view details, add items to the
            cart, and complete purchases. It features authentication with
            role-based access (admin, user, demo). The demo role allows
            exploring the app safely without affecting real data. Demo access:{" "}
            <br />
            <strong>Email:</strong> demo.admin@gmail.com <br />
            <strong>Password:</strong> 111111 <br />
            Built with Next.js, Redux Toolkit, Node.js, and MongoDB, it provides
            a responsive and smooth shopping experience.
          </p>
        </div>
      </div>

      <div className={s.cont_button}>
        <p>PRESS</p>
        <FaHandPointRight />
        <motion.a
          className={s.but}
          href="https://i-store-lyart.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          animate={{ scale: [1, 1.05, 0.95, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        >
          IStore
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
            <img src={selectedImg} alt="Zoomed Istore" />
          </div>
        </div>
      )}
    </div>
  );
};
