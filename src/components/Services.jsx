import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'

const Services = () => {
  return (
    <div className='flex flex-col-reverse gap-10 lg:flex-row items-center justify-center px-8 py-30 text-[rgb(11,46,65)] lg:p-24'
    id='services'>
        <div className='flex flex-col gap-2 items-center justify-start'>
          <div className='flex items-center justify-start gap-3 w-full bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl p-5 cursor-pointer'>
            <div className='bg-[#1d5452] h-12 w-12 rounded-full flex items-center justify-center'><FaLaptopCode size={20} className='text-[#f8f7f1]'/> </div>Full Stack Web Application
            </div>
 

             <div className='flex items-center justify-start gap-3 w-full bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl p-5 cursor-pointer'>
            <div className='bg-[#eec248] h-12 w-12 rounded-full flex items-center justify-center'><FaLaptopCode size={20} className='text-[#f8f7f1]'/> </div>Portfolio & Personal Branding
            </div>


             <div className='flex items-center justify-start gap-3 w-full bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl p-5 cursor-pointer'>
            <div className='bg-[#f16540] h-12 w-12 rounded-full flex items-center justify-center'><FaLaptopCode size={20} className='text-[#f8f7f1]'/> </div>Custom Business Websites
            </div>

 </div>

           <div className="max-w-[500px] flex flex-col gap-6">
         <h1 className="text-5xl font-bold text-[#0b2e41]">
    What do I help?
  </h1>
          <p className="text-base leading-7 tracking-wide text-[#0b2e41]/90">
    I help businesses and individuals build their online presence with clean,
    modern and fully responsive websites. My goal is to create digital products
    that solve real problems and deliver great user experience.
  </p>

  <p className="text-base leading-7 tracking-wide text-[#0b2e41]/90">
    I combine both design and development so everything works smoothly from the
    front to the backend. Every project helps me improve and I make sure clients
    get results that support their business growth.
  </p>
        </div>
    </div>
  )
}

export default Services