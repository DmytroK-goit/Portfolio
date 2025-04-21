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
import ShinyText from "../ShinyText/ShinyText";

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
        <ShinyText>
          <h2 className={s.title}>About Me</h2>
        </ShinyText>
        <div className={s.information}>
          <p>
            Hi, I’m a Fullstack Developer with a strong passion for web
            development. Enthusiastic, responsible, and proactive — I’m always
            eager to learn and grow. I specialize in building responsive,
            accessible, and user-friendly interfaces using HTML, CSS,
            JavaScript, React, Redux, and TypeScript.
          </p>
          <p>
            On the backend, I work with Node.js, Express, and MongoDB, and I’m
            familiar with RESTful APIs, authentication (JWT), and cloud services
            like AWS. I also use tools such as Webpack, Git, and Postman for
            efficient development and debugging.
          </p>
          <p>
            I frequently take on the team lead role in projects — coordinating
            tasks, supporting teammates, and ensuring smooth collaboration.
          </p>
          <p>
            Currently, I’m focused on sharpening my skills and gaining hands-on
            experience through real-world projects.
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
    </div>
  );
};
