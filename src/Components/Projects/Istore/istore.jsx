import s from "../IndividualStyles.module.scss";
import head from "../../../images/finance/finace_app.jpg";
import { FaHandPointRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";

export const Istore = () => {
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
            IStore is a full-stack e-commerce application designed for seamless
            online shopping. It allows users to browse products, view detailed
            item pages, add products to the cart, and complete purchases
            securely. The platform features user authentication, role-based
            access (admin, user, guest), and product management through a
            connected backend. It also includes responsive design, real-time
            updates, and dynamic filtering to ensure a smooth and intuitive user
            experience across all devices. The project is built with Next.js,
            Redux Toolkit, TypeScript, Node.js, and MongoDB, integrating both
            front-end and back-end functionality for a complete shopping
            experience.
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
          animate={{
            scale: [1, 1.05, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
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
            <img src={selectedImg} alt="Zoomed AquaTrack" />
          </div>
        </div>
      )}
    </div>
  );
};
