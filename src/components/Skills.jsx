import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";


const Skills = () => {
  return (
<section className=" bg-[#f8f7f1] py-30 px-10 text-white flex justify-center"
id='skills'>
  <div className="max-w-4xl text-center space-y-12">

    <h2 className="text-4xl font-bold tracking-wide text-[#0b2e41]">
      MERN STACK
    </h2>

    <div className="flex flex-wrap justify-center items-center gap-12">

      {/* MongoDB */}
      <div className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300">
        <div className="p-4 rounded-2xl transition-all duration-300 text-[rgb(9,84,44)]
        group-hover:scale-125 group-hover:-translate-y-3 
        group-hover:rotate-6 group-hover:shadow-[0_0_20px_currentColor]">
          <SiMongodb size={70} />
        </div>
        <span className=" text-[rgb(9,84,44)] opacity-60 transition-all duration-300 group-hover:opacity-100">
          MongoDB
        </span>
      </div>

      {/* Express */}
      <div className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300">
        <div className="p-4 rounded-2xl transition-all duration-300 text-[#eec248]
        group-hover:scale-125 group-hover:-translate-y-3 
        group-hover:rotate-6 group-hover:shadow-[0_0_20px_currentColor]">
          <SiExpress size={70} />
        </div>
        <span className="text-[#eec248] opacity-60 transition-all duration-300 group-hover:opacity-100">
          Express
        </span>
      </div>

      {/* React */}
      <div className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300">
        <div className="p-4 rounded-2xl transition-all duration-300 text-[#61dbfb]
        group-hover:scale-125 group-hover:-translate-y-3 
        group-hover:rotate-6 group-hover:shadow-[0_0_20px_currentColor]">
          <FaReact size={70} />
        </div>
        <span className="text-[#61dbfb] opacity-60 transition-all duration-300 group-hover:opacity-100">
          React
        </span>
      </div>

      {/* Node.js */}
      <div className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300">
        <div className="p-4 rounded-2xl transition-all duration-300 text-[#8cc84b]
        group-hover:scale-125 group-hover:-translate-y-3 
        group-hover:rotate-6 group-hover:shadow-[0_0_20px_currentColor]">
          <SiNodedotjs size={70} />
        </div>
        <span className="text-[#568a1f] opacity-60 transition-all duration-300 group-hover:opacity-100">
          Node.js
        </span>
      </div>

    </div>
  </div>
</section>


  )
}

export default Skills