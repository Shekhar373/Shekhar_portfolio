import React from 'react'

const Footer = () => {
  return (
    <div className='h-screen w-full grid grid-cols-3 grid-rows-4 gap-5 p-5'>
      <div className='bg-gray-200 text-xl font-bold flex items-end p-5 col-span-2 row-span-2 rounded-3xl'>
        <h1>Work</h1>
      </div>
      <div className='bg-gray-200 text-xl font-bold flex items-end p-5 row-span-2 rounded-3xl'>
        <h1>Lab</h1>
      </div>
      <div className='bg-gray-200 text-xl font-bold flex items-end p-5 rounded-3xl'>
        <h1>Github</h1>
      </div>
      <div className='bg-gray-200 text-xl font-bold flex items-end p-5 row-span-2 rounded-3xl'>
        <h1>Instagram</h1>
      </div>
      <div className='bg-gray-200 text-xl font-bold flex items-end p-5 row-span-2 rounded-3xl'>
        <h1>Contact</h1>
      </div>
      <div className='bg-gray-200 text-xl font-bold flex items-end p-5 rounded-3xl'>
        <h1>Linkdin</h1>
      </div>

    </div>
    
  )
}

export default Footer