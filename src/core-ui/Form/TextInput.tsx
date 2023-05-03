import React from "react";

interface Props {
	id: string;
	type: string;
	defaultValue?: string;
	error?: boolean;
	value: string;
	fullwidth?: boolean;
	onChange?: (e: any) => void;
}

export const TextInput: React.FC<Props> = (props) => {
	return (
		<input
			type={props.type}
			id={props.id}
			defaultValue={props.defaultValue}
			onChange={(e) => props.onChange && props.onChange(e)}
			className={`${props.fullwidth && "w-full"} rounded-lg border px-3.5 py-1.5 transition-all text-gray-900 outline-none ${
				props.error ? "border-error-300 focus:shadow-error-focus" : "border-gray-300 focus:shadow-primary-focus focus:border-primary-300"
			}`}
		/>
	);
};
