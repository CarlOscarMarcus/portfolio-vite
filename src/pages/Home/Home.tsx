import TextType from "../../components/RollingText/TextType";
import { Title } from "../../components/Title/Title";
import { NavLink } from "react-router";
import { FaLink } from "react-icons/fa";

export default function Home() {
	return (
		<main className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950 transition-colors duration-300">
			<div className="mx-auto max-w-5xl px-6">
				{/* WHO AM I */}
				<Title text="Who am I?" />

				<div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
					<p className="text-xl leading-relaxed">
						I am a Full-Stack Developer focused on modern web
						experiences and a recently graduated BCS in web
						development
					</p>

					<p className="text-xl leading-relaxed">
						I build responsive and scalable web applications using
						React, Node.js and TypeScript. I enjoy working on
						systems that combine clean UI with solid backend
						architecture.
					</p>
					<p className="text-xl leading-relaxed">
						<NavLink
							to="/About"
							className="inline-flex items-center gap-2 text-white hover:text-slate-300 transition-colors"
						>
							<FaLink />
							<span>Read more about me</span>
						</NavLink>
					</p>
				</div>

				{/* WHAT I DO */}
				<div className="mt-16">
					<Title text="What I do" />

					<div className="mt-6 text-2xl font-semibold text-slate-900">
						<TextType
							text={[
								"Turning ideas into interactive experiences",
								"Building responsive web applications for all devices",
								"Creating scalable full-stack solutions",
							]}
							typingSpeed={70}
							pauseDuration={1500}
							showCursor
							cursorCharacter="_"
							textColors={["White"]}
							deletingSpeed={40}
							cursorBlinkDuration={0.5}
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
