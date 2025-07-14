import React, { useState } from "react";
import { styled } from '@mui/material/styles';
const Navbar = () => {
  const [isopen,setIsopen] = useState(false)
  const handleopen = ()=>{
    setIsopen(!isopen)
  }
  const handleLinkClick = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
    setIsopen(false); // Close the sidebar
  };
   
  return (
    <>
    <div className="w-full h-full shadow-2xl  z-50 hidden lg:block">
      <nav className="flex items-center justify-between px-6 z-50">
        <div className="flex justify-center items-center">
        <img className="w-14 h-14" src="/images/logo2.svg" alt="Logo" />
        <h2 className="text-white text-xl font-bold">Samad |Web Developer</h2>
        </div>
        <ul className="flex justify-center items-center gap-8">
          <li>
            <a href="#home" className="text-white text-xl font-semibold transition-all duration-300 ease-in hover:text-yellow-400" onClick={(e) => handleLinkClick(e, "home")}>Home</a>
          </li>
          <li>
            
            <a href="#about" className="text-white text-xl font-semibold transition-all duration-300 ease-in hover:text-yellow-400" onClick={(e) => handleLinkClick(e, "about")}>About Me</a>
          </li>
          <li>
           <a href="#skill" className="text-white text-xl font-semibold transition-all duration-300 ease-in hover:text-yellow-400" onClick={(e) => handleLinkClick(e, "skill")}>Skills</a>
          </li>
          <li>
            <a href="#project" className="text-white text-xl font-semibold transition-all duration-300 ease-in hover:text-yellow-400" onClick={(e) => handleLinkClick(e, "project")}>Project</a>
          </li>
          <li>
            <a href="#contact" className="text-white text-xl font-semibold transition-all duration-300 ease-in hover:text-yellow-400 " onClick={(e) => handleLinkClick(e, "contact")}>Contact</a>
          </li>
        </ul>
        <a href="mailto:abdulsamad6178@gmail.com" target="_blank">
        
        <div>
            <button className="bg-white text-xl text-purple-600 px-4 py-1 rounded-xl font-semibold cursor-pointer transition-all duration-300 ease-in hover:bg-amber-100">Hire me</button>
        </div>
        </a>
      </nav>
    </div>

    {/* For Small Screens */}
    <div className="w-full h-full shadow-2xl sticky top-0 z-50 lg:hidden bg-purple-900">
  <nav className=" w-full flex items-center justify-between flex-col px-6">
    <div className="flex justify-between flex-row-reverse items-center gap-40 md:gap-160 sticky top-0">
      <button
        className="relative flex flex-col justify-between w-8 h-6 cursor-pointer focus:outline-none"
        onClick={handleopen}
      >
        <span
          className={`block h-0.5 w-8 transition-all duration-1000 ease-in ${
            isopen ? "rotate-45 translate-y-4 bg-yellow-400" : "bg-white"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-8 transition-all duration-1000 ease-in ${
            isopen ? "opacity-0" : "opacity-100 bg-white"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-8 transition-all duration-1000 ease-in ${
            isopen ? "-rotate-45 -translate-y-1.5 bg-yellow-400" : "bg-white"
          }`}
        ></span>
      </button>

      <div className="flex justify-center items-center">
        <img className="w-14 h-14" src="/images/logo2.svg" alt="Logo" />
        <h2 className="text-white text-xs font-bold">Samad | Developer</h2>
      </div>
    </div>

    <div
      className={`fixed top-0 left-0 h-full w-60 bg-purple-800 backdrop-blur-sm transform transition-transform duration-500 ease-in-out ${
        isopen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
     <div className="flex justify-center items-center">
        <img className="w-14 h-14" src="/images/logo2.svg" alt="Logo" />
        <h2 className="text-white text-lg font-bold">Samad | Web Developer</h2>
      </div>
      <ul className="h-full flex flex-col items-center gap-8 pt-20">
        <li>
        <a href="#home" className="text-white text-xl font-semibold transition-all duration-300 ease-in hover:text-yellow-400" onClick={(e) => handleLinkClick(e, "home")}>Home</a>
        </li>
        <li>
        <a href="#about" className="text-white text-xl font-semibold transition-all duration-300 ease-in hover:text-yellow-400" onClick={(e) => handleLinkClick(e, "about")}>About Me</a>
        </li>
        <li>
        <a href="#skill" className="text-white text-xl font-semibold transition-all duration-300 ease-in hover:text-yellow-400" onClick={(e) => handleLinkClick(e, "skill")}>Skills</a>
        </li>
        <li>
        <a href="#project" className="text-white text-xl font-semibold transition-all duration-300 ease-in hover:text-yellow-400" onClick={(e) => handleLinkClick(e, "project")}>Project</a>
        </li>
        <li>
        <a href="#contact" className="text-white text-xl font-semibold transition-all duration-300 ease-in hover:text-yellow-400" onClick={(e) => handleLinkClick(e, "contact")}>Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
    </>
  );
};

export default Navbar;

