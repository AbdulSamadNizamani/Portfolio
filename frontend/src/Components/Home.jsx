import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Aboutme from "./Aboutme";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import { FaSquareUpwork } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div id="home">
        <motion.div
          className="flex justify-around flex-col-reverse md:flex-row items-center py-24 md:py-18 gap-4 md:gap-20 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-2">
            <motion.h3
              className="text-xl text-orange-500 text-center md:text-left"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Hi, It's me
            </motion.h3>

            <motion.h1
              className="text-3xl text-white text-center md:text-left"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Abdul Samad Nazamani
            </motion.h1>

            <motion.h2
              className="text-2xl text-white text-center md:text-left"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              And I'm a{" "}
              <span className="text-2xl text-orange-500 inline-block w-70 font-semibold">
                <Typewriter
                  words={[
                    "FULL STACK DEVELOPER",
                    "REACT DEV",
                    "NODEJS DEV",
                    "MONGODB DEV",
                    "CLOUDINARY DEV",
                    "ADVOCATE",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </span>
            </motion.h2>

            {/* Social Icons */}
            <div className="flex justify-center items-center gap-6">
              {/* upwork */}
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <a href="https://www.upwork.com/freelancers/~014ad9434b2572ad21" target="_blank">
                <div
                  className="bg-[#14A800] border-2 border-white text-white p-2 rounded-full 
               flex items-center justify-center w-12 h-12 shadow-lg 
               hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <FaSquareUpwork size={24} />
                </div>
                </a>
              </motion.div>

              {/* LinkedIn */}
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <a
                  href="https://www.linkedin.com/in/abdul-samad-nizamani-017a2a306/"
                  target="_blank"
                >
                  <div
                    className="border-2 border-white text-white p-2 rounded-full transition-all duration-300 ease-in cursor-pointer"
                    style={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#0A66C2",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#0A66C2")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#0A66C2")
                    }
                  >
                    <FaLinkedinIn size={24} />
                  </div>
                </a>
              </motion.div>

              {/* GitHub */}
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <a href="https://github.com/AbdulSamadNizamani" target="_blank">
                  <div
                    className="border-2 border-white text-white p-2 rounded-full transition-all duration-300 ease-in cursor-pointer"
                    style={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#333",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#333")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#333")
                    }
                  >
                    <FaGithub size={24} />
                  </div>
                </a>
              </motion.div>

              {/* WhatsApp */}
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <a href="https://wa.me/+923113397680" target="_blank">
                  <div
                    className="border-2 border-white text-white p-2 rounded-full transition-all duration-300 ease-in cursor-pointer"
                    style={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#25D366",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#25D366")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#25D366")
                    }
                  >
                    <FaWhatsapp size={24} />
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Download CV Button */}
            <motion.div
              className="flex justify-center items-center pt-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <a href="https://docs.google.com/document/d/1OnupVrHMN3mj4JRraAKuY6bR7oIyNNDl0l_MbOn80gA/edit?tab=t.0" target="_blank">
              <motion.button className="bg-orange-700 text-white text-xl px-11 py-2 rounded-2xl cursor-pointer transition-all duration-300 ease-in hover:bg-orange-800">
                Download CV
              </motion.button>
              </a>
            </motion.div>
          </div>

          <motion.img
            className="w-80 md:w-96 h-80 md:h-96 rounded-full object-cover shadow-lg"
            src="/images/samad.jpg"
            alt="Profile"
            animate={{ rotateY: [0, 180, 360], scale: [1, 1.1, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 6,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <Aboutme />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;