import classNames from "classnames";
import React from "react";
import { theme } from "../theme/default";

interface Props {
	title: string;
	position: "top" | "bottom" | "left" | "right";
	children: JSX.Element;
	className?: string;
}

export const Tooltip: React.FC<Props> = (props) => {
	const { title, position, children, className } = props;

	return (
		<div id="tooltip" className={classNames(theme.tooltip.base.wrapper, className)}>
			<div>{children}</div>
			<span className={classNames(theme.tooltip.base.rectangle, theme.tooltip[position].rectangle)}>{title}</span>
			<span className={classNames(theme.tooltip.base.arrow, theme.tooltip[position].arrow)}></span>
		</div>
	);
};
