import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Projects from './Components/Projects';
import Error from './Components/Error'

const App = () => {
  return (
    <div>
<Router>
  <Navbar/>
  <Routes>
    <Route  path='/'  element={<Home/>} />
    <Route  path='/about'  element={<About/>} />
    <Route  path='/contact'  element={<Contact/>} />
    <Route  path='/services'  element={<Services/>} />
    <Route  path='/project'  element={<Projects/>} />
    <Route  path='*'  element={<Error/>} />

    

  </Routes>
  <Footer/>
</Router>

    </div>
  )
}

export default App