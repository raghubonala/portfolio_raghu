import React from 'react'
import './Home.css'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Blog from './Blog'
import Projects from './Projects'
import Work from './Work'
import Blogs from "./Blogs"

const Home = () => {
  return (
    <div>
      <About />
      <Services />
      <Blogs/>
      <Blog/>
      <Projects/>
      <Work/>
      <Contact />
      
    </div>
  )
}

export default Home