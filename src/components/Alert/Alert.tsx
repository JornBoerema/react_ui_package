import React from "react";
import { InfoCircle, XClose } from "../icons/index.js";
import { Tooltip } from "../Tooltip/Tooltip";
import { AlertVariant } from "./AlertVariant.js";
import { TooltipPosition } from "../Tooltip/TooltipPosition.js";

interface Props {
	variant: AlertVariant;
	title: string;
	content: string;
}

export const Alert: React.FC<Props> = (props) => {
	switch (props.variant) {
		case AlertVariant.primary:
			return (
				<div className="bg-primary-25 p-4 pr-12 border border-primary-300 rounded-lg flex gap-4 relative">
					<div className="absolute right-3 top-3">
						<Tooltip title="Close" position={TooltipPosition.top}>
							<XClose width={20} height={20} className="text-primary-500 cursor-pointer" title={undefined} titleId={undefined} />
						</Tooltip>
					</div>
					<InfoCircle width={20} height={20} className="text-primary-600" title={undefined} titleId={undefined} />
					<div>
						<p className="text-sm font-semibold text-primary-700">{props.title}</p>
						<p className="text-sm font-regular text-primary-700">{props.content}</p>
					</div>
				</div>
			);
		case AlertVariant.info:
			return (
				<div className="bg-gray-25 p-4 pr-12 border border-gray-300 rounded-lg flex gap-4 relative">
					<div className="absolute right-3 top-3">
						<Tooltip title="Close" position={TooltipPosition.top}>
							<XClose width={20} height={20} className="text-gray-500 cursor-pointer" title={undefined} titleId={undefined} />
						</Tooltip>
					</div>
					<InfoCircle width={20} height={20} className="text-gray-600" title={undefined} titleId={undefined} />
					<div>
						<p className="text-sm font-semibold text-gray-700">{props.title}</p>
						<p className="text-sm font-regular text-gray-700">{props.content}</p>
					</div>
				</div>
			);
		case AlertVariant.error:
			return (
				<div className="bg-error-25 p-4 pr-12 border border-error-300 rounded-lg flex gap-4 relative">
					<div className="absolute right-3 top-3">
						<Tooltip title="Close" position={TooltipPosition.top}>
							<XClose width={20} height={20} className="text-error-500 cursor-pointer" title={undefined} titleId={undefined} />
						</Tooltip>
					</div>
					<InfoCircle width={20} height={20} className="text-error-600" title={undefined} titleId={undefined} />
					<div>
						<p className="text-sm font-semibold text-error-700">{props.title}</p>
						<p className="text-sm font-regular text-error-700">{props.content}</p>
					</div>
				</div>
			);
		case AlertVariant.warning:
			return (
				<div className="bg-warning-25 p-4 pr-12 border border-warning-300 rounded-lg flex gap-4 relative">
					<div className="absolute right-3 top-3">
						<Tooltip title="Close" position={TooltipPosition.top}>
							<XClose width={20} height={20} className="text-warning-500 cursor-pointer" title={undefined} titleId={undefined} />
						</Tooltip>
					</div>
					<InfoCircle width={20} height={20} className="text-warning-600" title={undefined} titleId={undefined} />
					<div>
						<p className="text-sm font-semibold text-warning-700">{props.title}</p>
						<p className="text-sm font-regular text-warning-700">{props.content}</p>
					</div>
				</div>
			);
		case AlertVariant.success:
			return (
				<div className="bg-success-25 p-4 pr-12 border border-success-300 rounded-lg flex gap-4 relative">
					<div className="absolute right-3 top-3">
						<Tooltip title="Close" position={TooltipPosition.top}>
							<XClose width={20} height={20} className="text-success-500 cursor-pointer" title={undefined} titleId={undefined} />
						</Tooltip>
					</div>
					<InfoCircle width={20} height={20} className="text-success-600" title={undefined} titleId={undefined} />
					<div>
						<p className="text-sm font-semibold text-success-700">{props.title}</p>
						<p className="text-sm font-regular text-success-700">{props.content}</p>
					</div>
				</div>
			);
	}
};
