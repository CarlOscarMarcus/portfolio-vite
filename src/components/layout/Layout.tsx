import { Outlet } from "react-router-dom";
import Dock from "../Navbar/Dock";
import Footer from "./Footer";
import Header from "./Header";

import { VscHome, VscAccount, VscBook } from "react-icons/vsc";
import TechSlider from "../TechSlider/TechSlider";
import { SlSocialLinkedin } from "react-icons/sl";

const items = [
	{
		icon: <VscHome size={18} />,
		label: "Home",
		to: "/",
	},
	{
		icon: <VscAccount size={18} />,
		label: "About",
		to: "/about",
	},
	// {
	// 	icon: <VscBriefcase size={18} />,
	// 	label: "Projects",
	// 	to: "/projects",
	// },
	{
		icon: <VscBook size={18} />,
		label: "Education",
		to: "/education",
	},
	{
		icon: <SlSocialLinkedin />,
		label: "Linkedin",
		to: "https://www.linkedin.com/in/oscar-wystrale/",
		external: true,
	},
];

export default function Layout() {
	return (
		<div className="dark:bg-slate-950">
			<Header />
			<TechSlider />
			<main>
				<Outlet />
			</main>
			<Dock
				items={items}
				panelHeight={68}
				baseItemSize={50}
				magnification={70}
			/>
			<Footer />
		</div>
	);
}
