import { Title } from "../../components/Title/Title";

export default function About() {
	return (
		<main className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950 transition-colors duration-300">
			<div className="mx-auto max-w-5xl px-6">
				{/* About */}
				<section className="mb-20">
					<Title text="About Me" />

					<div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
						<p className="text-xl leading-relaxed">
							My name is Oscar Wystråle, and I am a recently
							graduated B.Sc. student in Web Development with a
							strong interest in creating modern, scalable, and
							user-friendly digital experiences.
						</p>

						<p className="text-xl leading-relaxed">
							During my studies, I gained practical experience
							with modern technologies including JavaScript,
							TypeScript, React, Node.js, HTML, CSS/SCSS, and Git.
							I have also worked with languages such as Kotlin,
							C++, and C#, giving me a broader understanding of
							software development across different platforms and
							environments.
						</p>

						<p className="text-xl leading-relaxed">
							Beyond my academic background, I have collaborated
							with startups where I contributed to building
							full-stack web applications using React, Node.js,
							and PostgreSQL. During these projects I focused
							strongly on code quality, implementing testing
							strategies and CI/CD workflows, including end-to-end
							testing using Cypress.
						</p>

						<p className="text-xl leading-relaxed">
							My primary focus is building responsive and
							accessible web applications that deliver a smooth
							experience across different devices. I also have
							experience with mobile development through React
							Native and Android development using Jetpack
							Compose.
						</p>
					</div>
				</section>
				{/* Experience */}
				<section>
					<Title text="Experience & Projects" />

					<div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
						<p className="text-xl leading-relaxed">
							During my studies I participated in multiple project
							courses in collaboration with industry partners
							through Blekinge Institute of Technology. These
							projects gave students the opportunity to work
							directly with real customers and develop solutions
							for practical use cases.
						</p>

						<p className="text-xl leading-relaxed">
							I collaborated with companies including Telenor
							Sweden and CGI Sweden, where I was introduced to
							technologies and workflows outside traditional web
							development. These experiences provided valuable
							insight into working with real-world requirements
							and multidisciplinary teams.
						</p>

						<p className="text-xl leading-relaxed">
							I worked with technologies such as Bluetooth Low
							Energy (BLE), ESP32 microcontrollers, PostgreSQL,
							React, and machine learning solutions using PyTorch.
							I also contributed to a white-label mobile
							application developed using Kotlin and Jetpack
							Compose, designed as a modern replacement for an
							existing infrastructure.
						</p>

						<p className="text-xl leading-relaxed">
							In addition, I have worked with startup companies
							where I contributed to both improving existing
							systems and building solutions from the ground up.
							These experiences helped me understand not only
							software development itself, but also planning,
							technical decision-making, scalability,
							maintainability, and researching technologies and
							integration requirements before implementation.
						</p>
					</div>
				</section>
			</div>
		</main>
	);
}
