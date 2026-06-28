import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { TimelineItem } from "./types";

interface TimelineCardProps {
	item: TimelineItem;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ item }) => {
	const { title, subtitle, dateRange, description, tags, externalUrl } = item;

	const CardContent = (
		<div
			className={`
				rounded-xl border border-slate-200 bg-white p-5 shadow-sm
				transition-all duration-300
				hover:border-blue-200 hover:shadow-md
				dark:border-slate-800 dark:bg-slate-900
				dark:hover:border-blue-900
				${externalUrl ? "cursor-pointer" : ""}
			`}
		>
			{/* Header */}
			<div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
				<div>
					<div className="flex items-start gap-2">
						<h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
							{title}
						</h3>

						{externalUrl && (
							<FaExternalLinkAlt
								className="
									shrink-0
									mt-1
									h-3.5
									w-3.5
									text-slate-400
									transition-transform
									duration-300
									group-hover:-translate-y-0.5
									group-hover:translate-x-0.5
								"
							/>
						)}
					</div>

					<p className="text-sm font-medium text-blue-600 dark:text-blue-400">
						{subtitle}
					</p>
				</div>

				<span className="inline-block text-xs font-semibold text-slate-400 sm:text-right dark:text-slate-500">
					{dateRange}
				</span>
			</div>

			{/* Description */}
			{description && (
				<p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
					{description}
				</p>
			)}

			{/* Tags */}
			{tags && tags.length > 0 && (
				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="
								rounded-md bg-slate-100 px-2.5 py-1
								text-xs font-medium text-slate-600
								dark:bg-slate-800 dark:text-slate-300
							"
						>
							{tag}
						</span>
					))}
				</div>
			)}
		</div>
	);

	return (
		<div className="relative pl-8 sm:pl-10 group">
			{/* Timeline Dot */}
			<div className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full border-2 border-blue-500 bg-white transition-all duration-300 group-hover:bg-blue-500 dark:bg-slate-900" />

			{externalUrl ? (
				<a
					href={externalUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="block"
				>
					{CardContent}
				</a>
			) : (
				CardContent
			)}
		</div>
	);
};
