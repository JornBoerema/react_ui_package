import React from "react";
import { TooltipPosition } from "./TooltipPosition";

interface Props {
	title: string;
	position: TooltipPosition;
	children: JSX.Element;
	className?: string;
}

export const Tooltip: React.FC<Props> = (props) => {
	return (
		<div id="tooltip" className={`relative cursor-pointer pointer group ${props.className}`}>
			<div>{props.children}</div>
			<span
				className={`mb-1 absolute hidden group-hover:inline-block bg-gray-800 text-white font-medium text-sm p-2 whitespace-nowrap rounded-md ${
					props.position === TooltipPosition.top ? " left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]" : ""
				} ${props.position === TooltipPosition.bottom ? " left-1/2 -translate-x-1/2 top-[calc(100%+5px)]" : ""} ${
					props.position === TooltipPosition.left ? " top-1/2 -translate-y-1/2 right-[calc(100%+5px)]" : ""
				} ${props.position === TooltipPosition.right ? " top-1/2 -translate-y-1/2 left-[calc(100%+5px)]" : ""}`}
			>
				{props.title}
			</span>
			<span
				className={`mb-1 absolute hidden group-hover:inline-block border-[6px] ${
					props.position === TooltipPosition.top ? " left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-gray-800" : ""
				} ${props.position === TooltipPosition.bottom ? " left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-b-gray-800" : ""} ${
					props.position === TooltipPosition.left ? " top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r-0 border-l-gray-800" : ""
				} ${props.position === TooltipPosition.right ? " top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-r-gray-800" : ""}`}
			></span>
		</div>
	);
};
