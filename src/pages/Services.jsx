import React from 'react'
import DesignCard from '../Components/Common/services/DesignCard'
import DevelopmentCard from '../Components/Common/services/DevelopmentCard'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

const Services = () => {

    gsap.registerPlugin(ScrollTrigger,SplitText)

    useGSAP(() => {

         const split = SplitText.create(".about-top",{
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
              trigger: ".about-top",
            //   markers: true,
              start: "top 50%",
              toggleActions: "play none none reverse"
            }
          })

       });
    return (
        <div className='h-[170vh] w-full flex justify-center items-center '>
            <div className='h-[267vh] lg:h-[165vh] w-[95vw] bg-[#171717] flex flex-col items-center justify-center rounded-4xl'>
                <div>
                    <div className='about-top text-white font-medium text-xl md:4xl lg:text-4xl h-[50vh]  w-full pl-[5vw] lg:pl-[20vw] pr-[5vw] pt-[5vh] lg:pt-[10vh]'>
                        <h1 className='text-2xl text-gray-400'>Services</h1>
                        <h1>Evolving with every brief and built for impact, my
                            process spans design, development, and brand
                            strategy—aligning vision with execution to bring
                            clarity and edge to every project.</h1>
                    </div>
                </div>
                <div className='h-[212vh] lg:h-[110vh] w-[97%]  rounded-4xl bg-[#262626] flex-col flex gap-[40vh] lg:gap-15 items-center '>
                    <DesignCard />
                    <DevelopmentCard />
                </div>
            </div>

        </div>
    )
}

export default Services