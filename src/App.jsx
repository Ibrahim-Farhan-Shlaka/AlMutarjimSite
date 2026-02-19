import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import "./style/index.css"
import { Home } from "./Pages/Home"
import { Services } from "./Pages/Services"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>    
  ) 
}

export default App
