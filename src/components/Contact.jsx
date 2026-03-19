import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailJsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      alert("Contact form is not configured yet. Please add EmailJS environment variables.");
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        formData,
        emailJsConfig.publicKey,
      );
      alert("Message sent successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      alert("Failed to send message, try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-5 py-16 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
        <div className="space-y-5 text-center md:space-y-6 md:text-left">
          <h2 className="relative inline-block text-3xl font-bold text-[#0b2e41] sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
            I'd love to collaborate on exciting ideas and meaningful projects.
            Whether you want to build something new or improve an existing product,
            feel free to reach out!
          </p>

          <div className="flex justify-center gap-4 sm:gap-6 md:justify-start">
            <a
              href="mailto:ashimughal687@gmail.com"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1d5452] shadow-md transition-transform hover:scale-110 sm:h-12 sm:w-12"
            >
              <MdEmail size={24} className="text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/ayesha-naz"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eec248] shadow-md transition-transform hover:scale-110 sm:h-12 sm:w-12"
            >
              <FaLinkedin size={24} className="text-white" />
            </a>

            <a
              href="https://github.com/aisha-abid"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f16540] shadow-md transition-transform hover:scale-110 sm:h-12 sm:w-12"
            >
              <FaGithub size={24} className="text-white" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none md:w-[85%]">
          <form
            onSubmit={handleSubmit}
            className="relative space-y-4 rounded-2xl border-[3px] bg-white p-5 shadow-xl animate-borderRotate sm:p-6 md:space-y-5 md:p-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#1d5452]
      focus:ring-2 focus:ring-[#1d5452]/50 sm:p-3 sm:text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#eec248]
      focus:ring-2 focus:ring-[#eec248]/50 sm:p-3 sm:text-base"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write Message"
              rows="5"
              className="min-h-[120px] w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#f16540]
    focus:ring-2 focus:ring-[#f16540]/50 sm:min-h-[140px] sm:p-3 sm:text-base"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-[#286f6c] py-3 text-white font-semibold 
      shadow-md hover:scale-[1.04] transition-all disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
