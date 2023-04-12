import React, { useState, useEffect } from "react";
import { ButtonVariant } from "./ButtonVariant";
import { ButtonSize } from "./ButtonSize";

interface Props {
	variant: ButtonVariant;
	size: ButtonSize;
	disabled?: boolean;
	leadingicon?: JSX.Element;
	trailingicon?: JSX.Element;
	onClick?: () => void;
	className?: string;
	children?: React.ReactNode;
}

export const Button: React.FC<Props> = (props) => {
	const [variantClass, setVariantClass] = useState("");
	const [sizeClass, setSizeClass] = useState("");
	const [iconSize, setIconSize] = useState(20);

	useEffect(() => {
		switch (props.variant) {
			case ButtonVariant.primary:
				setVariantClass("bg-primary-600 text-white hover:bg-primary-700 focus:shadow-primary-focus disabled:bg-primary-200");
				break;
			case ButtonVariant.secondaryGray:
				setVariantClass("bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:shadow-gray-focus disabled:text-gray-200 disabled: border-gray-200");
				break;
			case ButtonVariant.secondaryColor:
				setVariantClass("bg-primary-50 text-primary-700 hover:bg-primary-100 hover:text-primary-800 focus:shadow-primary-focus disabled:bg-primary-25 disabled:text-primary-300");
				break;
			case ButtonVariant.tertiaryGray:
				setVariantClass("bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-700 disabled:text-gray-300");
				break;
			case ButtonVariant.tertiaryColor:
				setVariantClass("bg-white text-primary-700 hover:bg-primary-50 hover:text-primary-800 disabled:text-primary-200");
				break;
			case ButtonVariant.error:
				setVariantClass("bg-error-600 text-white hover:bg-error-700 focus:shadow-error-focus disabled:bg-error-200");
				break;
			default:
				setVariantClass("bg-primary-600 text-white hover:bg-primary-700 focus:shadow-primary-focus disabled:bg-primary-200");
				break;
		}

		switch (props.size) {
			case ButtonSize.square:
				setSizeClass("p-2");
				break;
			case ButtonSize.sm:
				setSizeClass("px-3.5 py-2 gap-2 text-text-sm font-semibold");
				break;
			case ButtonSize.md:
				setSizeClass("px-4 py-2.5 gap-2 text-text-sm font-semibold");
				break;
			case ButtonSize.lg:
				setSizeClass("px-4.5 py-2.5 gap-2 text-text-md font-semibold");
				break;
			case ButtonSize.xl:
				setSizeClass("px-5 py-3 gap-2 text-text-md font-semibold");
				break;
			case ButtonSize.xxl:
				setSizeClass("px-7 py-4 gap-3 text-text-lg font-semibold");
				setIconSize(24);
				break;
			case ButtonSize.breadcrumb:
				setSizeClass("text-sm font-medium px-2 py-1");
				setIconSize(0);
				break;
			default:
				setSizeClass("px-3.5 py-2 gap-2 text-text-sm font-semibold");
				break;
		}
	}, []);

	return (
		<button
			type="button"
			disabled={props.disabled}
			onClick={props.onClick}
			className={`flex justify-center items-center gap-2 rounded-lg transition-all ${variantClass} ${sizeClass} ${props.className}`}
		>
			{props.leadingicon && React.cloneElement(props.leadingicon, { width: iconSize, height: iconSize })}
			{props.children ? props.children : ""}
			{props.trailingicon && React.cloneElement(props.trailingicon, { width: iconSize, height: iconSize })}
		</button>
	);
};
