import { Calendar, ChevronLeft, ChevronRight } from "@bijvoorbeeldzo/icons";
import React, { useEffect, useState } from "react";
import { GetShortDayNameByIndex, daysInMonth, formatDateFromString, getFirstWeekdayOfMonth } from "../../utils/DateUtils";
import { Button } from "../Button";

interface Props {
	id: string;
	error?: boolean;
	value: string;
	setValue: (value: string) => void;
	fullwidth?: boolean;
}

interface CalendarMenuProps {
	value: string;
	setValue: (value: string) => void;
	setOpened: (value: boolean) => void;
}

export const CalendarMenu: React.FC<CalendarMenuProps> = (props) => {
	const [locale, setLocale] = useState("en-GB");

	useEffect(() => {
		if (localStorage.getItem("lng") === "nl") {
			setLocale("nl-NL");
		} else if (localStorage.getItem("lng") === "en") {
			setLocale("en-GB");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [localStorage.getItem("lng")]);

	const handlePreviousMonthClick = () => {
		const date = new Date(props.value);
		if (date.getMonth() + 1 === 1) {
			props.setValue(date.getFullYear() - 1 + "-" + String("0" + 12).slice(-2) + "-" + String("0" + date.getDate()).slice(-2) + "T00:00:00");
		} else {
			props.setValue(date.getFullYear() + "-" + String("0" + date.getMonth()).slice(-2) + "-" + String("0" + date.getDate()).slice(-2) + "T00:00:00");
		}
	};

	const handleNextMonthClick = () => {
		const date = new Date(props.value);
		if (date.getMonth() === 11) {
			props.setValue(date.getFullYear() + 1 + "-" + String("0" + 1).slice(-2) + "-" + String("0" + date.getDate()).slice(-2) + "T00:00:00");
		} else {
			props.setValue(date.getFullYear() + "-" + String("0" + (date.getMonth() + 2)).slice(-2) + "-" + String("0" + date.getDate()).slice(-2) + "T00:00:00");
		}
	};

	return (
		<div className="flex flex-col items-center w-72 p-2 rounded-lg bg-white border border-gray-300">
			<div className="flex justify-between items-center w-full">
				<Button leadingicon={<ChevronLeft />} variant="tertiaryGray" size="square" onClick={handlePreviousMonthClick} />
				<p className="text-md font-semibold text-gray-700">{formatDateFromString("DD MMM YYYY", props.value, locale)}</p>
				<Button leadingicon={<ChevronRight />} variant="tertiaryGray" size="square" onClick={handleNextMonthClick} />
			</div>
			<div className="grid grid-cols-7">
				<div className="w-10 h-10 rounded-full cursor-pointer flex justify-center items-center text-sm font-medium text-gray-700">{GetShortDayNameByIndex(1)}</div>
				<div className="w-10 h-10 rounded-full cursor-pointer flex justify-center items-center text-sm font-medium text-gray-700">{GetShortDayNameByIndex(2)}</div>
				<div className="w-10 h-10 rounded-full cursor-pointer flex justify-center items-center text-sm font-medium text-gray-700">{GetShortDayNameByIndex(3)}</div>
				<div className="w-10 h-10 rounded-full cursor-pointer flex justify-center items-center text-sm font-medium text-gray-700">{GetShortDayNameByIndex(4)}</div>
				<div className="w-10 h-10 rounded-full cursor-pointer flex justify-center items-center text-sm font-medium text-gray-700">{GetShortDayNameByIndex(5)}</div>
				<div className="w-10 h-10 rounded-full cursor-pointer flex justify-center items-center text-sm font-medium text-gray-700">{GetShortDayNameByIndex(6)}</div>
				<div className="w-10 h-10 rounded-full cursor-pointer flex justify-center items-center text-sm font-medium text-gray-700">{GetShortDayNameByIndex(7)}</div>
				{getFirstWeekdayOfMonth(props.value) === 2 && <div className={`col-start-1 col-end-2`}></div>}
				{getFirstWeekdayOfMonth(props.value) === 3 && <div className={`col-start-1 col-end-3`}></div>}
				{getFirstWeekdayOfMonth(props.value) === 4 && <div className={`col-start-1 col-end-4`}></div>}
				{getFirstWeekdayOfMonth(props.value) === 5 && <div className={`col-start-1 col-end-5`}></div>}
				{getFirstWeekdayOfMonth(props.value) === 6 && <div className={`col-start-1 col-end-6`}></div>}
				{getFirstWeekdayOfMonth(props.value) === 0 && <div className={`col-start-1 col-end-7`}></div>}
				{[...Array(daysInMonth(props.value))].map((_e, i) => (
					<div
						key={i}
						onClick={() =>
							props.setValue(
								new Date(props.value).getFullYear() + "-" + String("0" + (new Date(props.value).getMonth() + 1)).slice(-2) + "-" + String("0" + (i + 1)).slice(-2) + "T00:00:00"
							)
						}
						className={`w-10 h-10 rounded-full cursor-pointer flex justify-center items-center text-sm font-regular ${
							i + 1 === new Date(props.value).getDate() ? "bg-primary-600 text-white z-10" : "bg-white hover:bg-gray-50 text-gray-700"
						}`}
					>
						{i + 1}
					</div>
				))}
			</div>
			<div className="flex justify-end w-full">
				<div className="text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50 px-2 py-2 rounded-lg" onClick={() => props.setValue(new Date().toString())}>
					Today
				</div>
			</div>
		</div>
	);
};

export const DatePicker: React.FC<Props> = (props) => {
	const [opened, setOpened] = useState(false);
	const [locale, setLocale] = useState("en-GB");

	useEffect(() => {
		if (localStorage.getItem("lng") === "nl") {
			setLocale("nl-NL");
		} else if (localStorage.getItem("lng") === "en") {
			setLocale("en-GB");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [localStorage.getItem("lng")]);

	return (
		<div className={`relative ${props.fullwidth && "w-full"}`}>
			<input
				type="text"
				id={props.id}
				value={formatDateFromString("DD MMM YYYY", props.value, locale)}
				onClick={() => setOpened(!opened)}
				readOnly
				className="w-full rounded-lg border px-3.5 py-1.5 transition-all text-gray-900 outline-none cursor-pointer border-gray-300 focus:shadow-primary-focus focus:border-primary-300"
			/>
			<span className="absolute h-full top-0 right-2 flex items-center justify-center text-gray-500 pointer-events-none duration-200 ease-in-out">
				<Calendar width={20} height={20} />
			</span>
			<div className={`absolute top-12 z-10 duration-150 ease-in-out ${opened ? "opacity-1" : "opacity-0 pointer-events-none"}`}>
				<CalendarMenu value={props.value} setValue={props.setValue} setOpened={setOpened} />
			</div>
		</div>
	);
};
