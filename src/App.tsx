import React from "react";
import { Button } from "./components/Button/Button";
import { ButtonVariant } from "./components/Button/ButtonVariant";
import { ButtonSize } from "./components/Button/ButtonSize";
import { Breadcrumb } from "./components/Breadcrumb";
import { Tooltip } from "./components/Tooltip/Tooltip";
import { TooltipPosition } from "./components/Tooltip/TooltipPosition";

function App() {
	return (
		<div className="p-16 flex gap-5 justify-start items-start h-screen">
			<Breadcrumb items={[{ title: "Page 1" }, { title: "Page 2" }]} />
			<Tooltip title="Submit" position={TooltipPosition.top}>
				<Button variant={ButtonVariant.secondaryColor} size={ButtonSize.sm}>
					Submit
				</Button>
			</Tooltip>
		</div>
	);
}

export default App;
