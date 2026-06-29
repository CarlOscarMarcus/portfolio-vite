import LetterGlitch from "../LetterGlitch/LetterGlitch";
import { Title } from "../Title/Title";

export default function Header() {
	return (
		<div className="relative w-full h-64 overflow-hidden">
			{/* BACKGROUND */}
			<div className="absolute inset-0 z-0">
				<LetterGlitch
					glitchSpeed={50}
					centerVignette={true} // Keeps center vignette on
					outerVignette={false} // Keeps outer vignette off
					smooth
					glitchColors={["#2b4539", "#61dca3", "#61b3dc"]} // Changed from 'colors'
				/>
			</div>

			{/* FOREGROUND CONTENT */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 text-white">
				<Title text="Oscar Wystråle" className="text-center" />
				<Title
					text="Full-Stack Developer | Software Engineer"
					className="text-center"
				/>
			</div>
		</div>
	);
}
