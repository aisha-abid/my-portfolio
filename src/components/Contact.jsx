import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

import {
  MdCheckCircle,
  MdErrorOutline,
  MdClose,
} from "react-icons/md";

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Replace with your WhatsApp number.
  // Include country code without + or spaces.
  const whatsappNumber = "923248570291";
  const whatsappMessage = "Hi! I'd like to discuss a project with you.";

  const emailJsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  useEffect(() => {
    if (!status.message) return undefined;

    const timeoutId = window.setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 4500);

    return () => window.clearTimeout(timeoutId);
  }, [status]);

  const handleChange = (e) => {
    setStatus({ type: "", message: "" });

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setStatus({ type: "", message: "" });

      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        formData,
        emailJsConfig.publicKey
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch{
      setStatus({
        type: "error",
        message:
          "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
  {
    name: "WhatsApp",
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    icon: FaWhatsapp,
    color: "bg-[#1d5452]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aisha.software.engineer/",
    icon: FaInstagram,
    color: "bg-[#eec248]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ayesha-naz",
    icon: FaLinkedin,
    color: "bg-[#f16540]",
  },
];

  return (
    <section id="contact" className="px-5 py-16 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">

        {/* Contact Information */}
        <div className="space-y-5 text-center md:space-y-6 md:text-left">
          <h2 className="relative inline-block text-3xl font-bold text-[#0b2e41] sm:text-4xl">
            Let's Work Together
          </h2>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
            I'd love to collaborate on exciting ideas and
            meaningful projects. Whether you want to build
            something new or improve an existing product,
            feel free to reach out!
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 md:justify-start">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${social.color} shadow-md transition-transform duration-300 hover:scale-110 sm:h-12 sm:w-12`}
                >
                  <Icon size={24} className="text-white" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative mx-auto w-full max-w-md md:max-w-none md:w-[85%]">

          {/* Status Notification */}
          <div className="pointer-events-none absolute inset-x-0 -top-20 z-20 flex justify-center">
            <div
              className={`pointer-events-auto w-full max-w-sm rounded-2xl border px-4 py-3 shadow-lg transition-all duration-300 ${
                status.message
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-3 opacity-0"
              } ${
                status.type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-red-200 bg-red-50 text-red-800"
              }`}
              role="status"
              aria-live="polite"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    status.type === "success"
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {status.type === "success" ? (
                    <MdCheckCircle size={20} />
                  ) : (
                    <MdErrorOutline size={20} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">
                    {status.type === "success"
                      ? "Message sent"
                      : "Something went wrong"}
                  </p>

                  <p className="mt-1 text-sm leading-relaxed">
                    {status.message || " "}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setStatus({ type: "", message: "" })
                  }
                  className="rounded-full p-1 text-current/70 transition-colors hover:bg-black/5 hover:text-current"
                  aria-label="Dismiss notification"
                >
                  <MdClose size={18} />
                </button>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative space-y-4 rounded-2xl border-[3px] bg-white p-5 shadow-xl animate-borderRotate sm:p-6 md:space-y-5 md:p-8"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#1d5452] focus:ring-2 focus:ring-[#1d5452]/50 sm:p-3 sm:text-base"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#eec248] focus:ring-2 focus:ring-[#eec248]/50 sm:p-3 sm:text-base"
            />

            {/* Phone / WhatsApp */}
            <input
              type="tel"
              name="phone"
              placeholder="WhatsApp / Phone Number"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              maxLength={20}
              pattern="[+]?[0-9() -]{7,20}"
              title="Please enter a valid phone number, including your country code."
              className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#1d5452] focus:ring-2 focus:ring-[#1d5452]/50 sm:p-3 sm:text-base"
            />

            {/* Project Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows={5}
              className="min-h-[120px] w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#f16540] focus:ring-2 focus:ring-[#f16540]/50 sm:min-h-[140px] sm:p-3 sm:text-base"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-[#286f6c] py-3 font-semibold text-white shadow-md transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            <p className="text-center text-xs leading-relaxed text-gray-500">
              Your contact details will only be used to
              discuss your project.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
