import { ChevronRight, HomeLine } from "@bijvoorbeeldzo/icons";
import React from "react";
import { Button } from "./Button";

interface ItemProps {
	title: string;
	onClick?: () => void;
}

interface Props {
	items: Array<ItemProps>;
	className?: string;
}

export const Breadcrumb: React.FC<Props> = (props) => {
	return (
		<div className={`flex items-center gap-2 ${props.className}`}>
			<HomeLine width={24} height={24} className="text-gray-500" />
			{props.items &&
				props.items.map((item: ItemProps, i) => (
					<React.Fragment key={item.title}>
						<ChevronRight width={16} height={16} className="text-gray-300" />
						<Button variant={i + 1 === props.items.length ? "secondaryColor" : "tertiaryGray"} size="breadcrumb">
							{item.title}
						</Button>
					</React.Fragment>
				))}
		</div>
	);
};
