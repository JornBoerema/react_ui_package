import React from "react";
import { Button } from "../Button";

interface Props {
	pageAmount: number;
	pageNumber: number;
	setPageNumber: (pageNumber: number) => void;
}

export const Pagination: React.FC<Props> = (props) => {
	return (
		<div className="flex justify-between px-6 pb-4 pt-3 border-t border-t-gray-200 items-center">
			<Button variant="secondaryGray" size="sm" onClick={() => props.setPageNumber(props.pageNumber - 1)} disabled={props.pageNumber === 1}>
				Previous
			</Button>
			<p className="text-sm font-medium text-gray-700">
				Page {props.pageNumber} of {props.pageAmount}
			</p>
			<Button variant="secondaryGray" size="sm" onClick={() => props.setPageNumber(props.pageNumber + 1)} disabled={props.pageNumber === props.pageAmount}>
				Next
			</Button>
		</div>
	);
};
