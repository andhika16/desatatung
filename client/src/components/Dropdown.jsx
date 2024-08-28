import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = ({ nama, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Dropdown Toggle */}
      <div 
        className="flex items-center py-2 px-4 cursor-pointer hover:bg-slate-800 hover:text-white transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="mr-2">{nama}</p>
        <FaCaretDown />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-48 bg-white border border-gray-200 shadow-lg rounded transition-opacity duration-300 transform translate-y-0 z-10">
          <div className="capitalize">
            {list.map((item, index) => (
              <Link
                key={index}
                to={`/${item}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
