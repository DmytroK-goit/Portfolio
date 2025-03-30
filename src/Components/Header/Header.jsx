import s from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={s.header}>
      <ul className={s.list}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#tech">My Tech Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  );
};
