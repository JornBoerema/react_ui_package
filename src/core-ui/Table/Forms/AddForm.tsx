import React, { useState } from "react";
import { Input } from "../../Form/Input";
import { InputType } from "../../Form/InputType";
import { Modal } from "../../Modal/Modal";

interface FormProps {
	title?: string;
	field: string;
	type: string;
	dropdownEndpoint?: string;
}

interface Props {
	addForm: Array<FormProps>;
	addFormTitle: string;
	addPopupVisible: boolean;
	setAddPopupVisible: (value: boolean) => void;
}

interface FormValues {
	field: string;
	value: string;
}

export const AddForm: React.FC<Props> = (props) => {
	const [addValues, setAddValues] = useState<Array<FormValues>>([]);

	return (
		props.addForm && (
			<Modal visible={props.addPopupVisible} setVisible={props.setAddPopupVisible} title={props.addFormTitle}>
				<div className="flex flex-col gap-5 w-full">
					{addValues.map((row) => (
						<p>
							{row.field}: {row.value}
						</p>
					))}
					{props.addForm.map((row, i) =>
						row.type === "text" ? (
							<Input
								id={i.toString()}
								inputType={InputType.TextInput}
								type="text"
								label={row.title || ""}
								onChange={(e) => setAddValues([...addValues.filter((x) => x.field !== row.field), { field: row.field, value: e.target.value }])}
								fullwidth
							/>
						) : (
							<></>
						)
					)}
				</div>
			</Modal>
		)
	);
};
