import { InfoCircle, XClose } from "@bijvoorbeeldzo/icons";
import classNames from "classnames";
import React from "react";
import { theme } from "../theme/default";
import { Tooltip } from "./Tooltip";

interface Props {
	variant: "primary" | "info" | "error" | "success" | "warning";
	title: string;
	content: string;
}

export const Alert: React.FC<Props> = (props) => {
	const { variant, title, content } = props;

	return (
		<div className={classNames(theme.alert.base, theme.alert.variant[variant].base)}>
			<div className={classNames(theme.alert.closeButtonWrapper)}>
				<Tooltip title="Close" position="top">
					<XClose width={20} height={20} className={classNames(theme.alert.closeButton, theme.alert.variant[variant].closeButton)} />
				</Tooltip>
			</div>
			<InfoCircle width={20} height={20} className={classNames(theme.alert.variant[variant].infoCircle)} />
			<div>
				<p className={classNames(theme.alert.variant[variant].title)}>{title}</p>
				<p className={classNames(theme.alert.variant[variant].content)}>{content}</p>
			</div>
		</div>
	);
};
