import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa"

const projects = [

    {
        title: "AcadiX",
        description: "A Students management system for storing and managing student data .",
        tech: ["React.js", "Firebase", "TailwindCSS", "Framer Motion"],
        url: "https://acadi-x.vercel.app/"
    }, {
        title: "Fundraising Website for Creators",
        description: "A crowdfunding platform where creators can raise funds and engage with their supporters.",
        tech: ["Next.js", "Razorpay", "MongoDB", "Tailwind CSS"],
        url: "https://github.com/abhi10pi/FundRaising"
    },
    {
        title: "ShieldPass",
        description: "A password manager application that allows users to securely store and manage their passwords.",
        tech: ["React.js", "Node.js", "Express.Js", "MongoDB"],
        url: "https://github.com/abhi10pi/ShieldPass"
    },

    {
        title: "TravelX",
        description: "A tool to analyze scientific papers using AI-driven insights.",
        tech: ["Python", "TensorFlow", "FastAPI", "React"],
        url: "https://github.com/abhi10pi/TravelX.git"
    },
];

const Portfolio = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-gray-900
    flex flex-col">
            <div className="z-10 w-full">

                <Navbar />
            </div>


            <div className="text-white flex flex-col gap-4 md:flex-row items-center justify-between px-4 md:px-16 py-8 md:py-12">
                {/* Left Side - Animated Profile */}
                <motion.div
                    className="w-full flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Profile Image Container */}
                    <motion.div
                        className="relative w-48 md:w-64 h-auto rounded-full overflow-hidden border-4 border-gray-500 shadow-xl shadow-gray-800 bg-gradient-to-r from-blue-700 to-purple-700 p-2"
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={() => setShowPopup(true)}
                        onHoverEnd={() => setShowPopup(false)}
                    >
                        {/* Floating Profile Image */}
                        <motion.img
                            src="/public/assets/programmer.avif" // Replace with your actual image path
                            alt="Animated Profile"
                            className="rounded-full w-full object-cover"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        />
                    </motion.div>

                    {/* Pop-up Info Box (only appears on hover) */}
                    {showPopup && (
                        <motion.div
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-900 text-white p-3 rounded-lg shadow-lg text-center w-56"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            <h3 className="text-lg font-bold">Selected Project</h3>
                            <p className="text-sm text-gray-300">I like to Build things that make a difference</p>
                        </motion.div>
                    )}
                </motion.div>

                {/* Right Side - Projects (Single Column on Mobile) */}
                <motion.div
                    className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 p-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Section Title */}
                    <h2 className="col-span-1 md:col-span-2 text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text text-center">
                        My Projects
                    </h2>

                    {/* Project Cards */}
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Link target="_blank" rel="noopener noreferrer" to={project.url}>
                                <h3 className="text-xl md:text-2xl font-semibold text-blue-400">{project.title}</h3>
                            </Link>

                            <p className="text-gray-300 mt-2 text-sm md:text-base">{project.description}</p>

                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-700 px-3 py-1 rounded-full text-xs md:text-sm text-gray-200 shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Down Arrow Icon (Centered) */}
            <div className="flex justify-center items-center my-10">
                <Link to="/contact">
                    <button
                        className="text-3xl md:text-4xl text-white hover:text-yellow-300 transition-all duration-300 rounded-full p-4 border-4 border-transparent hover:border-yellow-300"
                        aria-label="Navigate to next page"
                        style={{ boxShadow: "0px 0px 15px rgba(255, 118, 136, 0.8)" }}
                    >
                        <FaArrowDown />
                    </button>
                </Link>
            </div>


        </div>
    );
};

export default Portfolio;
