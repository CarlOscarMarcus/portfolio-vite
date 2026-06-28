import React from "react";
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaPython,
	FaDocker,
	FaReact,
	FaGithub,
	FaGitAlt,
	FaPhp,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import {
	SiSymfony,
	SiSass,
	SiMysql,
	SiTypescript,
	SiKotlin,
	SiKubernetes,
	SiAnsible,
	SiGithubactions,
} from "react-icons/si";

import "./TechSlider.css";

const technologies = [
	{ name: "HTML5", icon: FaHtml5 },
	{ name: "CSS3", icon: FaCss3Alt },
	{ name: "SASS", icon: SiSass },
	{ name: "JavaScript", icon: FaJs },

	{ name: "TypeScript", icon: SiTypescript },

	{ name: "PHP", icon: FaPhp },
	{ name: "Python", icon: FaPython },

	{ name: "React", icon: FaReact },
	{ name: "Symfony", icon: SiSymfony },

	{ name: "Kotlin", icon: SiKotlin },
	{ name: "Jetpack Compose", icon: FaAndroid },

	{ name: "DevOps", icon: SiGithubactions },
	{ name: "Docker", icon: FaDocker },
	{ name: "Kubernetes", icon: SiKubernetes },
	{ name: "Ansible", icon: SiAnsible },

	{ name: "GitHub", icon: FaGithub },
	{ name: "Git", icon: FaGitAlt },

	{ name: "Database", icon: SiMysql },
	{ name: "Linux", icon: FaLinux },
];

const TechSlider = () => {
	return (
		<div className="tech-slider">
			<div className="tech-slider__track">
				{[...technologies, ...technologies].map((tech, index) => {
					const Icon = tech.icon;

					return (
						<div className="tech-slider__item" key={index}>
							<Icon size={32} />
							<span className="tech-slider__label">
								{tech.name}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TechSlider;
