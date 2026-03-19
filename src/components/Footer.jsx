import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f8f7f1] text-gray-700 pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-[#0b2e41]">Ayesha Naz</h2>
          <p className="text-sm max-w-[350px]">
            Turning ideas into clean, creative web experiences, where imagination meets functionality.
          </p>

          <div className="flex gap-3 mt-4">
            <a
              href="mailto:ashimughal687@gmail.com"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1d5452] hover:scale-110 transition-transform shadow-md"
            >
              <MdEmail size={20} className="text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/ayesha-naz"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#eec248] hover:scale-110 transition-transform shadow-md"
            >
              <FaLinkedin size={20} className="text-white" />
            </a>

            <a
              href="https://github.com/aisha-abid"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#f16540] hover:scale-110 transition-transform shadow-md"
            >
              <FaGithub size={20} className="text-white" />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold text-xl text-[#0b2e41]">Quick Links</h2>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#home" className="hover:text-[#1d5452] cursor-pointer">Home</a>
            <a href="#about" className="hover:text-[#1d5452] cursor-pointer">About</a>
            <a href="#skills" className="hover:text-[#1d5452] cursor-pointer">Skills</a>
            <a href="#services" className="hover:text-[#1d5452] cursor-pointer">Services</a>
            <a href="#journey" className="hover:text-[#1d5452] cursor-pointer">Journey</a>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold text-xl text-[#0b2e41]">Get in Touch</h2>
          <p className="text-sm">
            Feel free to reach out for collaborations and opportunities.
          </p>
          <a
            href="mailto:ashimughal687@gmail.com"
            className="text-sm text-[#1d5452] hover:underline"
          >
            ashimughal687@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <img
          src="/mylogo.svg"
          alt="Ayesha Logo"
          className="h-12 hover:scale-105 transition-transform opacity-90"
        />

        <p className="text-gray-600 text-center">
          Copyright {new Date().getFullYear()} Ayesha Naz | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
