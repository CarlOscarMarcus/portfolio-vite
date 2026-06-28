import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import Education from "../pages/Education/Education.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import CV from "../pages/CV/CV.jsx";

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/education" element={<Education />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cv" element={<CV />} />
			</Route>
		</Routes>
	);
}
