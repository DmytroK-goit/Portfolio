import { useTranslation } from "react-i18next";
import s from "./LanguageSwitcher.module.css";
import ukFlag from "../../images/unitedkingdom.gif";
import ukraineFlag from "../../images/ukraine.gif";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className={s.switcher}>
      <button
        className={`${s.button} ${i18n.language === "en" ? s.active : ""}`}
        onClick={() => i18n.changeLanguage("en")}
      >
        <img className={s.imgflag} src={ukFlag} width="20" alt="EN" />
        <span>EN</span>
      </button>

      <button
        className={`${s.button} ${i18n.language === "uk" ? s.active : ""}`}
        onClick={() => i18n.changeLanguage("uk")}
      >
        <img className={s.imgflag} src={ukraineFlag} width="20" alt="EN" />
        <span>UA</span>
      </button>
    </div>
  );
};
