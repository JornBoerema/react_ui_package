import { SearchLg } from "@bijvoorbeeldzo/icons";
import React from "react";
import { FeaturedIcon } from "../FeaturedIcon";

export const EmptyState: React.FC = () => {
	return (
		<div className="flex justify-center py-10">
			<div className="flex flex-col items-center max-w-[300px] text-center gap-2">
				<FeaturedIcon variant="primary" icon={<SearchLg />} />
				<p className="text-md font-semibold text-gray-900">No records found</p>
				<p className="text-sm font-regular text-gray-600">We have found no records, create a new record or remove your search term</p>
			</div>
		</div>
	);
};
