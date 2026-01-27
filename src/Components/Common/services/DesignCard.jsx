import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import React, { useRef } from 'react'

const DesignCard = () => {

    const imgref = useRef(null)
    gsap.registerPlugin(ScrollTrigger, SplitText)

    useGSAP(() => {

        const split = SplitText.create(".clip-text-about", {
            type: "lines",
            mask: "lines"
        })

        gsap.from(split.lines, {

            opacity: 0,
            yPercent: 120,
            ease: "power",
            stagger: {
                amount: 0.1
            },
            scrollTrigger: {
                trigger: ".card-parent-1",
                //   markers: true,
                start: "top 50%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.from(imgref.current, {
            clipPath: "inset(0 0 100% 0)",
            duration: 1.2,
            ease: "expo.inOut",
            scrollTrigger: {
                trigger: ".card-parent-1",
                // markers:true,
                start: "top 50%",
                toggleActions: "play none none reverse"
            }
        })
    }
    )


    return (
        <div className=' card-parent-1 h-[70vh] lg:h-[50vh] p-5 w-full flex flex-col gap-5 lg:flex lg:flex-row lg:justify-between text-white'>

            <div className='flex flex-col lg:flex-row'>
                <div className=' clip-text-about text-l lg:text-xl'>
                    01
                </div>
                <div className=' clip-text-about  lg:pl-[15vw] text-2xl lg:text-4xl font-bold'>
                    <h1>Digital Design</h1>
                </div>
            </div>

            <div className=' w-full lg:w-[20vw] text-sm lg:text-l  font-medium'>
                <div className=' clip-text-about '>
                    <h2>Designing engaging digital
                        experiences that combine brand
                        strategy and creativity with UX
                        insights to deliver functionality and
                        ease of use.</h2>
                </div>
                <div className='text-xs lg:text-l lg:pt-5 pt-3 flex lg:flex-col gap-1 font-normal'>
                    <h3 className=' clip-text-about bg-[#3A3A3A] w-fit rounded-xl px-2 py-1 '>IDENTITY DESIGN</h3>
                    <h2 className=' clip-text-about bg-[#3A3A3A] w-fit rounded-xl px-2 py-1 '>UI</h2>
                    <h2 className=' clip-text-about bg-[#3A3A3A] w-fit rounded-xl px-2 py-1 '>UX</h2>
                    <h2 className=' clip-text-about bg-[#3A3A3A] w-fit rounded-xl px-2 py-1 '>WEB DESGIN</h2>
                </div>
            </div>
            <div>
                <img ref={imgref} loading="lazy" className='h-[40vh] w-screen lg:h-[40vh] lg:w-[25vw] rounded-2xl object-cover'
                    src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    )
}

export default DesignCard