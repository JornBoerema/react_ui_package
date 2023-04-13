import React from "react";

interface Props {
	id: string;
	defaultValue?: string;
	error?: boolean;
	value: boolean;
	setValue: (value: boolean) => void;
}

export const Toggle: React.FC<Props> = (props) => {
	return (
		<label className="relative inline-flex items-center cursor-pointer">
			<input type="checkbox" id={props.id} defaultValue={props.defaultValue} onClick={() => props.setValue(!props.value)} className={`sr-only peer`} />
			<div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:shadow-primary-focus rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
		</label>
	);
};
