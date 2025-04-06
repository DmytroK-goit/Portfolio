import s from "./AboutMe.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import firstPageEdu from "../../images/Certf/certf_page-1.jpg";
import secondPageEdu from "../../images/Certf/certf_page-2.jpg";
import thirdPageEdu from "../../images/Certf/certf_page-3.jpg";
import forthPageEdu from "../../images/Certf/certf_page-4.jpg";
import { useEffect, useRef } from "react";

export const AboutMe = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);
  return (
    <div id="about" className={s.container}>
      <div className={s.abut_block}>
        <h2 className={s.title}>About Me</h2>
        <p className={s.information}>
          Hi, I'm Dmytro — a 37-year-old Junior Fullstack Developer with a
          strong passion for web development. I’m enthusiastic, responsible, and
          proactive, always eager to learn and grow. I specialize in building
          responsive and user-friendly interfaces, and for the backend, I work
          with Node.js and MongoDB. Currently, I'm focused on sharpening my
          skills and gaining hands-on experience.
        </p>
      </div>
      <div>
        <h3 className={s.title}>My Education</h3>

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
    </div>
  );
};
