import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { MdEmail, MdCheckCircle, MdErrorOutline, MdClose } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const EMAILJS_PLACEHOLDERS = new Set([
  "",
  "your_service_id",
  "your_template_id",
  "your_public_key",
]);

const EMAILJS_FALLBACK_CONFIG = {
  serviceId: "service_4ybc9bc",
  templateId: "template_t0e1sq8",
  publicKey: "ijl_MFmQAobOx5m5t",
};

const resolveConfigValue = (value, fallback) => {
  const normalizedValue = (value ?? "").trim();
  return EMAILJS_PLACEHOLDERS.has(normalizedValue) ? fallback : normalizedValue;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailJsConfig = {
    serviceId: resolveConfigValue(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      EMAILJS_FALLBACK_CONFIG.serviceId,
    ),
    templateId: resolveConfigValue(
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      EMAILJS_FALLBACK_CONFIG.templateId,
    ),
    publicKey: resolveConfigValue(
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      EMAILJS_FALLBACK_CONFIG.publicKey,
    ),
  };

  useEffect(() => {
    if (!status.message) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 4500);

    return () => window.clearTimeout(timeoutId);
  }, [status]);

  const handleChange = (e) => {
    setStatus({ type: "", message: "" });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        emailJsConfig.publicKey,
      );
      setStatus({ type: "success", message: "Message sent successfully." });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send message. Please verify your EmailJS service, template, and public key.",
      });
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
                    {status.type === "success" ? "Message delivered" : "Something went wrong"}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">{status.message || " "}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setStatus({ type: "", message: "" })}
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
