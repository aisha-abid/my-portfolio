// import React, { useState } from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa'

// const navItems = [
//   { name: 'Home', id: 'home' },
//   { name: 'About', id: 'about' },
//   { name: 'Skills', id: 'skills' },
//   { name: 'Services', id: 'services' },
//   { name: 'Journey', id: 'journey' },
//   { name: 'Contact', id: 'contact' },
// ]

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState('home')

//   const toggleMenu = () => {
//     setIsOpen((prevIsOpen) => !prevIsOpen)
//   }

//   const handleScroll = (id) => {
//     const section = document.getElementById(id)

//     if (!section) {
//       return
//     }

//     section.scrollIntoView({ behavior: 'smooth' })
//     setActiveSection(id)
//     setIsOpen(false)
//   }

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#0b2e41]/10 bg-[#f8f7f1]/95 text-[#0b2e41] shadow-sm backdrop-blur-lg">
//       <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
//         <button
//           type="button"
//           onClick={() => handleScroll('home')}
//           className="shrink-0"
//           aria-label="Go to home section"
//         >
//           <img src="/mylogo.svg" className="h-10 sm:h-11" alt="Ayesha Naz logo" />
//         </button>

//         <nav className="hidden lg:block" aria-label="Primary navigation">
//           <ul className="flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
//             {navItems.map((item) => (
//               <li key={item.id}>
//                 <button
//                   type="button"
//                   onClick={() => handleScroll(item.id)}
//                   className={`transition-colors ${
//                     activeSection === item.id
//                       ? 'font-semibold text-[#286f6c]'
//                       : 'hover:text-[#286f6c]'
//                   }`}
//                   aria-current={activeSection === item.id ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div className="flex items-center gap-2 sm:gap-3">
//          <a
//   href="#contact"
//   onClick={(e) => {
//     e.preventDefault()
//     handleScroll('contact')
//   }}
//   className="group relative isolate inline-flex items-center gap-2
//     overflow-hidden rounded-full border border-[#286f6c]/50
//     bg-[#0b2e41] px-5 py-2.5 text-sm font-semibold
//     text-[#f8f7f1] shadow-md
//     transition-all duration-300 ease-out
//     hover:-translate-y-0.5 hover:border-[#286f6c]
//     hover:bg-[#154748]
//     hover:shadow-[0_0_24px_rgba(40,111,108,0.4)]
//     focus-visible:outline-none focus-visible:ring-2
//     focus-visible:ring-[#286f6c] focus-visible:ring-offset-2
//     active:scale-95"
// >
//   {/* Animated shine effect */}
//   <span
//     aria-hidden="true"
//     className="pointer-events-none absolute inset-0 -translate-x-[150%]
//       skew-x-[-20deg] bg-gradient-to-r from-transparent
//       via-white/20 to-transparent
//       transition-transform duration-700
//       group-hover:translate-x-[150%]
//       motion-safe:animate-[hireShine_4s_ease-in-out_infinite]
//       motion-reduce:animate-none"
//   />

//   <span className="relative z-10">Hire Me</span>

//   <svg
//     aria-hidden="true"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//     className="relative z-10 h-4 w-4
//       transition-transform duration-300
//       group-hover:-translate-y-0.5
//       group-hover:translate-x-0.5"
//   >
//     <path
//       d="M7 17 17 7M7 7h10v10"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// </a>

//           <button
//             type="button"
//             onClick={toggleMenu}
//             className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0b2e41]/15 bg-white text-[#0b2e41] shadow-sm transition-colors hover:bg-[#f1efe4] lg:hidden"
//             aria-expanded={isOpen}
//             aria-controls="mobile-menu"
//             aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
//           >
//             {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
//           </button>
//         </div>

//         {isOpen && (
//           <nav
//             id="mobile-menu"
//             className="absolute left-4 right-4 top-full mt-3 rounded-3xl border border-[#0b2e41]/10 bg-[#0b2e41] p-4 text-[#f8f7f1] shadow-xl lg:hidden"
//             aria-label="Mobile navigation"
//           >
//             <ul className="flex flex-col gap-2">
//               {navItems.map((item) => (
//                 <li key={item.id}>
//                   <button
//                     type="button"
//                     onClick={() => handleScroll(item.id)}
//                     className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base transition-colors ${
//                       activeSection === item.id
//                         ? 'bg-[#286f6c] text-white'
//                         : 'hover:bg-[#154748]'
//                     }`}
//                     aria-current={activeSection === item.id ? 'page' : undefined}
//                   >
//                     <span>{item.name}</span>
//                     <span className="text-xs uppercase tracking-[0.2em] text-[#f8f7f1]/60">
//                       Go
//                     </span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Navbar
import React, { useState, useEffect, useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Services', id: 'services' },
  { name: 'Journey', id: 'journey' },
  { name: 'Projects', id: 'projects' },
  { name: 'Reviews', id: 'reviews' },
  { name: 'Contact', id: 'contact' },
]

