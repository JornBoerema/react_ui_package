import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./components/Button/Button";
import { ButtonVariant } from "./components/Button/ButtonVariant";
import { ButtonSize } from "./components/Button/ButtonSize";
import { Input } from "./components/Form/Input";
import { InputType } from "./components/Form/InputType";
import { Modal } from "./components/Modal/Modal";
import { RemoveModal } from "./components/Modal/RemoveModal";

function App() {
	const { t, i18n } = useTranslation();

	const handleChangeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
		localStorage.setItem("lng", lng);
	};

	const [date, setDate] = useState(new Date().toString());
	const [selectedItem, setSelectedItem] = useState("");
	const [input, setInput] = useState("");
	const [checkbox, setCheckbox] = useState("");
	const [toggle, setToggle] = useState("");
	const [modalVisible, setModalVisible] = useState(false);
	const [removeModalVisible, setRemoveModalVisible] = useState(false);

	return (
		<>
			<div className="p-16 flex gap-5 justify-start items-start h-screen">
				<div className="flex flex-col gap-5 w-32">
					<Button variant={ButtonVariant.secondaryColor} size={ButtonSize.sm} onClick={() => handleChangeLanguage("en")}>
						{t("English")}
					</Button>
					<Button variant={ButtonVariant.secondaryColor} size={ButtonSize.sm} onClick={() => handleChangeLanguage("nl")}>
						{t("Dutch")}
					</Button>
				</div>
				<Button variant={ButtonVariant.secondaryColor} size={ButtonSize.sm} onClick={() => setModalVisible(!modalVisible)}>
					Open modal
				</Button>
				<Button variant={ButtonVariant.secondaryColor} size={ButtonSize.sm} onClick={() => setRemoveModalVisible(!removeModalVisible)}>
					Open remove modal
				</Button>
			</div>
			<Modal visible={modalVisible} setVisible={setModalVisible} title="Test modal">
				<div className="flex flex-col gap-5 w-full">
					<Input inputType={InputType.DatePicker} id="date" value={date} setValue={(value: string) => setDate(value)} label="Datepicker" fullwidth />
					<Input
						inputType={InputType.Dropdown}
						id="dropdown"
						value={selectedItem}
						setValue={(value: string) => setSelectedItem(value)}
						label="Dropdown"
						items={["Item 1", "Item 2"]}
						fullwidth
					/>
					<Input inputType={InputType.TextInput} id="textinput" value={input} setValue={(value: string) => setInput(value)} label="Textinput" fullwidth />
					<Input inputType={InputType.Checkbox} id="checkbox" value={checkbox} setValue={(value: string) => setCheckbox(value)} label="Checkbox" fullwidth />
					<Input inputType={InputType.Toggle} id="toggle" value={toggle} setValue={(value: string) => setToggle(value)} label="Toggle" fullwidth />
				</div>
			</Modal>
			<RemoveModal visible={removeModalVisible} setVisible={setRemoveModalVisible} ItemName="Item" />
		</>
	);
}

export default App;
