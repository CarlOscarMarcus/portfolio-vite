import React from "react";
import { TimelineContainer } from "../../components/TimelineCard/TimelineContainer";
import type { TimelineItem } from "../../components/TimelineCard/types";
import { Title } from "../../components/Title/Title";

const experienceData: TimelineItem[] = [
	{
		id: 1,
		title: "Android app developer - CGI Sweden",
		subtitle:
			"Project Course (Internship) - Blekinges Institut of Technology",
		dateRange: "Jan 2026 - Jun 2026",
		description: `
			Project course in a lager team, where we developed an white label Android app for CGI clients clients. 
			The app was built using Jetpack Compose and Kotlin.
			`,
		tags: [
			"Jetpack Compose",
			"Kotlin",
			"API",
			"Android",
			"Android Studio",
			"Git",
			"DevOps",
			"Agile",
			"Software Engineering",
			"Course Project",
			"Internship",
			"Mobile Development",
		],
	},
	{
		id: 2,
		title: "Full Stack Web Developer - Juke",
		subtitle: "Startup Project",
		dateRange: "Jun 2025 - Jun 2026",
		description: `
			Contributed to an Startup project, where I developed and web application using React, Node.js and Spotify API
			I created a digital jukebox that allows users to queue songs from Spotify and play them in a shared environment.
			`,
		tags: [
			"React",
			"Node.js",
			"Spotify API",
			"SCSS",
			"JavaScript",
			"Git",
			"Startup",
			"Software Engineering",
			"Independent Project",
		],
	},
	{
		id: 3,
		title: "User Experience Consultant - Sociala Verktygslådan",
		subtitle: "Startup Project",
		dateRange: "Jun 2025 - Dec 2025",
		description: `
			Worked as a UX consultant for an Startup project, 
			where I improved the user experience of a web application with One.com that the customer had already developed its website.
			The project involved create a user-friendly interface from existing content and implementing a new design that improved the overall user experience.
			`,
		externalUrl: "https://socialaverktygsladan.se/",
		tags: [
			"One.com",
			"UX Design",
			"Startup",
			"User Experience",
			"Software Engineering",
			"Independent Project",
			"Web Development",
		],
	},
	{
		id: 4,
		title: "Software Engineer - Telenor Sweden",
		subtitle:
			"Project Course (Internship) - Blekinges Institut of Technology",
		dateRange: "Jan 2025 - Jun 2025",
		description: `
			Project course in a smaler team, where we developed a web application for Telenor Sweden.
			The application was built using React, Node.js and PostgreSQL, and was designed to generate and display data about office spaces and their usage.
			We positioned phone in the office space by using microcontrollers to triangulate RSSI singals from phones withing BLE.
			The positioning system was trained using machine learning with Pytorch and manual data points.
			`,
		tags: [
			"React",
			"Node.js",
			"PostgreSQL",
			"Machine Learning",
			"Pytorch",
			"BLE",
			"Software Engineering",
			"Course Project",
			"Internship",
			"Web Development",
			"Microcontrollers",
			"Arduino",
			"eps32",
		],
	},
];

const educationData: TimelineItem[] = [
	{
		id: "edu-1",
		title: "B.Sc. in Computer Science Web Development PAGWE",
		subtitle: "Blekinges Institut of Technology",
		dateRange: "2021- 2026",
		description:
			"Bachelor's degree in Computer Science with a focus on web development, covering front-end and back-end technologies, database management, DevOps & Agile principles and software engineering principles.",
		tags: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"Node.js",
			"SQL",
			"Git",
			"Agile",
			"DevOps",
			"Software Engineering",
			"Web Development",
			"PHP",
			"Python",
			"Symfony",
			"PostgreSQL",
			"MongoDB",
			"Docker",
			"Kubernetes",
			"CI/CD",
			"RESTful APIs",
		],
		externalUrl:
			"https://www.bth.se/utbildning/program/webbprogrammering-180-hp",
	},
];

const publicationsData: TimelineItem[] = [
	{
		id: "pub-1",
		title: "The applicability of Generative AI in Systematic Literature Reviews: Exploring GPT-4's Role in Automating and Assisting Researchers",
		subtitle: "Bachelor Thesis (DiVa) - Blekinges Institut of Technology",
		dateRange: "2023",
		description:
			"This thesis examines the use of Large Language Models (LLMs) to automate key phases of the Systematic Literature Review (SLR) in Software Engineering (SE).",
		tags: [
			"Large Language Models",
			"Systematic Literature Review",
			"Software Engineering",
			"GPT-4",
			"Automation",
			"Research Assistance",
			"Validity Threats",
			"Automation",
		],
		externalUrl:
			"https://www.diva-portal.org/smash/record.jsf?dswid=-835&pid=diva2%3A1941180&c=1&searchType=SIMPLE&language=en&query=Oscar+Wystr%C3%A5le&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all",
	},
];

const certificationsData: TimelineItem[] = [
	{
		id: "cert-1",
		title: "MTA: HTML5 Application Development Fundamentals",
		subtitle: "Microsoft Technology Associate",
		dateRange: "Jun 2021",
		description: "waqu2 - FMD7",
		tags: ["HTML5", "Certiport", "MTA"],
		externalUrl:
			"https://www.certiport.com/portal/pages/credentialverification.aspx",
	},
	{
		id: "cert-2",
		title: "MTA: Introduction to Programming using HTML and CSS",
		subtitle: "Microsoft Technology Associate",
		dateRange: "Mar 2021",
		description: "FNTV - XMhk",
		tags: ["HTML", "CSS", "Certiport", "MTA"],
		externalUrl:
			"https://www.certiport.com/portal/pages/credentialverification.aspx",
	},
];
export default function Education() {
	return (
		<main className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950 transition-colors duration-300">
			<div className="mx-auto max-w-5xl px-6">
				<Title text="Education, Experience and Publications" />
				<div className="min-h-screen bg-slate-50 p-6 dark:bg-slate-950">
					<TimelineContainer
						title="Work Experience"
						items={experienceData}
					/>
					<TimelineContainer
						title="Education"
						items={educationData}
					/>
					<TimelineContainer
						title="Publications"
						items={publicationsData}
					/>
					<TimelineContainer
						title="Certifications"
						items={certificationsData}
					/>
				</div>
			</div>
		</main>
	);
}
