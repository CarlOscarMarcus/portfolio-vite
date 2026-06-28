export interface CardItem {
	id: string | number;
	title: string; // e.g., "E-Commerce Platform" or "Open Source Contributor"
	subtitle?: string; // e.g., "Personal Project" or "Award"
	metaText?: string; // e.g., "2026" or "Remote"
	badge?: string; // e.g., "Featured", "First Place"
	description?: string;
	tags?: string[]; // Tech stack, categories, etc.

	actions?: {
		// Interactive links for project repos/live links
		label: string;
		url: string;
		iconType?: "github" | "external";
	}[];
}
