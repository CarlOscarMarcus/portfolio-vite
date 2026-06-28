import { Routes, Route } from "react-router-dom"
import Layout from "../components/layout/Layout"

import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Projects from "../pages/Projects/Projects"
import Education from "../pages/Education/Education"
import Contact from "../pages/Contact/Contact"
import CV from "../pages/CV/CV"

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
  )
}