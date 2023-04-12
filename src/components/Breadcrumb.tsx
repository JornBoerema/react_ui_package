import React from "react";
import { Button } from "./Button/Button";
import { ButtonVariant } from "./Button/ButtonVariant";
import { ButtonSize } from "./Button/ButtonSize";
import { ChevronRight, HomeLine } from "./icons/index.js";

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
			<HomeLine width={24} height={24} className="text-gray-500" title={undefined} titleId={undefined} />
			{props.items &&
				props.items.map((item: ItemProps, i) => (
					<React.Fragment key={item.title}>
						<ChevronRight width={16} height={16} className="text-gray-300" title={undefined} titleId={undefined} />
						<Button variant={i + 1 === props.items.length ? ButtonVariant.secondaryColor : ButtonVariant.tertiaryGray} size={ButtonSize.breadcrumb}>
							{item.title}
						</Button>
					</React.Fragment>
				))}
		</div>
	);
};
