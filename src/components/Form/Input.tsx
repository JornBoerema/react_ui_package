import React from "react";
import { InputType } from "./InputType";
import { TextInput } from "./TextInput";
import { Dropdown } from "./Dropdown";
import { DatePicker } from "./DatePicker";
import { Checkbox } from "./Checkbox";
import { Toggle } from "./Toggle";

interface Props {
	id: string;
	inputType: InputType;
	type?: string;
	label?: string;
	defaultValue?: string;
	error?: string;
	value: string;
	setValue: (value: any) => void;
	items?: Array<string>;
	fullwidth?: boolean;
}

export const Input: React.FC<Props> = (props) => {
	return (
		<div className={`flex flex-col justify-start items-start gap-1.5`}>
			{props.label && (
				<label htmlFor={props.id} className="text-sm font-medium text-gray-700">
					{props.label}
				</label>
			)}
			{props.inputType === InputType.TextInput && (
				<TextInput
					type={props.type || "text"}
					id={props.id}
					value={props.value}
					setValue={props.setValue}
					defaultValue={props.defaultValue}
					error={props.error ? true : false}
					fullwidth={props.fullwidth}
				/>
			)}
			{props.inputType === InputType.Dropdown && (
				<Dropdown id={props.id} value={props.value} setValue={props.setValue} items={props.items || []} error={props.error ? true : false} fullwidth={props.fullwidth} />
			)}
			{props.inputType === InputType.DatePicker && <DatePicker id={props.id} value={props.value} setValue={props.setValue} error={props.error ? true : false} fullwidth={props.fullwidth} />}
			{props.inputType === InputType.Checkbox && <Checkbox id={props.id} value={Boolean(props.value)} setValue={props.setValue} error={props.error ? true : false} />}
			{props.inputType === InputType.Toggle && <Toggle id={props.id} value={Boolean(props.value)} setValue={props.setValue} error={props.error ? true : false} />}
			{props.error && <p className="text-sm font-regular text-error-500">{props.error}</p>}
		</div>
	);
};
