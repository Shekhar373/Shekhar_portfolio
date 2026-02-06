import React, { useEffect } from 'react'
import Hero from './pages/Hero'
import Navbar from './Components/Common/Navbar'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/all'
import About from './pages/About'
import TechStack from './pages/TeckStack'
import Services from './pages/Services'
import Footer from './pages/Footer'
import Loader from './Components/Common/Loader'
import Test from './pages/Test'


const App = () => {

  gsap.registerPlugin(ScrollSmoother)

  useEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 1.8,
      effects: true,
      normalizeScroll: true
    });
  })

  return (<>
    <div className='text-[#171717] '>
      <Loader />
      <Navbar />
    </div>
    <div id="smooth-wrapper overflow-x-clip">
      <div id="smooth-content" className='text-[#171717] ' >
        <Hero />
        {/* <Test /> */}
        <About />
        <Services />
        <TechStack />
        <Footer />
      </div>
    </div>
  </>
  )
}

export default App
