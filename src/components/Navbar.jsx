import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-full">
      {/* Navbar */}

      <nav className="w-full bg-transparent backdrop-blur-md text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-6 md:justify-center w-full">
          {/* Desktop & iPad Menu */}
          <ul className="hidden md:flex space-x-8 gap-8  text-lg font-semibold">
            <li className=" relative group cursor-pointer transition duration-300">
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>

            <li className="relative group cursor-pointer transition duration-300">
              <Link to="/about" className="hover:text-yellow-300">
                About
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>

            <li className="relative group cursor-pointer transition duration-300">
              <Link to="/portfolio" className="hover:text-yellow-300">
                Portfolio
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>

            <li className="relative group cursor-pointer transition duration-300">
              <Link to="/contact" className="hover:text-yellow-300">
                Contact
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden z-10 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed mt-15 top-0 left-0 h-full w-[30%]  transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
          <ul className="flex flex-col bg-transparent backdrop-blur-md  items-start space-y-6 p-6 text-lg font-semibold">
            <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;