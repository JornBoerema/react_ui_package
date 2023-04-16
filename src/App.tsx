import React from "react";
import { Table } from "./components/Table/Table";
import TableProperties from "./components/Table/table.json";

function App() {
	return (
		<>
			<div className="p-16 flex gap-5 justify-start items-start h-screen w-screen">
				<Table file={TableProperties} name="Record" />
			</div>
		</>
	);
}

export default App;
