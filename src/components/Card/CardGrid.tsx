import React from "react";
import { PortfolioCard } from "./Card";
import type { CardItem } from "./types";

interface GridContainerProps {
	title?: string;
	items: CardItem[];
	columns?: "1" | "2" | "3"; // Added '1' here
}

export const CardGrid: React.FC<GridContainerProps> = ({
	title,
	items,
	columns = "3",
}) => {
	// Map layouts smoothly based on prop setup
	const gridLayout =
		columns === "1"
			? "grid-cols-1"
			: columns === "2"
				? "grid-cols-1 md:grid-cols-2"
				: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

	return (
		<section className="mx-auto max-w-7xl px-4 py-8">
			{title && (
				<h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
					{title}
				</h2>
			)}

			<div className={`grid gap-6 ${gridLayout}`}>
				{items.map((item) => (
					<PortfolioCard key={item.id} item={item} />
				))}
			</div>
		</section>
	);
};
