import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const Navbar = () => {

  gsap.registerPlugin(SplitText)

  useGSAP(() => {

    const split = SplitText.create(".nav-text", {
      type: "words",
      mask: "words"
    })

    gsap.from(split.words, {
      y: 100,
      duration: 1.2,
      delay: 2.8,
      ease: "expo.inOut",
    })

    gsap.from(".nav-button", {
      opacity: 0,
      duration: 1.2,
      delay: 2.8,
    })


  })
  return (
    <div className='mix-blend-difference '>
      <div className='flex justify-between p-5 lg:p-10 '>
        <div className=''>
          <h1 className='nav-text overflow-clip font-medium'>INDIA Based</h1>
          {/* <h1 className='nav-text overflow-clip font-bold text-nowrap text-gray-400'>Working Globally</h1> */}
        </div>
        <div className='nav-text opacity-0 md:opacity-100 font-medium text-nowrap'>
          <h1>Freelance availability</h1>
        </div>
        
          <div className='nav-button z-40 cursor-pointer'>
            <button className=' bg-black text-nowrap rounded-4xl text-l font-medium text-white px-5 py-2'>
            <a href="mailto:shekhar72898@gmail.com">Get in touch</a>
            </button>
          </div>
        

      </div>
    </div>
  )
}

export default Navbar