import s from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={s.header}>
      <ul className={s.list}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Me</a>
        </li>
        <li>
          <a href="">Technologies</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>
    </div>
  );
};
