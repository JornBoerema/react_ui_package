import React, { useState, useEffect } from "react";
import { FeaturedIcon } from "../FeaturedIcon/FeaturedIcon";
import { FeaturedIconVariant } from "../FeaturedIcon/FeaturedIconVariant";
import { ArrowDown, Edit01, SearchLg, Trash01, Check } from "../icons";
import { LoadingSpinner } from "../LoadingSpinner";
import { Button } from "../Button/Button";
import { ButtonVariant } from "../Button/ButtonVariant";
import { ButtonSize } from "../Button/ButtonSize";
import { useTranslation } from "react-i18next";
import { Tooltip } from "../Tooltip/Tooltip";
import { TooltipPosition } from "../Tooltip/TooltipPosition";
import { RemoveModal } from "../Modal/RemoveModal";
import { Modal } from "../Modal/Modal";

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

interface FormValues {
	field: string;
	value: string;
}

export const Table: React.FC<Props> = (props) => {
	const { t } = useTranslation();

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [sortColumn, setSortColumn] = useState("");
	const [sortDirection, setSortDirection] = useState("");
	const [pageNumber, setPageNumber] = useState(1);
	const [pageAmount] = useState(8);
	const [removePopupVisible, setRemovePopupVisible] = useState(false);
	const [addPopupVisible, setAddPopupVisible] = useState(true);
	const [selectedRow, setSelectedRow] = useState<any>();
	const [selectedRows, setSelectedRows] = useState<Array<string>>([]);
	const [allChecked, setAllChecked] = useState(false);
	const [addValues, setAddValues] = useState<Array<FormValues>>([]);

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
		console.log(addForm);
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
							title={undefined}
							titleId={undefined}
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
						<Check width={12} height={12} title={undefined} titleId={undefined} />
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
												<Check width={12} height={12} title={undefined} titleId={undefined} />
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
												<Tooltip title={t("Edit")} position={TooltipPosition.top}>
													<Button variant={ButtonVariant.secondaryColor} size={ButtonSize.square} leadingicon={<Edit01 title={undefined} titleId={undefined} />} />
												</Tooltip>
											)}
											{remove && (
												<Tooltip title={t("Remove")} position={TooltipPosition.top}>
													<Button
														variant={ButtonVariant.error}
														size={ButtonSize.square}
														leadingicon={<Trash01 title={undefined} titleId={undefined} />}
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
								<td colSpan={columns.length}>
									<div className="flex justify-center py-10">
										<LoadingSpinner />
									</div>
								</td>
							</tr>
						) : (
							<tr>
								<td colSpan={columns.length}>
									<div className="flex justify-center py-10">
										<div className="flex flex-col items-center max-w-[300px] text-center gap-2">
											<FeaturedIcon variant={FeaturedIconVariant.primary} icon={<SearchLg title={undefined} titleId={undefined} />} />
											<p className="text-md font-semibold text-gray-900">No records found</p>
											<p className="text-sm font-regular text-gray-600">We have found no records, create a new record or remove your search term</p>
										</div>
									</div>
								</td>
							</tr>
						)}
					</tbody>
				</table>
				{pagination && (
					<div className="flex justify-between px-6 pb-4 pt-3 border-t border-t-gray-200 items-center">
						<Button variant={ButtonVariant.secondaryGray} size={ButtonSize.sm} onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 1}>
							{t("Previous")}
						</Button>
						<p className="text-sm font-medium text-gray-700">
							{t("Page")} {pageNumber} {t("Of")} {pageAmount}
						</p>
						<Button variant={ButtonVariant.secondaryGray} size={ButtonSize.sm} onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber === pageAmount}>
							{t("Next")}
						</Button>
					</div>
				)}
			</div>
			<RemoveModal visible={removePopupVisible} setVisible={setRemovePopupVisible} ItemName={props.name} removeSelected={removeSelected} />
			{addForm && (
				<Modal visible={addPopupVisible} setVisible={setAddPopupVisible} title={addFormTitle}>
					<div className="flex flex-col gap-5 w-full">
						{addForm.map((row, i) => (
							<div className="w-full flex flex-col justify-start items-start gap-1.5" key={i}>
								<label htmlFor={i.toString()} className="text-sm font-medium text-gray-700">
									{row.title}
								</label>
								{row.type === "text" && (
									<input
										type="text"
										id={i.toString()}
										onChange={(e) => setAddValues([...addValues.filter((x) => x.field !== row.field), { field: row.field, value: e.target.value }])}
										className="w-full rounded-lg border px-3.5 py-1.5 transition-all text-gray-900 outline-none border-gray-300 focus:shadow-primary-focus focus:border-primary-300"
									/>
								)}
							</div>
						))}
					</div>
				</Modal>
			)}
		</>
	);
};
