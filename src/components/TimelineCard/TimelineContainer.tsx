import React from "react";
import { TimelineCard } from "./TimelineCard";
import type { TimelineItem } from "./types";

interface TimelineContainerProps {
	title?: string;
	items: TimelineItem[];
}

export const TimelineContainer: React.FC<TimelineContainerProps> = ({
	title,
	items,
}) => {
	return (
		<div className="mx-auto max-w-3xl px-4 py-8">
			{/* Section Title (Optional) */}
			{title && (
				<h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
					{title}
				</h2>
			)}

			{/* The Timeline Wrapper */}
			<div className="relative border-l border-slate-200 pl-0 dark:border-slate-800 dynamic-timeline-line">
				<div className="space-y-8">
					{items.map((item) => (
						<TimelineCard key={item.id} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};
