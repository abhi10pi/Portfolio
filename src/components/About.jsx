import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";

const About = () => {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-gray-900
        flex flex-col">
            <div className=" w-full">

                <Navbar />
            </div>
            <div className=" flex items-center justify-center  text-white px-5 py-5">

                <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

                    <motion.div
                        className="relative w-full md:w-1/3 flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Profile Image Container */}
                        <motion.div
                            className="relative w-64 md:w-72 h-auto rounded-full overflow-hidden border-4 border-gray-500 shadow-xl shadow-gray-800 bg-gradient-to-r from-blue-700 to-purple-700 p-2"
                            whileHover={{ scale: 1.1 }}
                            onHoverStart={() => setShowPopup(true)}
                            onHoverEnd={() => setShowPopup(false)}
                        >
                            {/* Floating Profile Image */}
                            <motion.img
                                src="/src/assets/Boy.jpg" // Replace with your animated illustration
                                alt="Animated Profile"
                                className="rounded-full w-full object-cover"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            />
                        </motion.div>

                        {/* Pop-up Info Box */}
                        {showPopup && (
                            <motion.div
                                className="absolute bottom-0 bg-gray-900 text-white p-4 rounded-lg shadow-lg text-center w-64"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                            >
                                <h3 className="text-lg font-bold">Abhisek Pimpalkar</h3>
                                <p className="text-sm text-gray-300">
                                    Software Developer | MERN Stack Enthusiast
                                </p>
                                <div className="flex justify-center gap-4 mt-2">
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                        <img src="/src/assets/github-icon.png" alt="GitHub" className="w-6 h-6" />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <img src="/src/assets/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>



                    {/* Right Side: About Text */}
                    <motion.div
                        className="w-full md:w-2/3 flex flex-col gap-6 text-center md:text-left"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Title */}
                        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                            About Me
                        </h2>

                        {/* Professional Introduction */}
                        <p className="text-gray-300 text-xl leading-relaxed font-medium tracking-wide">
                            Hello! I'm <span className="text-white font-extrabold">Abhishek Pimpalkar</span>, a
                            <span className="text-blue-400 font-bold"> Software Developer</span> specializing in
                            <span className="text-purple-400 font-bold"> MERN Stack</span>
                            {/* <span className="text-pink-400 font-bold"> Blockchain Development</span>. */}
                        </p>

                        {/* Experience Details */}
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I have a strong background in React.js, Node.js, MongoDB, Express.js, and NextJs.
                            My expertise lies in building scalable applications, writing efficient code.
                        </p>

                        {/* Highlight Achievements */}
                        <p className="text-gray-300 text-lg leading-relaxed">
                           GH Raisoni College Of Engineering And Management  Pune
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                           3rd year | B-tech in CSE 
                        </p>

                        {/* Skills Section */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                            {["Java","JavaScript","Python","React.js","Next.js","Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "Git", "Framer Motion"].map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-800 px-5 py-2 rounded-full text-md font-semibold text-gray-300 shadow-md hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Download Resume Button */}
                        <motion.a
                            href="src\assets\RESUME.pdf"
                            download
                            className="mt-6 inline-block text-center bg-blue-900 px-8 py-3 rounded-full text-white font-semibold text-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            <div className="flex justify-center items-center my-10">
                {/* Down Arrow Icon that navigates to another page */}
                <Link to="/portfolio">
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

        </div>
    );
};

export default About;

