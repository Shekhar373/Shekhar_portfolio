import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const DevelopmentCard = () => {

  const imgref = useRef(null)

  gsap.registerPlugin(ScrollTrigger,SplitText)

  useGSAP(() => {

    const split = SplitText.create(".clip-text-about-2",{
      type:"lines",
      mask:"lines"
   })

   gsap.from(split.lines, {
      
    opacity: 0,
    yPercent: 120,
    ease: "power",
    stagger: {
      amount:0.1
    },
    scrollTrigger: {
      trigger: ".card-parent-2",
      // markers: true,
      start: "top 50%",
      toggleActions: "play none none reverse"
    }
  })


    gsap.from(imgref.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 1.2,
        ease: "expo.inOut",
        scrollTrigger:{
            trigger:".card-parent-2",
            // markers:true,
            start:"top 50%",
            toggleActions: "play none none reverse"
        }
    })
}
)
  return (
    <div className='card-parent-2 h-[70vh] lg:h-[50vh] p-5 w-full flex flex-col gap-5 lg:flex lg:flex-row lg:justify-between text-white'>
      <div className='flex flex-col lg:flex-row'>
      <div className=' clip-text-about-2 text-l lg:text-xl'>
        02
      </div>
      <div className=' clip-text-about-2 lg:pl-[15vw] text-2xl lg:text-4xl font-bold'>
        <h1>Development</h1>
      </div>
      </div>
      <div className=' w-full lg:w-[20vw]  text-sm lg:text-lg font-medium'>
        <div>
          <h2 className='clip-text-about-2'>
            Building digital products that
            combine design, technology, and
            business strategy to deliver
            seamless user experiences.</h2>
        </div>
        <div className='lg:pt-5 text-xs lg:text-l flex pt-3 lg:flex-col gap-1 font-normal'>
          <h3 className='bg-[#3A3A3A] clip-text-about-2  w-fit rounded-xl px-2 py-1 '>FRONTEND</h3>
          <h2 className='bg-[#3A3A3A] clip-text-about-2  w-fit rounded-xl px-2 py-1 '>GSAP</h2>
          <h2 className='bg-[#3A3A3A] clip-text-about-2  w-fit rounded-xl px-2 py-1 '>ANIMATION</h2>
          <h2 className='bg-[#3A3A3A] clip-text-about-2  w-fit rounded-xl px-2 py-1 '>RESPONSIVE</h2>
        </div>
      </div>
      <div>
        <img ref={imgref} className='h-[60vh] w-screen lg:h-[40vh] lg:w-[25vw] rounded-2xl object-cover'
          src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww" alt="" />
      </div>
    </div>
  )
}

export default DevelopmentCard