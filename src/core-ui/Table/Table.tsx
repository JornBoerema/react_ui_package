import { ArrowDown, Check, Edit01, Trash01 } from "@bijvoorbeeldzo/icons";
import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import { LoadingSpinner } from "../LoadingSpinner";
import { RemoveModal } from "../Modal/RemoveModal";
import { Tooltip } from "../Tooltip";
import { EmptyState } from "./EmptyState";
import { AddForm } from "./Forms/AddForm";
import { Pagination } from "./Pagination";

interface ColumnProps {
	title?: string;
	field: string;
	sort?: boolean;
	width?: number;
}

interface FormProps {
	title?: string;
	field: string;
	type: string;
	dropdownEndpoint?: string;
}

interface TableProps {
	getEndpoint: string;
	deleteEndpoint?: string;
	pagination?: boolean;
	checkbox?: boolean;
	edit?: boolean;
	remove?: boolean;
	columns: Array<ColumnProps>;
	masterdetail?: boolean;
	addForm: Array<FormProps>;
	addFormTitle: string;
}

interface Props {
	file: TableProps;
	baseurl?: string;
	name: string;
}

interface CheckboxProps {
	id: string;
}

export const Table: React.FC<Props> = (props) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [sortColumn, setSortColumn] = useState("");
	const [sortDirection, setSortDirection] = useState("");
	const [pageNumber, setPageNumber] = useState(1);
	const [pageAmount] = useState(8);
	const [removePopupVisible, setRemovePopupVisible] = useState(false);
	const [addPopupVisible, setAddPopupVisible] = useState(false);
	const [selectedRow, setSelectedRow] = useState<any>();
	const [selectedRows, setSelectedRows] = useState<Array<string>>([]);
	const [allChecked, setAllChecked] = useState(false);

	const getEndpoint = props.file.getEndpoint;
	const deleteEndpoint = props.file.deleteEndpoint;
	const pagination = props.file.pagination;
	// const masterdetail = props.file.masterdetail;
	const checkbox = props.file.checkbox;
	const edit = props.file.edit;
	const remove = props.file.remove;
	const columns = props.file.columns;
	const addForm = props.file.addForm;
	const addFormTitle = props.file.addFormTitle;

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		return fetch((props.baseurl || "") + getEndpoint, {
			method: "GET",
			headers: {
				"content-type": "application/json",
				authorization: "Bearer " + JSON.parse(sessionStorage.getItem("token") || "{}").access_token,
			},
		})
			.then((data) => data.json())
			.then((json) => {
				if (json.Items) {
					setData(json.Items);
					setLoading(false);
				} else {
					setData(json);
					setLoading(false);
				}
			});
	};

	const removeSelected = async () => {
		return fetch((props.baseurl || "") + deleteEndpoint, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: "Bearer " + JSON.parse(sessionStorage.getItem("token") || "{}").access_token,
			},
			body: JSON.stringify({
				id: selectedRow.id,
			}),
		});
	};

	const ColumnHeader: React.FC<ColumnProps> = (props) => {
		if (props.sort) {
			return (
				<th
					className="px-6 py-3 text-start cursor-pointer"
					style={{ width: `${props.width}px` }}
					onClick={() => {
						setSortColumn(props.field);
						sortDirection === "asc" ? setSortDirection("desc") : setSortDirection("asc");
					}}
				>
					<div className="flex items-center gap-2">
						{props.title || props.field}
						<ArrowDown
							width={15}
							height={15}
							className={`duration-150 ease-in-out ${sortColumn === props.field && sortDirection === "desc" ? "rotate-180" : sortColumn !== props.field ? "opacity-0" : ""}`}
						/>
					</div>
				</th>
			);
		} else {
			return (
				<th className="px-6 py-3 text-start cursor-pointer" style={{ width: `${props.width}px` }}>
					<div className="flex items-center gap-2">{props.title || props.field}</div>
				</th>
			);
		}
	};

	const RowCheckbox: React.FC<CheckboxProps> = (props) => {
		return (
			<div className="relative w-4 h-4">
				<input
					type="checkbox"
					checked={selectedRows.includes(props.id) || allChecked}
					onChange={() => (selectedRows.includes(props.id) ? setSelectedRows(selectedRows.filter((x) => x !== props.id)) : setSelectedRows([...selectedRows, props.id]))}
					onClick={() => setAllChecked(false)}
					className="rounded-[0.250rem] cursor-pointer border w-full h-full transition-all appearance-none outline-none checked:bg-primary-50 checked:border-primary-600 border-gray-300 focus:shadow-primary-focus focus:border-primary-300"
				/>
				{(selectedRows.includes(props.id) || allChecked) && (
					<span className="absolute top-[2px] left-0 w-full h-full flex justify-center items-center text-primary-600 pointer-events-none">
						<Check width={12} height={12} />
					</span>
				)}
			</div>
		);
	};

	return (
		<>
			<div className="w-full h-full bg-white border border-gray-200 rounded-lg border-separate border-spacing-0 overflow-hidden flex flex-col justify-between select-none">
				<table className={`w-full table-fixed ${!(data && !loading && data.length) && "h-full"}`}>
					<thead>
						<tr className="bg-gray-50 border-b border-b-gray-200 text-xs font-medium text-gray-600">
							{checkbox && (
								<th className="px-6 py-3" style={{ width: "50px" }}>
									<div className="relative w-4 h-4">
										<input
											type="checkbox"
											checked={allChecked}
											onChange={() => setAllChecked(!allChecked)}
											className="rounded-[0.250rem] cursor-pointer border w-full h-full transition-all appearance-none outline-none checked:bg-primary-50 checked:border-primary-600 border-gray-300 focus:shadow-primary-focus focus:border-primary-300"
										/>
										{allChecked && (
											<span className="absolute top-[2px] left-0 w-full h-full flex justify-center items-center text-primary-600 pointer-events-none">
												<Check width={12} height={12} />
											</span>
										)}
									</div>
								</th>
							)}
							{columns.map((col) => (
								<ColumnHeader key={col.title} title={col.title} field={col.field} sort={col.sort} width={col.width} />
							))}
							{(edit || remove) && <th style={{ width: `${48 * 2 + 48}px` }}></th>}
						</tr>
					</thead>
					<tbody>
						{data && !loading && data.length !== 0 ? (
							data.map((row, i) => (
								<tr className="border-b border-b-gray-200" key={i}>
									{checkbox && (
										<td className="px-6 py-3">
											<RowCheckbox id={row["id"]} />
										</td>
									)}
									{columns.map((col, j) => (
										<td className="px-6 py-3 text-start text-gray-600 text-sm font-regular" key={j}>
											{row[col.field]}
										</td>
									))}
									{(edit || remove) && (
										<td className="px-6 py-3 flex justify-end items-center gap-3">
											{edit && (
												<Tooltip title="Edit" position="top">
													<Button variant="secondaryColor" size="square" leadingicon={<Edit01 />} />
												</Tooltip>
											)}
											{remove && (
												<Tooltip title="Remove" position="top">
													<Button
														variant="error"
														size="square"
														leadingicon={<Trash01 />}
														onClick={() => {
															setSelectedRow(row);
															setRemovePopupVisible(true);
														}}
													/>
												</Tooltip>
											)}
										</td>
									)}
								</tr>
							))
						) : loading ? (
							<tr>
								<td
									colSpan={
										(edit || remove) && checkbox
											? columns.length + 2
											: edit || (remove && !checkbox)
											? columns.length + 1
											: !(edit || remove) && checkbox
											? columns.length + 1
											: columns.length
									}
								>
									<div className="flex justify-center py-10">
										<LoadingSpinner />
									</div>
								</td>
							</tr>
						) : (
							<tr>
								<td
									colSpan={
										(edit || remove) && checkbox
											? columns.length + 2
											: edit || (remove && !checkbox)
											? columns.length + 1
											: !(edit || remove) && checkbox
											? columns.length + 1
											: columns.length
									}
								>
									<EmptyState />
								</td>
							</tr>
						)}
					</tbody>
				</table>
				{pagination && <Pagination pageAmount={pageAmount} pageNumber={pageNumber} setPageNumber={setPageNumber} />}
			</div>
			<RemoveModal visible={removePopupVisible} setVisible={setRemovePopupVisible} ItemName={props.name} removeSelected={removeSelected} />
			<AddForm addForm={addForm} addFormTitle={addFormTitle} addPopupVisible={addPopupVisible} setAddPopupVisible={setAddPopupVisible} />
		</>
	);
};
