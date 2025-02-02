import React from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa"; // Import the down arrow icon

function DownArrowNavigation() {
  return (
    <div className="flex justify-center items-center mt-10">
      {/* Down Arrow Icon that navigates to another page */}
      <Link to="/nextPage"> {/* Replace with the target page path */}
        <button
          className="text-4xl text-white hover:text-yellow-300 transition-all duration-300"
          aria-label="Navigate to next page"
        >
          <FaArrowDown />
        </button>
      </Link>
    </div>
  );
}

export default DownArrowNavigation;
