export interface TimelineItem {
	id: string | number;
	title: string;
	subtitle: string;
	dateRange: string;
	description?: string;
	tags?: string[];
	externalUrl?: string;
}
