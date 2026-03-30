import React, { useState } from 'react'

const projects = [
  {
    role: 'Intern at U Dev',
    date: 'Oct 2025 - Feb 2026',
    dotClass: 'bg-[#1d5452] text-[#1d5452] animate-timelinePulse',
    title: 'All in one School System',
    description: [
      'Working on full stack applications using React, Node.js, Express and MongoDB.',
      'Creating dashboards, CRUD forms and backend APIs.',
      'Improving UI/UX through teamwork with senior devs.',
      'Learning deployment and version control with Git & GitHub.',
    ],
    githubUrl: 'https://github.com/aisha-abid/all-in-one-school-system',
    videoUrl: '/videos/school.mp4',
    liveDemoUrl: '',
  },
  {
    role: 'Final Year Project',
    date: 'Jul 2025 - Sep 2025',
    dotClass: 'bg-[#eec248] text-[#eec248] animate-timelinePulseWarm',
    title: 'Event Nest System',
    description: [
      'Built complete event booking system from scratch.',
      'Secure login, smooth booking flow and admin controls.',
      'Responsive layout with strong form validation, customer and admin chat functionality.',
      'Successfully submitted and approved in final evaluation.',
    ],
    githubUrl: 'https://github.com/aisha-abid/Event-Nest-System',
    videoUrl: '/videos/event-nest.mp4',
    liveDemoUrl: 'https://event-nest-system.vercel.app/',
  },
]

const Work = () => {
  const [activeVideo, setActiveVideo] = useState('')

  return (
    <>
      <section
        id="journey"
        className="flex flex-col items-center justify-center bg-[#f8f7f1] px-5 py-30 md:py-20"
      >
        <h1 className="mb-10 text-4xl font-bold text-[#0b2e41] lg:mb-16 lg:text-5xl">
          My Journey
        </h1>

        <div className="flex w-full max-w-6xl justify-center gap-5 lg:gap-16">
          <div className="hidden lg:flex flex-col justify-between py-10 mb-8 text-right">
            {projects.map((project) => (
              <div key={project.title}>
                <h3 className="text-lg font-bold text-[#0b2e41]">{project.role}</h3>
                <p className="text-sm text-gray-600">{project.date}</p>
              </div>
            ))}
          </div>

          <div className="flex w-10 flex-col items-center">
            {projects.map((project, index) => (
              <React.Fragment key={project.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-gray-300">
                  <div
                    className={`relative flex h-8 w-8 items-center justify-center rounded-full ${project.dotClass}`}
                  >
                    <span className="timeline-dot-ring" />
                  </div>
                </div>

                {index < projects.length - 1 && (
                  <div className="animate-timelineShimmer grow border-l-2 border-dashed border-gray-300" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="max-w-md flex flex-col gap-10 text-left">
            {projects.map((project) => (
              <div key={project.title} className="leading-relaxed text-gray-700">
                <h3 className="text-lg font-bold text-[#0b2e41]">{project.title}</h3>
                <p className="mt-1">
                  {project.description.map((line) => (
                    <React.Fragment key={line}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#0b2e41]/20 px-4 py-2 text-sm font-medium text-[#0b2e41] transition-colors hover:border-[#286f6c] hover:text-[#286f6c]"
                  >
                    GitHub
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[#f1efe4] px-4 py-2 text-sm font-medium text-[#0b2e41] transition-colors hover:bg-[#e4e0cf] hover:text-[#286f6c]"
                    >
                      Live Demo
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveVideo(project.videoUrl)}
                    className="rounded-full bg-[#0b2e41] px-4 py-2 text-sm font-medium text-[#f8f7f1] transition-all duration-300 hover:bg-[#286f6c]"
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setActiveVideo('')}
        >
          <div
            className="w-full max-w-3xl rounded-2xl bg-white p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveVideo('')}
                className="rounded-full border border-[#0b2e41]/15 px-4 py-2 text-sm font-medium text-[#0b2e41] transition-colors hover:bg-[#f1efe4]"
              >
                Close
              </button>
            </div>
            <video controls autoPlay className="w-full rounded-xl bg-black">
              <source src={activeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  )
}

export default Work
