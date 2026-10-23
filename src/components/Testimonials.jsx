import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";
import nurriddinImg from "../assets/images/clients/nurriddin.png";

/* Shows the photo if `image` exists, otherwise falls back to initials */
const Avatar = ({ person, className }) => {
  const [failed, setFailed] = useState(false);
  const showImage = person.image && !failed;

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-full font-bold ${className}`}
      style={{ backgroundColor: person.avatar }}
    >
      {showImage ? (
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        person.initials
      )}
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    name: "Nurriddin",
    role: "Nurriddin Construction",
    initials: "N",
    avatar: "#eec248",
    image: nurriddinImg,
    project: "Construction Website",
    quote:
      "Huge compliments to the creator of the Nurriddin Construction & Renovation Crew website! The website is stunning, super intuitive, and exceptionally well-designed. It beautifully showcases the company’s services, projects, and commitment to quality craftsmanship. Thank you for your talent, dedication, and for bringing such a brilliant project to life! Highly recommended! 🚀",
  },
  {
    id: 2,
    name: "Mr. Rahim",
    role: "AivoraSys",
    initials: "MR",
    avatar: "#b9ded5",
    project: "Business Website",
    quote: "Good work and delivered exactly, what I needed.",
  },
  {
    id: 3,
    name: "Makhtoom",
    role: "Walls Verse",
    initials: "M",
    avatar: "#f3c5ad",
    project: "Walls Verse Website",
    quote:
      "Loved the website, it looks so good! You were super cooperative, never pushed or bothered me, and delivered right on my timeline. Thank you!",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const reduceMotion = useReducedMotion();

  const previous = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const getTestimonial = (offset) =>
    testimonials[
      (activeIndex + offset + testimonials.length) %
        testimonials.length
    ];

  return (
    <section
      id="reviews"
      className="overflow-hidden bg-[#faf8f2] px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f9edd7] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#b77b13]">
            <span className="h-2 w-2 rounded-full bg-[#eec248]" />
            Reviews
          </span>

          <h2 className="font-['Poppins'] text-3xl font-extrabold tracking-tight text-[#102b2b] sm:text-4xl md:text-5xl">
            People Talk <span className="text-[#1d5452]">About Us</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#eec248]" />

          <p className="mx-auto mt-5 max-w-xl font-['Inter'] text-sm leading-7 text-gray-600 sm:text-base">
            Every project tells a story. Here&apos;s what clients have to
            say about working with us and bringing their ideas to life.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative mx-auto max-w-6xl">
          <div className="relative flex min-h-[390px] items-center justify-center">
            <div className="flex w-full items-center justify-center gap-5 sm:gap-7">
              {/* Previous card */}
              <motion.article
                key={`prev-${getTestimonial(-1).id}`}
                initial={false}
                animate={{ opacity: 0.76, scale: 0.88, x: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.45 }}
                className="hidden w-[31%] flex-none rounded-[26px] border border-[#e8e6dd] bg-white/80 p-7 shadow-sm md:block"
              >
                <div className="mb-6 flex justify-center">
                  <Avatar
                    person={getTestimonial(-1)}
                    className="h-14 w-14 border-4 border-white text-sm text-[#1d5452] shadow-md"
                  />
                </div>

                <p className="line-clamp-4 text-center font-['Inter'] text-sm leading-7 text-gray-600">
                  “{getTestimonial(-1).quote}”
                </p>

                <div className="mt-6 border-t border-gray-100 pt-5 text-center">
                  <h3 className="font-['Poppins'] text-base font-bold text-[#102b2b]">
                    {getTestimonial(-1).name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {getTestimonial(-1).role}
                  </p>
                </div>
              </motion.article>

              {/* Main card */}
              <AnimatePresence mode="wait">
                <motion.article
                  key={getTestimonial(0).id}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 14, scale: 0.98 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={
                    reduceMotion
                      ? undefined
                      : { opacity: 0, y: -10, scale: 0.98 }
                  }
                  transition={{ duration: reduceMotion ? 0 : 0.35 }}
                  className="relative z-10 w-full max-w-xl flex-none rounded-[28px] border border-white bg-white px-6 pb-8 pt-10 shadow-[0_18px_55px_rgba(29,84,82,0.09)] sm:px-10 sm:pb-10 sm:pt-12"
                >
                  {/* Decorative quote */}
                  <span className="absolute right-6 top-4 font-serif text-6xl leading-none text-[#eec248]/50">
                    ”
                  </span>

                  <div className="mb-7 flex justify-center">
                    <Avatar
                      person={getTestimonial(0)}
                      className="h-[76px] w-[76px] border-[5px] border-white text-xl text-[#102b2b] shadow-[0_5px_20px_rgba(0,0,0,0.10)]"
                    />
                  </div>

                  <div className="mb-5 flex justify-center gap-1 text-[#eec248]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar key={star} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p className="mx-auto max-w-md text-center font-['Inter'] text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                    “{getTestimonial(0).quote}”
                  </p>

                  <div className="mt-7 border-t border-gray-100 pt-6 text-center">
                    <h3 className="font-['Poppins'] text-lg font-bold tracking-tight text-[#102b2b] sm:text-xl">
                      {getTestimonial(0).name}
                    </h3>

                    <p className="mt-1 font-['Inter'] text-xs text-gray-500 sm:text-sm">
                      {getTestimonial(0).role}
                    </p>

                    <span className="mx-auto mt-5 block h-1 w-10 rounded-full bg-[#1d5452]" />
                  </div>
                </motion.article>
              </AnimatePresence>

              {/* Next card */}
              <motion.article
                key={`next-${getTestimonial(1).id}`}
                initial={false}
                animate={{ opacity: 0.76, scale: 0.88, x: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.45 }}
                className="hidden w-[31%] flex-none rounded-[26px] border border-[#e8e6dd] bg-white/80 p-7 shadow-sm md:block"
              >
                <div className="mb-6 flex justify-center">
                  <Avatar
                    person={getTestimonial(1)}
                    className="h-14 w-14 border-4 border-white text-sm text-[#1d5452] shadow-md"
                  />
                </div>

                <p className="line-clamp-4 text-center font-['Inter'] text-sm leading-7 text-gray-600">
                  “{getTestimonial(1).quote}”
                </p>

                <div className="mt-6 border-t border-gray-100 pt-5 text-center">
                  <h3 className="font-['Poppins'] text-base font-bold text-[#102b2b]">
                    {getTestimonial(1).name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {getTestimonial(1).role}
                  </p>
                </div>
              </motion.article>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <motion.button
              type="button"
              onClick={previous}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1d5452]/20 bg-white text-[#1d5452] transition-colors hover:bg-[#1d5452] hover:text-white"
            >
              <FiArrowLeft size={19} />
            </motion.button>

            <div className="flex items-center gap-2.5">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-[#1d5452]"
                      : "w-2 bg-[#1d5452]/25 hover:bg-[#eec248]"
                  }`}
                />
              ))}
            </div>

            <motion.button
              type="button"
              onClick={next}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1d5452] text-white transition-colors hover:bg-[#eec248] hover:text-[#102b2b]"
            >
              <FiArrowRight size={19} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;