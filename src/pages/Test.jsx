import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import React from 'react'

const Test = () => {

  gsap.registerPlugin(ScrollTrigger, SplitText)

  useGSAP(() => {

    const split = SplitText.create(".clip-text", {
      type: "words,lines",
      mask:"lines"
    })

    gsap.from(split.lines, {
      
      opacity: 0,
      yPercent: 120,
      ease: "power",
      stagger: {
        amount:0.3
      },
      scrollTrigger: {
        trigger: ".clip-text",
        markers: true,
        start: "top 20%",
        toggleActions: "play none none reverse"
      }
    })

    // gsap.set(".clip-text", { visibility: "visible" });

    // gsap.fromTo(
    //   ".clip-text",
    //   {
    //     clipPath: "inset(0 0 100% 0)",
    //   },
    //   {
    //     clipPath: "inset(0 0 0% 0)",
    //     // stagger: {
    //     //   amount: 0.4,
    //     // },
    //     // delay: 5,
    //     duration: 2,
    //     ease: "power4.out",
    //     scrollTrigger: {
    //       trigger: ".clip-text",
    //       markers: true,
    //       start: "top 50%",
    //       toggleActions: "play none none reverse"
    //     }
    //   },

    // );
  });
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center '>
      <div className='clip-text  text-4xl p-30'>
<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eligendi at sapiente exercitationem, dolores facere repellat doloribus quia? Temporibus facere quia eum dolor ea doloribus.</h1>  
    </div>

    </div>
  )
}

export default Test