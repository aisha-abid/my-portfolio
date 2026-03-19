import React from 'react'
import { FaLaptopCode, FaUserGraduate, FaLightbulb } from 'react-icons/fa'
const About = () => {
  return (
<section
      id="about"
      className="px-6 py-30 bg-white text-[#0b2e41] flex flex-col items-center justify-center"
    >
       <h1 className="text-4xl font-bold text-[#0b2e41] md:mb-10 md:text-5xl">
        About Me
      </h1>
     
      <div className="grid md:grid-cols-3 gap-8">
  
  {/* Card 1 */}
  <div className="flex flex-col items-center p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition-all">
    <div className="bg-[#f16540] p-4 rounded-full mb-4">
      <FaLaptopCode className="text-white" size={28} />
    </div>
    <p className="text-gray-700 text-center leading-relaxed">
      I love crafting intuitive, clean, and meaningful digital experiences that feel smooth and engaging to use.
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition-all">
    <div className="bg-[#1d5452] p-4 rounded-full mb-4">
      <FaUserGraduate className="text-white" size={28} />
    </div>
    <p className="text-gray-700 text-center leading-relaxed">
      I completed my BS in IT where I discovered my passion for solving problems and creating smart solutions.
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition-all">
    <div className="bg-[#eec248] p-4 rounded-full mb-4">
      <FaLightbulb className="text-white" size={28} />
    </div>
    <p className="text-gray-700 text-center leading-relaxed">
      I believe in continuous learning, taking on challenges, and building an impactful career in tech.
    </p>
  </div>
</div>

    </section>




  )
}

export default About