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

export const AboutMe = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);
  return (
    <motion.div layout id="about" className={s.container}>
      <div className={s.abut_block}>
        <ShinyText>
          <h2 className={s.title}>About Me</h2>
        </ShinyText>
        <div className={s.information}>
          <p>
            I’m a Fullstack Developer passionate about creating modern,
            efficient, and user-friendly web applications. Responsible,
            proactive, and always eager to learn — I continuously improve my
            skills and explore new technologies.
          </p>
          <p>
            I specialize in building responsive and accessible interfaces using
            HTML, CSS, JavaScript, React, Redux, and TypeScript. On the backend,
            I work with Node.js, Express, and MongoDB, and I’m experienced with
            RESTful APIs and JWT authentication.
          </p>
          <p>
            As a team lead on several projects, I’ve coordinated development
            processes, supported teammates, and ensured smooth collaboration.
          </p>
          <p>
            Currently, I’m focused on enhancing my expertise and applying it
            through real-world projects that make an impact.
          </p>
        </div>
      </div>
      <div>
        <ShinyText>
          <h3 className={s.title}>My Education</h3>
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