// WhatsApp (number without + or spaces)
const WHATSAPP_NUMBER = '923248570291'
const WHATSAPP_MESSAGE = 'I wanna discuss one project'
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

const HEADER_OFFSET = 64 // sticky navbar height (approx.)
const ACTIVE_LINE = 100 // a section becomes active once its top crosses this line

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const isClickScrolling = useRef(false)
  const unlockTimer = useRef(null)

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  // Scroll spy: update the active item while the user scrolls
  useEffect(() => {
    const updateActive = () => {
      if (isClickScrolling.current) return

      let current = navItems[0].id

      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top <= ACTIVE_LINE) {
          current = item.id
        }
      }

      // Bottom of the page -> last section (in case it is short)
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      if (atBottom) current = navItems[navItems.length - 1].id

      setActiveSection(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)

    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
      clearTimeout(unlockTimer.current)
    }
  }, [])

  const handleScroll = (id) => {
    const section = document.getElementById(id)

    if (!section) {
      return
    }

    // Highlight the clicked item right away and ignore the spy
    // until the smooth scroll has finished (no flicker on the way)
    isClickScrolling.current = true
    setActiveSection(id)
    setIsOpen(false)

    const top =
      section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })

    clearTimeout(unlockTimer.current)
    unlockTimer.current = setTimeout(() => {
      isClickScrolling.current = false
    }, 900)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#0b2e41]/10 bg-[#f8f7f1]/95 text-[#0b2e41] shadow-sm backdrop-blur-lg">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <button
          type="button"
          onClick={() => handleScroll('home')}
          className="shrink-0"
          aria-label="Go to home section"
        >
          <img src="/mylogo.svg" className="h-10 sm:h-11" alt="Ayesha Naz logo" />
        </button>

        <nav className="hidden lg:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleScroll(item.id)}
                  className={`relative pb-1 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-[#286f6c] after:transition-transform after:duration-300 ${
                    activeSection === item.id
                      ? 'font-semibold text-[#286f6c] after:scale-x-100'
                      : 'hover:text-[#286f6c] after:scale-x-0'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative isolate inline-flex items-center gap-2
              overflow-hidden rounded-full border border-[#286f6c]/50
              bg-[#0b2e41] px-5 py-2.5 text-sm font-semibold
              text-[#f8f7f1] shadow-md
              transition-all duration-300 ease-out
              hover:-translate-y-0.5 hover:border-[#286f6c]
              hover:bg-[#154748]
              hover:shadow-[0_0_24px_rgba(40,111,108,0.4)]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#286f6c] focus-visible:ring-offset-2
              active:scale-95"
          >
            {/* Animated shine effect */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-[150%]
                skew-x-[-20deg] bg-gradient-to-r from-transparent
                via-white/20 to-transparent
                transition-transform duration-700
                group-hover:translate-x-[150%]
                motion-safe:animate-[hireShine_4s_ease-in-out_infinite]
                motion-reduce:animate-none"
            />

            <span className="relative z-10">Hire Me</span>

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="relative z-10 h-4 w-4
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5"
            >
              <path
                d="M7 17 17 7M7 7h10v10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <button
            type="button"
            onClick={toggleMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0b2e41]/15 bg-white text-[#0b2e41] shadow-sm transition-colors hover:bg-[#f1efe4] lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {isOpen && (
          <nav
            id="mobile-menu"
            className="absolute left-4 right-4 top-full mt-3 rounded-3xl border border-[#0b2e41]/10 bg-[#0b2e41] p-4 text-[#f8f7f1] shadow-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleScroll(item.id)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base transition-colors ${
                      activeSection === item.id
                        ? 'bg-[#286f6c] text-white'
                        : 'hover:bg-[#154748]'
                    }`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#f8f7f1]/60">
                      Go
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar