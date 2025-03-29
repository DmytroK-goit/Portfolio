import s from "./AquaTrack.module.scss";
import head from "../../../images/AquaTrack/head.jpg";
import mainPage from "../../../images/AquaTrack/mainPage.jpg";
import settings from "../../../images/AquaTrack/settings.jpg";
export const AquaTrack = () => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>AquaTrack</h3>
      <ul className={s.list}>
        <li>
          <img src={head} alt="Head page" />
        </li>
        <li>
          <img src={mainPage} alt="mainPage" />
        </li>
        <li>
          <img src={settings} alt="settings" />
        </li>
      </ul>
      <p className={s.parag}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam
        nam quibusdam libero velit, hic laborum error incidunt voluptatum
        quisquam aut, impedit rerum molestiae blanditiis architecto ea.
        Doloremque, saepe sed.
      </p>
      <a href="https://aqua-track-group-01.vercel.app/" target="_blank">
        AquaTrack
      </a>
    </div>
  );
};
