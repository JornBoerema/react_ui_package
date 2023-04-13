import { useTranslation } from "react-i18next";

export const getMonthName = (date: Date, locale: string) => {
	return date.toLocaleDateString(locale, { month: "long" });
};

export const getDayName = (date: Date, locale: string) => {
	return date.toLocaleDateString(locale, { weekday: "long" });
};

export const getDayNameShort = (date: Date, locale: string) => {
	return date.toLocaleDateString(locale, { weekday: "short" });
};

export const isLeapYear = (year: number) => {
	return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
};

export const daysInMonth = (value: string) => {
	const date = new Date(value);
	return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const getFirstWeekdayOfMonth = (date: string) => {
	const value = new Date(date);
	return new Date(value.getFullYear() + "-" + (value.getMonth() + 1) + "-01").getDay();
};

export const GetShortDayNameByIndex = (index: number) => {
	const { t } = useTranslation();

	switch (index) {
		case 1:
			return t("Monday").slice(0, 2);
		case 2:
			return t("Tuesday").slice(0, 2);
		case 3:
			return t("Wednesday").slice(0, 2);
		case 4:
			return t("Thursday").slice(0, 2);
		case 5:
			return t("Friday").slice(0, 2);
		case 6:
			return t("Saterday").slice(0, 2);
		case 7:
			return t("Sunday").slice(0, 2);
	}
};

export const formatDateFromString = (format: string, value: string, locale: string) => {
	const date = new Date(value);
	return formatDate(format, date, locale);
};

export const formatDate = (format: string, value: Date, locale: string) => {
	let formattedDate = format;

	formattedDate = formattedDate.replace("DDDD", getDayName(value, locale));
	formattedDate = formattedDate.replace("DDD", getDayNameShort(value, locale));
	formattedDate = formattedDate.replace("DD", value.getDate().toString());

	formattedDate = formattedDate.replace("MMM", getMonthName(value, locale));
	formattedDate = formattedDate.replace("MM", (value.getMonth() + 1).toString());

	formattedDate = formattedDate.replace("YYYY", value.getFullYear().toString());
	formattedDate = formattedDate.replace("YY", value.getFullYear().toString().slice(-2));

	return formattedDate;
};
