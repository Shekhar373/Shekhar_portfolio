import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Loader = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.inOut" }
        });

        // reveal panels
        tl.to(".loader", {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            stagger: 0.12
        })

            // small pause
            .to({}, { duration: 0.4 })

            // hide panels upward
            .to(".loader", {
                clipPath: "inset(0% 0% 100% 0%)",
                duration: 0.9,
                stagger: 0.1
            })

            // remove loader
            .set(".loader", { display: "none" });

    }, [])

    return (
        

        <div className=' absolute h-screen w-screen'>
            <div className='h-full w-full'>
                <div className='loader [clip-path:inset(100%_0_0_0)] fixed h-full w-[20%] bg-black z-50'></div>
                <div className='loader [clip-path:inset(100%_0_0_0)] fixed left-[20%] h-full w-[20%] bg-black z-50'></div>
                <div className='loader fixed [clip-path:inset(100%_0_0_0)] left-[40%] h-full w-[20%] bg-black z-50'></div>
                <div className='loader fixed [clip-path:inset(100%_0_0_0)] left-[60%] h-full w-[20%] bg-black z-50'></div>
                <div className='loader fixed [clip-path:inset(100%_0_0_0)] left-[80%] h-full w-[20%] bg-black z-50'></div>
            </div>
        </div>
    )
}

export default Loader 