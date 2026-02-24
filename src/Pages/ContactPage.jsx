import { useState } from 'react'

import '../style/index.css'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Shop from '../Components/Shop'
import Contact from "../Components/Contact"
import MobileCTA from '../Components/MobileCTA'

export function ContactPage() {

  const [darkMode, setDarkMode] = useState(false);

  const [lang, setLang] = useState("ar");

  const toggleLang = () => {
    setLang(prev => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <div className='App' data-theme={darkMode ? 'dark' : 'light'} >
      
      <Navbar language={lang} toggleLang={toggleLang}></Navbar>
      
      <button id='darkButton' onClick={() => setDarkMode(!darkMode)}>{ darkMode ? "🌙" : "☀️"}</button>

      <Contact lang={lang}></Contact>

      <Shop Name={lang === "ar" ? "موقعنا" : "Location"}/>

      <Footer lang={lang}/>

      <MobileCTA lang={lang}></MobileCTA>

    </div>
  )
}

export default ContactPage