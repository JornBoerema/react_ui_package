import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import nl from "./translations/nl.json";

i18next.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		nl: {
			translation: nl,
		},
	},
	lng: localStorage.getItem("lng") || "en",
});

export default i18next;
