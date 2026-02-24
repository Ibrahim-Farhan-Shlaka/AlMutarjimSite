import { HashRouter as Router, Routes, Route } from "react-router-dom"
import "./style/index.css"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import About from "./Pages/About"
import ContactPage from "./Pages/ContactPage"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
