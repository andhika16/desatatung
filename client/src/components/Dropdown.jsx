import React from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = ({ nama, list }) => {
  return (
    <div className="relative group">
      {/* Dropdown Toggle */}
      <div className="flex items-center py-2 px-4 cursor-pointer hover:bg-slate-800 hover:text-white transition-colors duration-300">
        <p className="mr-2">{nama}</p>
        <FaCaretDown />
      </div>

      {/* Dropdown Menu */}
      <div className="absolute w-48 bg-white border border-gray-200 shadow-lg rounded mt-2 opacity-0 visibility-hidden transition-opacity duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visibility-visible group-hover:translate-y-0 z-50">
        <div className="capitalize">
          {list.map((item, index) => (
            <Link
              key={index}
              to={`/${item}`}  // Menggunakan Link dan path yang benar
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
