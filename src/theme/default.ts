export const theme = {
	button: {
		base: "flex justify-center items-center gap-2 rounded-lg transition-all",
		variant: {
			primary: "bg-primary-600 text-white hover:bg-primary-700 focus:shadow-primary-focus disabled:bg-primary-200",
			secondaryGray: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:shadow-gray-focus disabled:text-gray-200 disabled: border-gray-200",
			secondaryColor: "bg-primary-50 text-primary-700 hover:bg-primary-100 hover:text-primary-800 focus:shadow-primary-focus disabled:bg-primary-25 disabled:text-primary-300",
			tertiaryGray: "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-700 disabled:text-gray-300",
			tertiaryColor: "bg-white text-primary-700 hover:bg-primary-50 hover:text-primary-800 disabled:text-primary-200",
			error: "bg-error-600 text-white hover:bg-error-700 focus:shadow-error-focus disabled:bg-error-200",
		},
		size: {
			square: "p-2",
			sm: "px-3.5 py-2 gap-2 text-text-sm font-semibold",
			md: "px-4 py-2.5 gap-2 text-text-sm font-semibold",
			lg: "px-4.5 py-2.5 gap-2 text-text-md font-semibold",
			xl: "px-5 py-3 gap-2 text-text-md font-semibold",
			xxl: "px-7 py-4 gap-3 text-text-lg font-semibold",
			breadcrumb: "text-sm font-medium px-2 py-1",
		},
	},
	alert: {
		base: "p-4 pr-12 rounded-lg flex gap-4 relative",
		closeButtonWrapper: "absolute right-3 top-3",
		closeButton: "cursor-pointer",
		variant: {
			primary: {
				base: "bg-primary-25 border border-primary-300",
				closeButton: "text-primary-500",
				title: "text-sm font-semibold text-primary-700",
				content: "text-sm font-medium text-primary-700",
				infoCircle: "text-primary-600",
			},
			info: {
				base: "bg-gray-25 border border-gray-300",
				closeButton: "text-gray-500",
				title: "text-sm font-semibold text-gray-700",
				content: "text-sm font-medium text-gray-700",
				infoCircle: "text-gray-600",
			},
			error: {
				base: "bg-error-25 border border-error-300",
				closeButton: "text-error-500",
				title: "text-sm font-semibold text-error-700",
				content: "text-sm font-medium text-error-700",
				infoCircle: "text-error-600",
			},
			warning: {
				base: "bg-warning-25 border border-warning-300",
				closeButton: "text-warning-500",
				title: "text-sm font-semibold text-warning-700",
				content: "text-sm font-medium text-warning-700",
				infoCircle: "text-warning-600",
			},
			success: {
				base: "bg-success-25 border border-success-300",
				closeButton: "text-success-500",
				title: "text-sm font-semibold text-success-700",
				content: "text-sm font-medium text-success-700",
				infoCircle: "text-success-600",
			},
		},
	},
	featuredIcon: {
		base: "border-8 rounded-full p-2",
		variant: {
			success: "bg-success-100 border-success-50 text-success-600",
			warning: "bg-warning-100 border-warning-50 text-warning-600",
			error: "bg-error-100 border-error-50 text-error-600",
			primary: "bg-primary-100 border-primary-50 text-primary-600",
		},
	},
	modal: {
		backgroundBase: "flex justify-center items-center fixed top-0 left-0 w-screen h-screen ease-in-out duration-150 bg-[#344054]",
		backgroundVisible: "bg-opacity-70 backdrop-blur-sm",
		backgroundHidden: "opacity-0 pointer-events-none",
		modalBackground: "bg-white rounded-lg relative flex flex-col px-6 py-6 gap-8",
		contentWrapper: "flex flex-col justify-start items-start gap-5 w-full",
		title: "text-text-lg font-semibold text-gray-900",
	},
	removeModal: {
		contentWrapper: "flex flex-col justify-center items-center gap-5 w-full",
		textWrapper: "flex flex-col gap-2",
		header: "text-text-lg font-semibold text-gray-900 text-center",
		text: "text-text-sm font-regular text-gray-600 text-center",
		actionsWrapper: "flex justify-between gap-3 w-full",
	},
	tooltip: {
		base: {
			wrapper: "relative cursor-pointer pointer group",
			rectangle: "mb-1 absolute hidden group-hover:inline-block bg-gray-800 text-white font-medium text-sm p-2 whitespace-nowrap rounded-md",
			arrow: "mb-1 absolute hidden group-hover:inline-block border-[6px]",
		},
		top: {
			rectangle: "left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]",
			arrow: "left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-gray-800",
		},
		bottom: {
			rectangle: "left-1/2 -translate-x-1/2 top-[calc(100%+5px)]",
			arrow: "left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-b-gray-800",
		},
		left: {
			rectangle: "top-1/2 -translate-y-1/2 right-[calc(100%+5px)]",
			arrow: "top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r-0 border-l-gray-800",
		},
		right: {
			rectangle: "top-1/2 -translate-y-1/2 left-[calc(100%+5px)]",
			arrow: "top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-r-gray-800",
		},
	},
};
