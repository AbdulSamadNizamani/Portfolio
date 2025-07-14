import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Aboutme = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className=" overflow-hidden " id="about">
      <div className="flex justify-center items-center">
        <h1 className="text-center text-4xl text-white font-semibold border-b-2 border-white  inline-block">
          About <span className="text-orange-700">Me</span>
        </h1>
      </div>
      
      <br />
      <div className="flex justify-around items-center px-16 md:space-x-10 md:flex-row flex-col">
  <img className="w-96 h-96 md:h-130 rounded-xl object-cover" src="/images/samad3.jpg" alt="Abdul Samad" data-aos='fade-right' data-aos-delay="50"  data-aos-duration="1000" data-aos-easing="ease-in-out" />
  <p className="max-w-2xl text-justify md:text-lg leading-relaxed text-white py-4" data-aos='fade-left' data-aos-delay="50"  data-aos-duration="1000" data-aos-easing="ease-in-out">
    <strong className="text-cyan-500 text-xl md:text-2xl block text-center">Abdul Samad</strong> 
    <span className="text-xl font-semibold block text-center">
      Full Stack Developer | Aspiring Advocate | Co-founder of "LLB Website"
    </span>
    With <strong>2 years of web development experience</strong>, I bring a powerful blend of technical expertise and problem-solving acumen.
    
    <strong className="text-yellow-400 block">🔥 Frontend & UI/UX:</strong> 
    React.js, Tailwind CSS, Bootstrap, Material UI, Framer Motion  
    <br className=" md:hidden lg:block" />
    
    <strong className="text-emerald-300 block">⚡ Backend & Databases:</strong> 
    Node.js, Express.js, MongoDB, Cloudinary  
    <br className=" md:hidden lg:block" />
    
    <strong className="text-lime-500 block md:hidden lg:block">🎯 Additional Expertise:</strong> 
    <span className=" md:hidden lg:block">NextAuth, Clerk, ScrollTrigger, Swiped.js, React Slick, Aeternity UI  </span>
    
    <strong className="text-sky-500 block md:hidden lg:block" >🔍 Web Fundamentals:</strong> 
    <span className="md:hidden lg:block">HTML, CSS, JavaScript </span>
    <span className="md:hidden lg:block">Beyond tech, I am currently pursuing an <strong>LLB at the University of Sindh</strong> and co-founded the </span>
    <strong className="text-green-500 md:hidden lg:block"> LLB website, "LLB"</strong><span className="md:hidden lg:block">—a platform dedicated to legal education.</span>

   <span className="md:hidden lg:block"> My passion for solving complex problems fuels my continuous growth, bridging technology with law to create impactful solutions. Always eager to learn, innovate, and push boundaries toward <strong className="text-red-400 md:hidden lg:block"> spectacular growth! 🚀🔥</strong> </span>
    
  </p>
</div>
    </div>
  );
};

export default Aboutme;