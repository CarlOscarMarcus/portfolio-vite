import React from "react";
import type { CardItem } from "./types";

interface PortfolioCardProps {
	item: CardItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
	const { title, subtitle, metaText, badge, description, tags, actions } =
		item;

	return (
		<div className="flex flex-col justify-between h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
			<div>
				{/* Top Header Row */}
				<div className="flex items-start justify-between gap-4">
					<div className="space-y-1">
						<h3 className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
							{title}
						</h3>
						{subtitle && (
							<p className="text-sm font-medium text-slate-500 dark:text-slate-400">
								{subtitle}
							</p>
						)}
					</div>

					{/* Conditional Badge */}
					{badge && (
						<span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
							{badge}
						</span>
					)}
				</div>

				{/* Meta Metadata Label (e.g. Dates/Locations) */}
				{metaText && (
					<p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
						{metaText}
					</p>
				)}

				{/* Content Paragraph */}
				{description && (
					<p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
						{description}
					</p>
				)}
			</div>

			{/* Footer Block for Tags and CTA Buttons */}
			<div className="mt-6 space-y-4">
				{/* Array Tags */}
				{tags && tags.length > 0 && (
					<div className="flex flex-wrap gap-1.5">
						{tags.map((tag, idx) => (
							<span
								key={idx}
								className="rounded-lg bg-slate-50 border border-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800/60 dark:border-slate-800 dark:text-slate-300"
							>
								{tag}
							</span>
						))}
					</div>
				)}

				{/* Action Buttons */}
				{actions && actions.length > 0 && (
					<div className="flex flex-wrap gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/60">
						{actions.map((action, idx) => (
							<a
								key={idx}
								href={action.url}
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
							>
								{action.label}
								<span>&rarr;</span>
							</a>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
