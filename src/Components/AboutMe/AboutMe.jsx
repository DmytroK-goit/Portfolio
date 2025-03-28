import s from "./AboutMe.module.scss";

export const AboutMe = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>About Me</h2>
      <p className={s.information}>
        Hi, my name is Dmytro. I’m 37 years old and I’m a Junior Fullstack
        Developer. I am an enthusiastic developer with a strong desire to learn
        and grow in the field of web technologies. My key qualities are
        responsibility, proactiveness, and a positive attitude. I am constantly
        learning and striving to master new technologies as well as improve my
        existing skills. I have experience in creating responsive and
        user-friendly interfaces, and for the server side of my projects, I use
        Node.js and MongoDB. My goal is to become a Senior Fullstack Developer,
        and I am working hard every day to achieve this.
      </p>
    </div>
  );
};
