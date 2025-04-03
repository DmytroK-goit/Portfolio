import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import head from "../../../images/SparkArt/main.jpg";
import mainPage from "../../../images/SparkArt/about.jpg";
import settings from "../../../images/SparkArt/how.png";
export const SparkArt = () => {
  return (
    <div>
      <h3 className={s.title}>SparkArt</h3>
      <div className={s.container}>
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
        <div>
          <p className={s.parag}>
            The landing page for Spark Art showcases a creative and visually
            appealing design focused on presenting the brand's services and
            offerings. It emphasizes user-friendly navigation and an engaging
            layout, likely aimed at attracting potential customers or clients.
            The design is modern, with a clear focus on aesthetics and
            functionality.
          </p>
        </div>
      </div>{" "}
      <div className={s.cont_button}>
        <p>PRESS</p>
        <FaHandPointRight />
        <a
          href="https://dmytrok-goit.github.io/stp-7973/"
          className={s.but}
          target="_blank"
        >
          SparkArt
        </a>
      </div>
    </div>
  );
};
