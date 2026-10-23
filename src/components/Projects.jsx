import React, { useRef } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from "framer-motion";
import {
  FiArrowUpRight,
  FiArrowLeft,
  FiArrowRight,
  FiSend,
} from "react-icons/fi";

import nurriddinImage from "../assets/images/projects/nurriddin.png";
import wallsVerseImage from "../assets/images/projects/wallsverse.png";
import aivoraSysImage from "../assets/images/projects/aivorasys.png";

const SPEED = 40; // pixels per second (kam = slow, zyada = fast)

const projects = [
  {
    id: 1,
    number: "01",
    title: "Nurriddin Construction",
    category: "Construction Website",
    description:
      "A professional digital presence showcasing construction services and completed projects.",
    image: nurriddinImage,
    link: "YOUR_NURRIDDIN_LIVE_URL",
    imageBg: "#eec248",
    accent: "#eec248",
  },
  {
    id: 2,
    number: "02",
    title: "Walls Verse",
    category: "E-commerce Website",
    description:
      "A modern online storefront designed to present products through a smooth shopping experience.",
    image: wallsVerseImage,
    link: "YOUR_WALLS_VERSE_LIVE_URL",
    imageBg: "#1d5452",
    accent: "#1d5452",
  },
  {
    id: 3,
    number: "03",
    title: "AivoraSys",
    category: "Business Website",
    description:
      "A clean and modern website designed to present business services with clarity and confidence.",
    image: aivoraSysImage,
    link: "YOUR_AIVORASYS_LIVE_URL",
    imageBg: "#b9ded5",
    accent: "#f16540",
  },
];

// value ko hamesha (-w, 0] range mein rakhta hai
const wrap = (v, w) => (((v % w) - w) % w);

