import s from "./Hero.module.scss";
import avatar from "../../images/avatar.jpg";
export const Hero = () => {
  return (
    <div id="home" className={s.container}>
      <div className={s.cont_info}>
        <h1>Dmytro Kovbasiuk</h1>
        <p className={s.information}>Junior Fullstack Developer</p>
      </div>
      <div className={s.container_avatar}>
        <img src={avatar} alt="Avatar" />
      </div>
      <ul>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
    </div>
  );
};
