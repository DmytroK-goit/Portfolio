import s from "./Hero.module.scss";
import avatar from "../../Img/Avatar.jpg";
export const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.cont_info}>
        <h1>Dmytro Kovbasiuk</h1>
        <p className={s.information}>
          I am an enthusiastic Junior Fullstack Developer with a strong desire
          to learn and grow in the field of web technologies. My goal is to
          reach the position of Senior Fullstack Developer, and I am working
          hard to achieve this. I have experience in creating responsive and
          user-friendly interfaces using HTML, CSS, JavaScript, React, and
          Redux. Server part for my projects it`s NodeJS and Mongo DB
        </p>
      </div>
      <div className={s.container_avatar}>
        <img src={avatar} alt="Avatar" />
      </div>
    </div>
  );
};
