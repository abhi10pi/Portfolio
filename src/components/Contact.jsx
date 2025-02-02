import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import Navbar from "./Navbar";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-gray-900
        flex flex-col">
            <div className=" w-full">
       
       <Navbar/>
       </div>
        <div className=" flex flex-col justify-between  text-white py-16 px-6 md:px-16">
            {/* Contact Section */}
            <motion.div
                className="max-w-4xl mx-auto text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    Get In Touch
                </h2>
                <p className="text-gray-300 text-lg mt-4">
                    Interested in working together? Let's connect and build something amazing!
                </p>

                {/* Contact Form */}
                <form className="mt-8 flex flex-col gap-6 w-full md:w-3/4 lg:w-2/3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full p-4 bg-gray-800 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-4 bg-gray-800 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="w-full p-4 bg-gray-800 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    ></textarea>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition"
                    >
                        Send Message
                    </motion.button>
                </form>

                {/* Contact Info */}
                <div className="flex flex-wrap justify-center gap-8 mt-10">
                    <div className="flex items-center gap-3">
                        <Mail size={24} className="text-purple-400" />
                        <span className="text-gray-300">abhishekpimpalkar35@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone size={24} className="text-blue-400" />
                        <span className="text-gray-300">+91 7498965650</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin size={24} className="text-pink-400" />
                        <span className="text-gray-300">Pune, India</span>
                    </div>
                </div>
            </motion.div>

            {/* Footer */}
            <motion.footer
                className="border-t border-gray-700 pt-6 text-center text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://github.com/abhi10pi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <Github size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/abhishekpimpalkar/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <Linkedin size={28} />
                    </a>
                    <a href="https://www.instagram.com/abhi_pimpalkar01?igsh=cXBqMnNhMGVpNXFj" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <Instagram size={28} />
                    </a>
                </div>
                <p className="text-lg">&copy; {new Date().getFullYear()} Abhishek Pimpalkar. All Rights Reserved.</p>
            </motion.footer>
        </div>
        </div>
    );
};

export default Contact;
