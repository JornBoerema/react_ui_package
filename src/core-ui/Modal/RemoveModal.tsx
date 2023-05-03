import { Trash01 } from "@bijvoorbeeldzo/icons";
import classNames from "classnames";
import React from "react";
import { theme } from "../../theme/default";
import { Button } from "../Button";
import { FeaturedIcon } from "../FeaturedIcon";
import { Modal } from "./Modal";

interface Props {
	visible: boolean;
	setVisible: (value: boolean) => void;
	ItemName: string;
	removeSelected: () => void;
}

export const RemoveModal: React.FC<Props> = (props) => {
	const { visible, setVisible, ItemName, removeSelected } = props;

	return (
		<Modal visible={visible} setVisible={setVisible} width="400px">
			<>
				<div className={classNames(theme.removeModal.contentWrapper)}>
					<FeaturedIcon variant="error" icon={<Trash01 />} />
					<div className={classNames(theme.removeModal.textWrapper)}>
						<p className={classNames(theme.removeModal.header)}>Remove {ItemName.toLowerCase()}</p>
						<p className={classNames(theme.removeModal.text)}>Are you sure you want to remove item</p>
					</div>
				</div>
				<div className={classNames(theme.removeModal.actionsWrapper)}>
					<Button variant="secondaryGray" size="lg" className="w-full" onClick={() => setVisible(false)}>
						Cancel
					</Button>
					<Button
						variant="error"
						size="lg"
						className="w-full"
						onClick={() => {
							setVisible(false);
							removeSelected();
						}}
					>
						Remove
					</Button>
				</div>
			</>
		</Modal>
	);
};
