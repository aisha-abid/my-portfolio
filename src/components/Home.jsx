import React from 'react'
const Home = () => {
  return (
     <section className=' bg-[#f8f7f1] text-[#0b2e41] px-5 py-14 md:px-10 ' id='home'>
      <div className='flex flex-col items-center justify-center md:flex-row md:items-start'>
        <div className='flex flex-col gap-4 md:w-1/3 md:gap-18'>
          <h1 className='text-5xl font-bold leading-tight:'>Hey There,<br/>
        I'm Ayesha Naz</h1>
            <p className='font-medium uppercase tracking-wider text-sm text-[#286f6c] '>
    Full Stack Web Developer
  </p>
        </div>

          <div className='-mt-5 relative w-[320px]  h-[450px] md:-mt-10 md:w-[420px] '>
            <img src="/bgc.svg" alt="Background Image" className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full' />
          <img src="/myImg1.png" alt="Ayesha Image"
          className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] z-20' />
        </div>

        
        <div className='hidden  flex-col gap-30 w-1/3 relative z-50 pointer-events-auto md:flex'>
          <p className='leading-relaxed'>I craft visually stunning and user-friendly <br/> websites that bring ideas to life.</p>
        <a className='text-[#f16540] text-medium  hover:underline ' href="mailto:aisha.software.engineer@gmail.com">aisha.software.engineer@gmail.com</a>
        </div>
        
       
      </div>
     
      
    </section>
  )
}

export default Home