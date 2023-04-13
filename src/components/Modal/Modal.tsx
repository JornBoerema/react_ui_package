import React from "react";
import { Button } from "../Button/Button";
import { ButtonVariant } from "../Button/ButtonVariant";
import { XClose } from "../icons/index.js";
import { ButtonSize } from "../Button/ButtonSize";

interface Props {
	visible: boolean;
	setVisible: (value: boolean) => void;
	title?: string;
	children: JSX.Element;
	width?: string;
}

export const Modal: React.FC<Props> = (props) => {
	return (
		<div
			className={`flex justify-center items-center fixed top-0 left-0 w-screen h-screen ease-in-out duration-150 bg-[#344054] ${
				props.visible ? "bg-opacity-70 backdrop-blur-sm" : "opacity-0 pointer-events-none"
			}`}
		>
			<div className="bg-white rounded-lg relative flex flex-col px-6 py-6 gap-8" style={{ width: props.width }}>
				<Button
					variant={ButtonVariant.tertiaryGray}
					size={ButtonSize.square}
					leadingicon={<XClose title={undefined} titleId={undefined} />}
					onClick={() => props.setVisible(!props.visible)}
					className="absolute right-6 top-6"
				/>
				<div className="flex flex-col justify-start items-start gap-5 w-full">
					{props.title && <p className="text-text-lg font-semibold text-gray-900">{props.title}</p>}
					{props.children}
				</div>
			</div>
		</div>
	);
};
