import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import DownArrowNavigation from "./DownArrowNavigation";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa"; // Import the down arrow icon

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-gray-900 flex flex-col">
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-white w-full flex-grow px-6 md:px-16">
        {/* Left Side: Name & Role */}
        <motion.div
          className="flex flex-col items-center text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Name */}
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#ff7eb3] via-[#ff758c] to-[#ff4d4d] text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,118,136,0.8)]"
            animate={{
              y: [0, -5, 0],
              textShadow: [
                "0px 0px 10px rgba(255,118,136,0.8)",
                "0px 0px 20px rgba(255,80,120,0.6)",
                "0px 0px 10px rgba(255,118,136,0.8)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.08 }}
          >
            <span className="font-[Poppins]">Abhishek</span> <span className="font-[Lora]">Pimpalkar</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.p
            className="text-lg md:text-3xl text-gray-300 font-semibold italic tracking-wide mt-2"
            animate={{
              opacity: 1,
              y: [0, 3, 0],
            }}
            transition={{
              delay: 0.4,
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Software Developer
          </motion.p>
          <section id="education" className="  text-white">
            <div className="container mx-auto text-center">
              {/* <h2 className="text-2xl font-semibold mt-5 ">My Education</h2> */}
              <div className=" p-2 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold font-light ">Dream big, work hard, stay focused, and never give up. 🚀</h3>
                
                {/* <p className="text-lg ">Expected Graduation: [2026]</p> */}





              </div>
            </div>
          </section>


        </motion.div>



        {/* Right Side: Profile Image */}
        <motion.div
          className="relative w-80 h-96 md:w-96 md:h-[400px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glowing Animated Border */}
          <motion.div
            className="absolute inset-0 w-full h-full rounded-full border-4 border-transparent"
            animate={{
              boxShadow: [
                "0px 0px 25px rgba(255,118,136,0.8)",
                "0px 0px 35px rgba(255,80,120,0.6)",
                "0px 0px 25px rgba(255,118,136,0.8)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          ></motion.div>


          {/* Profile Image with Ellipse Shape */}
          <img
            src="/src/assets/DP111.png"
            alt="Profile"
            className="w-full h-full object-contain rounded-[50%] shadow-2xl border-4 border-gray-700"
            style={{
              clipPath: "ellipse(50% 45% at 50% 50%)", // Makes it an ellipse
            }}
          />
        </motion.div>
      </div>

      {/* Gradient Divider */}
      <div className="flex justify-center items-center my-10">
        {/* Down Arrow Icon that navigates to another page */}
        <Link to="/about">
          <button
            className="text-4xl text-white hover:text-yellow-300 transition-all duration-300 rounded-full p-4 border-4 border-transparent hover:border-yellow-300"
            aria-label="Navigate to next page"
            style={{
              boxShadow: "0px 0px 15px rgba(255, 118, 136, 0.8)",
            }}
          >
            <FaArrowDown />
          </button>
        </Link>
      </div>

      <div className="w-full h-1 bg-gradient-to-r from-[#ff7eb3] via-[#ff758c] to-[#ff4d4d] rounded-full mt-10"></div>
    </div>
  );
}

export default Home;
