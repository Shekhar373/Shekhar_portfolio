import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useRef } from 'react'


const Hero = () => {

  const video = useRef(null)
  const smvideo = useRef(null)

  const hero = useRef()


  gsap.registerPlugin(ScrollTrigger, SplitText)


  useGSAP(() => {

    const split = SplitText.create(".hero-text", {
      type: "words",
      mask: "words"
    }

    )

    gsap.from(split.words, {
      y: 250,
      duration: 1.2,
      delay: 3,
      ease: "expo.inOut",

    })

    gsap.from(video.current, {
      clipPath: "inset(0 0 100% 0)",
      duration: 1.2,
      delay: 2.8,
      ease: "expo.inOut",
    })

    gsap.from(smvideo.current, {
      clipPath: "inset(0 0 100% 0)",
      duration: 1.2,
      delay: 2.8,
      ease: "expo.inOut",
    })

    gsap.from(video.current, {
      y: "-110vh",
      scale: 0.4,
      // ease: "power2.Out",
      scrollTrigger: {
        trigger: hero.current,
        // markers:true,
        start: "top 0",
        end: "bottom 20%",
        scrub: 2
      }
    })
  })

  const handleMouseMove = (e) => {

    const xPercent = e.clientX / innerWidth;
    const moveX = gsap.utils.mapRange(0, 1, -250, 250, xPercent);

    gsap.to(video.current, {
      x: moveX,
      duration: 0.6,
      ease: "power4.out",
    });


  };

  const handleLeave = () => {
    gsap.to(video.current, {
      x: 0,
      duration: 0.6,
      ease: "power3.inout",
    })
  }



  return (
    <div onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className='h-screen  md:h-[200vh] w-full overflow-x-hidden'>
      <div ref={hero} className='h-screen w-full relative '>
        <div className='h-[15vh] md:[20vh]'></div>
        <div className='hidden md:visible h-[40vh] w-full'>

        </div>
        <div className='h-[40vh] mt-15 lg:mt-0 md:h-auto flex flex-col justify-center'>
          
          <div className='hero-text flex justify-between md:mt-[10vh] lg:mt-[53vh] xl:mt-[48vh] mb-5 lg:mb-0 px-5 lg:px-11 font-medium lg:font-bold'>
            <h3>A</h3>
            <h3>SERIOUSLY</h3>
            <h3>GOOD</h3>
          </div>
          <div className='flex justify-center md:hidden '>
            <video ref={smvideo} className='h-[30vh] w-[95vw] md:h-[30vh] md:w-[30vw] md:absolute md:z-10'
              loop muted autoPlay src="https://www.itsjay.us/videos/jazmin-wong-preview-compressed.mp4"></video>
          </div>
          
          <div className='hero-text  md:absolute h-[30vh] w-full flex-col flex lg:flex lg:flex-row pt-20 lg:mt-25 justify-center items-center text-[16vw] sm:text-[15vw] md:text-[20vw] leading-[13vw] sm:leading-[14vw] md:leading-[16vw] lg:text-[11.8vw] font-bold lg:tracking-tighter md:top-[50%]'>
            <h1>DESIGN</h1>
            <h1>ENGINEER</h1>
          </div>
        </div>
      </div>
      <div className='hidden h-screen w-full md:flex justify-center items-center  '>
        <video ref={video} className='video md:h-[95vh] w-[96vw]'
          loop muted autoPlay src="https://www.itsjay.us/videos/jazmin-wong-preview-compressed.mp4"></video>
      </div>
    </div>
  )
}

export default Hero