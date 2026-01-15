import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../public/locales/en/translation.json";
import uk from "../public/locales/uk/translation.json";

const savedLang = localStorage.getItem("lang") || "en";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uk: { translation: uk },
  },
  lng: savedLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
