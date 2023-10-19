import React from "react";
import drop from "../assets/down-arrow.png";
import Direct from "./Direct";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = ({ nama, list }) => {
  return (
    <div className="relative group sm:py-4  sm:mx-4   sm:hover:bg-slate-800 sm:hover:text-white  ">
      <div className="flex flex-row items-center">
        <div className="flex flex-row ">
          <p>{nama}</p>
        </div>
        <FaCaretDown />
      </div>

      <div className="ss:absolute w-fit  z-10 hidden bg-grey-300 group-hover:block  ">
        <div className="sm:w-[10vw] bg-white capitalize   shadow-lg ">
          {list.map((item, index) => (
            <Direct key={index} link={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
