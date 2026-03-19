import React from 'react'

const Work = () => {
  return (
    <section id='journey' className="flex flex-col items-center justify-center bg-[#f8f7f1] py-30  px-5 md:py-20">
      <h1 className="text-4xl mb-10 font-bold text-[#0b2e41] lg:mb-16 lg:text-5xl">
        My Journey
      </h1>

      <div className="flex justify-center gap-5 w-full max-w-6xl lg:gap-16">
        <div className="hidden lg:flex flex-col  justify-between mb-8 text-right py-10">
          <div>
            <h3 className="text-lg font-bold text-[#0b2e41]">
              MERN Stack Developer
            </h3>
            <p className="text-sm text-gray-600">Oct 2025 - Present</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#0b2e41]">
              Final Year Project
            </h3>
            <p className="text-sm text-gray-600">Jul 2025 - Sep 2025</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-dashed border-gray-300">
            <div className="w-8 h-8 rounded-full bg-[#1d5452]" />
          </div>

          <div className="grow border-l-2 border-dashed border-gray-300" />

          <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-dashed border-gray-300">
            <div className="w-8 h-8 rounded-full bg-[#eec248]" />
          </div>
        </div>

        <div className="flex flex-col gap-10 text-left max-w-md">
          <div className="text-gray-700 leading-relaxed">
            <h3 className="text-lg font-bold text-[#0b2e41]">
              Intern at U DEV
            </h3>
            <p>
              Working on full stack applications using React, Node.js, Express and MongoDB.<br />
              Creating dashboards, CRUD forms and backend APIs.<br />
              Improving UI/UX through teamwork with senior devs.<br />
              Learning deployment and version control with Git & GitHub.
            </p>
          </div>

          <div className="text-gray-700 leading-relaxed">
            <h3 className="text-lg font-bold text-[#0b2e41]">
              Event Nest System
            </h3>
            <p>
              Built complete event booking system from scratch.<br />
              Secure login, smooth booking flow and admin controls.<br />
              Responsive layout with strong form validation, customer and admin chat functionality.<br />
              Successfully submitted and approved in final evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
