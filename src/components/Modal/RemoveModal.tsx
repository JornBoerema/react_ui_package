import React from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "./Modal";
import { Trash01 } from "../icons";
import { Button } from "../Button/Button";
import { ButtonVariant } from "../Button/ButtonVariant";
import { ButtonSize } from "../Button/ButtonSize";

interface Props {
	visible: boolean;
	setVisible: (value: boolean) => void;
	ItemName: string;
	removeSelected: () => void;
}

export const RemoveModal: React.FC<Props> = (props) => {
	const { t } = useTranslation();

	return (
		<Modal visible={props.visible} setVisible={props.setVisible} width="400px">
			<>
				<div className="flex flex-col justify-center items-center gap-5 w-full">
					<div className="bg-error-100 border-[8px] border-error-50 rounded-full text-error-600 p-2.5">
						<Trash01 width={24} height={24} title={undefined} titleId={undefined} />
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-text-lg font-semibold text-gray-900 text-center">
							{t("Remove")} {props.ItemName.toLowerCase()}
						</p>
						<p className="text-text-sm font-regular text-gray-600 text-center">{t("AreYouSureRemove").replace("{item}", props.ItemName.toLowerCase())}</p>
					</div>
				</div>
				<div className="flex justify-between gap-3 w-full">
					<Button variant={ButtonVariant.secondaryGray} size={ButtonSize.lg} className="w-full" onClick={() => props.setVisible(false)}>
						{t("Cancel")}
					</Button>
					<Button variant={ButtonVariant.error} size={ButtonSize.lg} className="w-full" onClick={() => props.setVisible(false)}>
						{t("Remove")}
					</Button>
				</div>
			</>
		</Modal>
	);
};
