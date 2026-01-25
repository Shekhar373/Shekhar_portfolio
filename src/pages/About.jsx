import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const About = () => {

  const aboutvideo = useRef(null)
  gsap.registerPlugin(ScrollTrigger, SplitText)

  useGSAP(() => {

    const split = SplitText.create(".about-text h1", {
      type: "chars,words",
      mask: "chars"
    })

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(split.chars, {
        'will-change': 'transform',
        transformOrigin: '50% 100%',
        scaleY: 0
      },
        {
          ease: 'power3.in',
          opacity: 1,
          scaleY: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: "#about-text",
            start: "top 0%",
            // markers:true
            end: "top -200%",
            scrub: 2,
            pin: "#about-text",
          }
        });
    })

    mm.add("(max-width: 1023px)",()=>{
      gsap.from(split.chars,{
        opacity: 0,
            yPercent: 120,
            ease: "power",
            stagger: {
                amount: 0.1
            },
            scrollTrigger: {
                trigger: "#about-text",
                  // markers: true,
                start: "top 30%",
                toggleActions: "play none none reverse"
            }
      })
    })


    // gsap.from(split.chars, {
    //       'will-change': 'transform',
    //       transformOrigin: '50% 100%',
    //       scaleY: 0,

    //       ease: 'power3.in',

    //       duration:1,

    //       stagger:0.01,
    //       scrollTrigger: {
    //           trigger: "#about-text",
    //           start: "top 20%",
    //           markers:true,
    //           toggleActions: "play none none reverse"
    //           // // markers:true
    //           // end: "top -200%",
    //           // scrub: 2,
    //           // pin: "#about-text",

    //       }
    //   });

    gsap.from(aboutvideo.current, {
      clipPath: "inset(0 0 100% 0)",
      duration: 1.2,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: "#about-text",
        // markers:true,
        start: "top 20%",
        toggleActions: "play none none reverse"
      }
    })
  })




  return (
    <div id='about' className='h-screen lg:h-[330vh] w-full flex justify-center'>
      <div id='about-text' className='about-text-parent h-screen w-full flex flex-col lg:flex-row lg:mt-[20vh]'>
        <div className='about-text lg:h-full w-full lg:w-[60%] p-10 text-[4vw] lg:text-[2.5vw] font-medium flex justify-center items-center'>
          <h1>Hi! I’m a frontend developer who loves creating visually engaging and interactive websites. I work with HTML, CSS, JavaScript, React, and Tailwind CSS, and I enjoy enhancing user experiences with GSAP and web animations.
            I’m constantly learning and practicing through real projects, and this portfolio reflects my journey and passion for frontend development.</h1>
        </div>
        <div className='about-video lg:h-full w-full  lg:w-[40%] flex justify-center items-center '>
          <video ref={aboutvideo} loop muted autoPlay
            className='h-[30vh] w-[85vw] lg:h-[30vh] lg:w-[30vw] rounded-xl  object-cover'
            src="https://www.itsjay.us/videos/jazmin-wong-preview-compressed.mp4"></video>
        </div>
      </div>
    </div>
  )
}

export default About
