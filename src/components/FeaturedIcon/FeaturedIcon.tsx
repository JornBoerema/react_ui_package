import React from "react";
import { FeaturedIconVariant } from "./FeaturedIconVariant";

interface Props {
	variant: FeaturedIconVariant;
	icon: JSX.Element;
}

export const FeaturedIcon: React.FC<Props> = (props) => {
	switch (props.variant) {
		case FeaturedIconVariant.success:
			return <div className="bg-success-100 border-success-50 text-success-600 border-8 rounded-full p-2">{React.cloneElement(props.icon, { width: 20, height: 20 })}</div>;
		case FeaturedIconVariant.warning:
			return <div className="bg-warning-100 border-warning-50 text-warning-600 border-8 rounded-full p-2">{React.cloneElement(props.icon, { width: 20, height: 20 })}</div>;
		case FeaturedIconVariant.error:
			return <div className="bg-error-100 border-error-50 text-error-600 border-8 rounded-full p-2">{React.cloneElement(props.icon, { width: 20, height: 20 })}</div>;
		case FeaturedIconVariant.primary:
			return <div className="bg-primary-100 border-primary-50 text-primary-600 border-8 rounded-full p-2">{React.cloneElement(props.icon, { width: 20, height: 20 })}</div>;
	}
};
