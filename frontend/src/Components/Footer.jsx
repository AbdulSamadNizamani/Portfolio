
import React from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-8">
      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 mb-4">
      <a href="https://wa.me/+923113397680" target='_blank'>
        <FaWhatsapp
          className="text-white bg-[#25D366] w-14 h-14 p-3 rounded-full shadow-lg hover:scale-110 hover:rotate-6 
                     hover:shadow-2xl transition-all duration-300 ease-out"
          size={56}
        />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100092999498375" target='_blank'>
        <FaFacebook
          className="text-white bg-[#1877F2] w-14 h-14 p-3 rounded-full shadow-lg hover:scale-110 hover:rotate-6 
                     hover:shadow-2xl transition-all duration-300 ease-out"
          size={56}
        />
        </a>
        <a href="mailto:abdulsamad6178@gmail.com" target='_blank'>
        <MdMarkEmailRead
          className="text-white bg-gradient-to-r from-orange-600 to-orange-700 w-14 h-14 p-3 
                     rounded-full shadow-xl hover:scale-110 hover:rotate-6 
                     hover:shadow-2xl transition-all duration-300 ease-out"
          size={56}
        />
        </a>
        <a href="https://www.linkedin.com/in/abdul-samad-nizamani-017a2a306/">
        <FaLinkedin
          className="text-white bg-gradient-to-r from-[#0077B5] to-[#005582] w-14 h-14 p-3 
                     rounded-full shadow-lg hover:scale-110 hover:rotate-6 
                     hover:shadow-2xl transition-all duration-300 ease-out"
          size={56}
        />
        </a>
      </div>

      {/* Copyright Text */}
      <h4 className="text-center text-xl md:text-2xl font-semibold text-white mt-4 
                     drop-shadow-md tracking-wide">
        Copyright © 2025 to <span className="text-[#25D366]">Advocate A. Samad</span>
      </h4>
    </div>
  );
};

export default Footer;
