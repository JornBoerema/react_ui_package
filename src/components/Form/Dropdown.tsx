import React, { useState } from "react";
import { Check, ChevronDown } from "../icons";

interface Props {
	id: string;
	value: string;
	setValue: (value: string) => void;
	items: Array<string>;
	error?: boolean;
	fullwidth?: boolean;
}

export const Dropdown: React.FC<Props> = (props) => {
	const [opened, setOpened] = useState(false);

	return (
		<>
			<div className={`relative ${props.fullwidth && "w-full"}`}>
				<input
					type="text"
					id={props.id}
					value={props.value}
					onClick={() => setOpened(!opened)}
					readOnly
					className={`w-full rounded-lg border px-3.5 py-1.5 transition-all text-gray-900 outline-none cursor-pointer ${
						props.error ? "border-error-300 focus:shadow-error-focus" : "border-gray-300 focus:shadow-primary-focus focus:border-primary-300"
					}`}
				/>
				<span className={`absolute h-full top-0 right-2 flex items-center justify-center text-gray-500 pointer-events-none duration-200 ease-in-out ${opened ? "rotate-180" : ""}`}>
					<ChevronDown width={20} height={20} title={undefined} titleId={undefined} />
				</span>
				<div
					className={`absolute p-1.5 top-12 duration-150 ease-in-out z-10 rounded-lg bg-white border border-gray-300 flex flex-col w-full ${
						!opened ? "opacity-0 pointer-events-none" : "opacity-1"
					}`}
				>
					{props.items.map((item) => (
						<div
							className={`flex items-center rounded-md py-2.5 pr-2 pl-2.5 cursor-pointer ${props.value === item ? "bg-gray-50" : "bg-white hover:bg-gray-50"}`}
							onClick={() => {
								props.setValue(item);
								setOpened(false);
							}}
							key={item}
						>
							<p className="w-full ">{item}</p>
							{props.value === item && <Check width={20} height={20} title={undefined} titleId={undefined} className="text-primary-600" />}
						</div>
					))}
				</div>
			</div>
		</>
	);
};
