import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

const TechStack = () => {

  gsap.registerPlugin(ScrollTrigger, SplitText)

  // useGSAP(() => {

  //   gsap.from(".tech-stack h1",{
  //     clipPath: "inset(0 0 100% 0)",
  //         duration: 1.2,
  //         ease: "power3.in",
  //         scrollTrigger:{
  //             trigger:".tech-stack",
  //             // markers:true,
  //             start:"top 50%",
  //             toggleActions: "play none none reverse"
  //         }
  //   })
  // })

  return (
    <div className='h-[150vh] mt-[60vh] lg:mt-[30vh]  w-full flex flex-col gap-30'>
      <div className='tech-stack text-[12vw] text-center leading-[11vw] font-bold tracking-wide'>
        <h1>MORDERN </h1>
        <h1>TECH STACK</h1>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex justify-center gap-1'>
          <div className='h-[30vh] w-[35vw] border-r flex justify-center items-center '>
            <img className='h-[22vh] w-[15vw]'
              src="https://www.itsjay.us/images/svg/react-logo.svg" alt="" />
          </div>
          <div className='h-[30vh] w-[35vw] flex justify-center items-center '>
            <img className='h-[27vh] w-[17vw]'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGybAG0aZ1tYRymh9HQ1xKmAMUYt6FG2WhAg&s" alt="" />
          </div>
        </div>
        <div className='flex justify-center gap-1'>
          <div className='h-[30vh] w-[30vw] border-t flex justify-center items-center '>
            <img className='h-[20vh] w-[15vw] '
              src="https://www.itsjay.us/images/svg/gsap-black.svg" alt="" />
          </div>
          <div className='h-[30vh] w-[30vw] border-t border-x flex justify-center items-center '>
            <img className='h-[20vh] w-[15vw]'
              src="https://www.itsjay.us/images/svg/motion.svg" alt="" />
          </div>
          <div className='h-[30vh] w-[30vw] border-t flex justify-center items-center '>
            <img className='h-[20vh] w-[15vw]'
              src="https://www.itsjay.us/images/svg/tailwindcss-logo.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack