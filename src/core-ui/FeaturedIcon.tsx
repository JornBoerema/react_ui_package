import classNames from "classnames";
import React from "react";
import { theme } from "../theme/default";

interface Props {
	variant: "success" | "warning" | "error" | "primary";
	icon: JSX.Element;
}

export const FeaturedIcon: React.FC<Props> = (props) => {
	const { variant, icon } = props;

	return <div className={classNames(theme.featuredIcon.base, theme.featuredIcon.variant[variant])}>{React.cloneElement(icon, { width: 20, height: 20 })}</div>;
};
