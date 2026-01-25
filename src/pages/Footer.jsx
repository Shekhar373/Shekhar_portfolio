import React from 'react'

const Footer = () => {
  return (
    <div className='h-[70vh] md:h-screen w-full relative'>
      {/* <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className='text-[12vw] font-bold'>Shekhar</h1>
      </div> */}

      <div className='h-[45vh] w-full flex relative'>
        <div className='footer-card h-[42vh] w-[57vw] bg-gray-200  rounded-3xl mx-5 flex items-end p-5 text-xl font-bold'>
          <h1>Work</h1>
        </div>
        <a href="https://www.linkedin.com/in/shekhar-sharma-2003b5372/">
          <div className='footer-card h-[42vh] w-[40vw] bg-gray-200  rounded-3xl mr-5 flex items-end p-5 text-xl font-bold'>
            <h1>Linkdin</h1>
          </div>
        </a>

      </div>
      <div className='h-[55vh] w-full flex gap-10'>
        <div className='h-full w-[35vw]'>
          <a href="https://github.com/Shekhar373">
            <div className='footer-card h-[25vh] bg-gray-200 w-full bg rounded-3xl mx-5 flex items-end p-5 text-xl font-bold'>
              <h1>Github</h1>
            </div>
          </a>
          <div className='footer-card h-[25vh] w-full bg-gray-200  rounded-3xl mx-5 mt-5 flex items-end p-5 text-xl font-bold'>
            <h1>Instagram</h1>
          </div>

        </div>
        {/* <a href="mailto:shekhar72898@gmail.com">
          <div className='footer-card h-[53vh] w-[59vw] bg-gray-200  mr-5 xl:mr-0 rounded-3xl flex items-end p-5 text-xl font-bold'>
            <h1>Contact</h1>
          </div>
        </a> */}
      </div>
    </div>
  )
}

export default Footer