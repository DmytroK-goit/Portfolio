import s from "./AboutMe.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import firstPageEdu from "../../images/Certf/certf_page-1.webp";
import secondPageEdu from "../../images/Certf/certf_page-2.webp";
import thirdPageEdu from "../../images/Certf/certf_page-3.webp";
import forthPageEdu from "../../images/Certf/certf_page-4.webp";
import { useEffect, useRef } from "react";
import ShinyText from "../ShinyText/ShinyText";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const swiperRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);
  return (
    <motion.div
      layout
      id="about"
      className={s.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <div className={s.abut_block}>
        <ShinyText>
          <h2 className={s.title}>{t("about.title")}</h2>
        </ShinyText>
        <div className={s.information}>
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <p>{t("about.p4")}</p>
        </div>
      </div>
      <div>
        <ShinyText>
          <h3 className={s.title}>{t("education.title")}</h3>
        </ShinyText>

        <Swiper
          ref={swiperRef}
          effect={"flip"}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiperEducation"
          style={{ overflow: "hidden" }}
        >
          <SwiperSlide>
            <img src={forthPageEdu} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thirdPageEdu} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={secondPageEdu} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={firstPageEdu} />
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};
