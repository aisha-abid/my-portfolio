import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Services', id: 'services' },
  { name: 'Journey', id: 'journey' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  const handleScroll = (id) => {
    const section = document.getElementById(id)

    if (!section) {
      return
    }

    section.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
    setIsOpen(false)
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
                  className={`transition-colors ${
                    activeSection === item.id
                      ? 'font-semibold text-[#286f6c]'
                      : 'hover:text-[#286f6c]'
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
          <button
            type="button"
            onClick={() => handleScroll('contact')}
            className="rounded-full bg-[#0b2e41] px-4 py-2 text-sm font-medium text-[#f8f7f1] transition-all duration-300 hover:bg-[#286f6c] sm:px-5"
            aria-label="Go to contact section"
          >
            Contact
          </button>

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
