import { Check } from "@bijvoorbeeldzo/icons";
import React from "react";

interface Props {
	id: string;
	defaultValue?: string;
	error?: boolean;
	value?: boolean;
	onChange?: (e: any) => void;
}

export const Checkbox: React.FC<Props> = (props) => {
	return (
		<div className="relative w-4 h-4">
			<input
				type="checkbox"
				id={props.id}
				defaultValue={props.defaultValue}
				checked={props.value}
				onChange={(e) => props.onChange && props.onChange(e)}
				className={`rounded-[0.250rem] cursor-pointer border w-full h-full transition-all appearance-none outline-none checked:bg-primary-50 checked:border-primary-600 ${
					props.error ? "border-error-300 focus:shadow-error-focus" : "border-gray-300 focus:shadow-primary-focus focus:border-primary-300"
				}`}
			/>
			{props.value && (
				<span className="absolute top-[1px] left-0 w-full h-full flex justify-center items-center text-primary-600 pointer-events-none">
					<Check width={12} height={12} />
				</span>
			)}
		</div>
	);
};
