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
          Hi, my name is Dmytro. I’m 37 years old and I’m a Junior Fullstack
          Developer. I am an enthusiastic developer with a strong desire to
          learn and grow in the field of web technologies. My key qualities are
          responsibility, proactiveness, and a positive attitude. I am
          constantly learning and striving to master new technologies as well as
          improve my existing skills. I have experience in creating responsive
          and user-friendly interfaces, and for the server side of my projects,
          I use Node.js and MongoDB. My goal is to become a Senior Fullstack
          Developer, and I am working hard every day to achieve this.
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
