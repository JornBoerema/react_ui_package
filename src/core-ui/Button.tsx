import classNames from "classnames";
import React from "react";
import { theme } from "../theme/default";

interface Props {
	variant: "primary" | "secondaryGray" | "secondaryColor" | "tertiaryGray" | "tertiaryColor" | "error";
	size: "sm" | "md" | "lg" | "xl" | "xxl" | "breadcrumb" | "square";
	disabled?: boolean;
	leadingicon?: JSX.Element;
	trailingicon?: JSX.Element;
	onClick?: () => void;
	className?: string;
	children?: React.ReactNode;
}

export const Button: React.FC<Props> = (props) => {
	const { variant, size, disabled, leadingicon, trailingicon, onClick, className, children } = props;

	return (
		<button type="button" disabled={disabled} onClick={onClick} className={classNames(theme.button.base, theme.button.variant[variant], theme.button.size[size], className)}>
			{leadingicon && React.cloneElement(leadingicon, { width: 20, height: 20 })}
			{children ? children : null}
			{trailingicon && React.cloneElement(trailingicon, { width: 20, height: 20 })}
		</button>
	);
};
