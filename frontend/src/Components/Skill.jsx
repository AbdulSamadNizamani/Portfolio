
import React from 'react'
import { motion } from 'framer-motion'

const Skill = () => {
  return (
    <div className='py-8' id='skill'>
        <div className=' hidden lg:block'>
      <motion.div 
        className='w-260 bg-white px-20 py-8 flex justify-center items-center m-auto rounded-lg shadow-lg'
        animate={{ y: [0, -20, 0] }}  // Moves up and down
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Smooth infinite animation
      >
        <div className='flex justify-around items-center gap-8'>
          <h2 className='text-3xl bg-gradient-to-tr from-purple-800 to-purple-500 text-transparent bg-clip-text font-bold'>
            I Code
          </h2>
          <img src="/images/tailwindlogo2.png" className='w-32 h-16' alt="Tailwind Css" />
          <img src="/images/reactlogo.png" className='w-32 h-16' alt="ReactJS" />
          <img src="/images/nodejslogo.png" className='w-32 h-16' alt="NodeJS" />
          <img src="/images/expresslogo.png" className='w-32 h-16' alt="ExpressJS" />
          <img src="/images/mongodb.png" className='w-32 h-16' alt="MongoDB" />
          <img src="/images/cloudinarylogo.png" className='w-32 h-16' alt="Cloudinary" />
        </div>
      </motion.div>
      </div>

       <div className='lg:hidden flex justify-center px-6 md:px-2'>
        <motion.div 
          className='w-full max-w-sm md:max-w-2xl bg-white px-6 py-4 flex flex-col justify-center items-center m-auto rounded-lg shadow-lg'
          animate={{ y: [0, -20, 0] }}  // Moves up and down
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Smooth infinite animation
        >
          <h2 className='text-xl md:text-5xl bg-gradient-to-tr from-purple-800 to-purple-500 text-transparent bg-clip-text font-bold mb-4'>
            I Code
          </h2>
          <div className='grid grid-cols-3 gap-6 justify-center items-center'>
            <img src="/images/tailwindlogo2.png" className='w-18 h-12 md:w-38 md:h-24' alt="Tailwind Css" />
            <img src="/images/reactlogo.png" className='w-18 h-12 md:w-38 md:h-24' alt="ReactJS" />
            <img src="/images/nodejslogo.png" className='w-18 h-12 md:w-38 md:h-24' alt="NodeJS" />
            <img src="/images/expresslogo.png" className='w-18 h-12 md:w-38 md:h-24' alt="ExpressJS" />
            <img src="/images/mongodb.png" className='w-18 h-12 md:w-38 md:h-24' alt="MongoDB" />
            <img src="/images/cloudinarylogo.png" className='w-18 h-12 md:w-38 md:h-24' alt="Cloudinary" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skill