const ProjectCard = ({ project, hidden = false }) => (
  <article
    aria-hidden={hidden}
    className="group w-[300px] flex-none overflow-hidden rounded-[23px] border border-[#1d5452]/[0.06] bg-white shadow-[0_8px_30px_rgba(24,50,45,0.06)] transition-shadow duration-500 hover:shadow-[0_20px_45px_rgba(24,50,45,0.13)] sm:w-[400px] md:w-[460px]"
  >
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={hidden ? -1 : 0}
      aria-label={`Visit ${project.title} website`}
      className="block p-3 pb-0 sm:p-4 sm:pb-0"
    >
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-t-[16px] sm:rounded-t-[20px]"
        style={{ backgroundColor: project.imageBg }}
      >
        <img
          src={project.image}
          alt={`${project.title} website screenshot`}
          loading="lazy"
          draggable={false}
          className="h-full w-full object-contain object-top p-2 transition-transform duration-700 group-hover:scale-[1.045] sm:p-3"
        />

        <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1d5452] shadow-md transition-colors duration-300 group-hover:bg-[#eec248]">
          <FiArrowUpRight size={21} />
        </span>

        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 font-['Inter'] text-[10px] font-bold tracking-wide text-[#1d5452] shadow-sm">
          PROJECT {project.number}
        </span>
      </div>
    </a>

    <div className="p-5 sm:p-6">
      <div className="mb-3 flex items-center gap-2">
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: project.accent }}
        />
        <span className="font-['Inter'] text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d5452]">
          {project.category}
        </span>
      </div>

      <h3 className="font-['Poppins'] text-xl font-bold leading-snug tracking-tight text-[#102b2b] sm:text-2xl">
        {project.title}
      </h3>

      <p className="mt-3 font-['Inter'] text-sm leading-7 text-gray-600">
        {project.description}
      </p>

      <div className="mt-5 border-t border-gray-100 pt-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={hidden ? -1 : 0}
          className="group/link inline-flex items-center gap-2 font-['Inter'] text-sm font-bold text-[#1d5452] transition-colors hover:text-[#f16540]"
        >
          View Live Project
          <FiArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
          />
        </a>
      </div>
    </div>
  </article>
);

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const setRef = useRef(null); // pehla card-set (width naapne ke liye)
  const pausedRef = useRef(false); // hover par pause
  const busyRef = useRef(false); // button animation chal rahi ho
  const controlsRef = useRef(null);

  const getWidth = () => setRef.current?.offsetWidth || 0;

  // Auto-move
  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion || pausedRef.current || busyRef.current) return;
    const w = getWidth();
    if (!w) return;
    x.set(wrap(x.get() - (SPEED * delta) / 1000, w));
  });

  // Next / Previous (ek card ke barabar)
  const slide = (direction) => {
    const w = getWidth();
    if (!w) return;

    const step = w / projects.length;
    controlsRef.current?.stop();

    let current = wrap(x.get(), w);
    if (direction < 0 && current > -step) current -= w; // peeche jaane ke liye jagah
    x.set(current);

    const target = direction > 0 ? current - step : current + step;

    busyRef.current = true;
    controlsRef.current = animate(x, target, {
      duration: shouldReduceMotion ? 0 : 0.6,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        busyRef.current = false;
      },
    });
  };

  const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="overflow-hidden bg-[#fffefa] px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-9 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end"
        >
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1d5452]/10 px-4 py-2 font-['Inter'] text-xs font-bold uppercase tracking-[0.16em] text-[#1d5452]">
              <span className="h-2 w-2 rounded-full bg-[#eec248]" />
              Selected Work
            </span>

            <h2 className="font-['Poppins'] text-3xl font-extrabold leading-tight tracking-tight text-[#102b2b] sm:text-4xl md:text-5xl lg:text-6xl">
              My Latest <span className="text-[#1d5452]">Projects</span>
              <span className="text-[#f16540]">.</span>
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-[#eec248]" />

            <p className="mt-5 max-w-xl font-['Inter'] text-sm leading-7 text-gray-600 sm:text-base">
              A selection of websites and digital experiences built with
              care, creativity and attention to detail.
            </p>
          </div>

          {/* Stylish CTA pill */}
          <a
            href="#contact"
            className="group relative inline-flex w-fit items-center gap-4 overflow-hidden rounded-full border border-[#1d5452]/20 bg-white py-2 pl-6 pr-2 font-['Inter'] text-sm font-bold text-[#1d5452] shadow-[0_8px_24px_rgba(29,84,82,0.10)] transition-all duration-500 hover:border-[#1d5452] hover:shadow-[0_14px_34px_rgba(29,84,82,0.22)]"
          >
            {/* hover par neeche se fill hone wala background */}
            <span className="absolute inset-0 translate-y-full bg-[#1d5452] transition-transform duration-500 ease-out group-hover:translate-y-0" />

            <span className="relative flex items-center gap-2 transition-colors duration-500 group-hover:text-white">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f16540] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f16540]" />
              </span>
              Have a project in mind?
            </span>

            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#eec248] text-[#102b2b] transition-transform duration-500 group-hover:rotate-45 group-hover:scale-105">
              <FiArrowUpRight size={21} />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Auto-moving ticker (full width) */}
      <div
        className="relative -mx-5 overflow-hidden py-4 sm:-mx-8"
        aria-label="Project showcase"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        {/* Edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[#fffefa] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[#fffefa] to-transparent sm:w-24" />

        <motion.div style={{ x }} className="flex w-max will-change-transform">
          {/* Set 1 (real) */}
          <div ref={setRef} className="flex gap-5 pr-5 sm:gap-6 sm:pr-6">
            {projects.map((project) => (
              <ProjectCard key={`a-${project.id}`} project={project} />
            ))}
          </div>

          {/* Set 2 & 3 (loop ke liye duplicates) */}
          <div className="flex gap-5 pr-5 sm:gap-6 sm:pr-6" aria-hidden="true">
            {projects.map((project) => (
              <ProjectCard key={`b-${project.id}`} project={project} hidden />
            ))}
          </div>
          <div className="flex gap-5 pr-5 sm:gap-6 sm:pr-6" aria-hidden="true">
            {projects.map((project) => (
              <ProjectCard key={`c-${project.id}`} project={project} hidden />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Previous / Next */}
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-end gap-3">
        <span className="mr-2 font-['Inter'] text-xs font-semibold text-gray-500">
          Explore projects
        </span>

        <motion.button
          type="button"
          onClick={() => slide(-1)}
          whileTap={{ scale: 0.92 }}
          aria-label="Previous project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1d5452]/20 text-[#1d5452] transition-colors hover:border-[#1d5452] hover:bg-[#1d5452] hover:text-white"
        >
          <FiArrowLeft size={19} />
        </motion.button>

        <motion.button
          type="button"
          onClick={() => slide(1)}
          whileTap={{ scale: 0.92 }}
          aria-label="Next project"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1d5452] text-white shadow-md transition-colors hover:bg-[#f16540]"
        >
          <FiArrowRight size={19} />
        </motion.button>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Contact CTA */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 flex flex-col gap-5 rounded-[24px] border border-[#1d5452]/10 bg-[#1d5452]/[0.045] p-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:p-8 md:px-10"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-[#1d5452] text-white sm:h-16 sm:w-16">
              <FiSend size={23} />
            </span>

            <div>
              <h3 className="font-['Poppins'] text-lg font-bold text-[#102b2b] sm:text-xl">
                Have a project in mind?
              </h3>
              <p className="mt-1 font-['Inter'] text-sm leading-6 text-gray-600">
                Let&apos;s bring your ideas to life.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1d5452] px-7 py-4 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#eec248] hover:text-[#102b2b] sm:w-auto"
          >
            Let&apos;s Talk
            <FiArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;