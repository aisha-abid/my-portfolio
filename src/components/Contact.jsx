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
    <section id="contact" className=" py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#0b2e41] relative inline-block">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'd love to collaborate on exciting ideas and meaningful projects.
            Whether you want to build something new or improve an existing product,
            feel free to reach out!
          </p>

          <div className="flex gap-6">
            <a
              href="mailto:ashimughal687@gmail.com"
              className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1d5452] hover:scale-110 transition-transform cursor-pointer shadow-md"
            >
              <MdEmail size={24} className="text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/ayesha-naz"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center bg-[#eec248] hover:scale-110 transition-transform cursor-pointer shadow-md"
            >
              <FaLinkedin size={24} className="text-white" />
            </a>

            <a
              href="https://github.com/aisha-abid"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center bg-[#f16540] hover:scale-110 transition-transform cursor-pointer shadow-md"
            >
              <FaGithub size={24} className="text-white" />
            </a>
          </div>
        </div>

        <div className="relative  w-[90%] md:w-[75%] mx-auto">
          <form
            onSubmit={handleSubmit}
            className="relative bg-white rounded-2xl p-8 space-y-5 shadow-xl border-[3px] animate-borderRotate"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 focus:border-[#1d5452]
      focus:ring-2 focus:ring-[#1d5452]/50 outline-none rounded-xl p-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 focus:border-[#eec248]
      focus:ring-2 focus:ring-[#eec248]/50 outline-none rounded-xl p-3"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write Message"
              rows="5"
              className="w-full border border-gray-300 focus:border-[#f16540]
    focus:ring-2 focus:ring-[#f16540]/50 outline-none rounded-xl p-3"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#286f6c] text-white font-semibold py-3 rounded-xl 
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
