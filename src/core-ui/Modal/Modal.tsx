import { XClose } from "@bijvoorbeeldzo/icons";
import classNames from "classnames";
import React from "react";
import { theme } from "../../theme/default";
import { Button } from "../Button";

interface Props {
	visible: boolean;
	setVisible: (value: boolean) => void;
	title?: string;
	children: JSX.Element;
	width?: string;
}

export const Modal: React.FC<Props> = (props) => {
	const { visible, setVisible, title, children, width } = props;

	return (
		<div className={classNames(theme.modal.backgroundBase, visible && theme.modal.backgroundVisible, !visible && theme.modal.backgroundHidden)}>
			<div className={classNames(theme.modal.modalBackground)} style={{ width: width }}>
				<Button variant="tertiaryGray" size="square" leadingicon={<XClose />} onClick={() => setVisible(!visible)} className="absolute right-6 top-6" />
				<div className={classNames(theme.modal.contentWrapper)}>
					{title && <p className={classNames(theme.modal.title)}>{title}</p>}
					{children}
				</div>
			</div>
		</div>
	);
};
