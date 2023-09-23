import React from "react";
import drop from "../assets/down-arrow.png";

const Dropdown = ({nama}) => {
  return (
    <div className="relative group m-4 ">
      <div className="flex flex-row items-center">
        <div className="flex flex-row ">
          <p>{nama}</p>
        </div>

        <div className="w-[35px] h-[35px]">
          <img
            className="w-[100%] h-[100%] object-contain"
            src={drop}
            alt="drop"
          />
        </div>
      </div>

      <div className="ss:absolute  z-10 hidden bg-grey-200 group-hover:block ">
        <div className="px-2 pt-2 pb-4 bg-white  shadow-lg w-[80px] text-center">
          <p>ass</p>
          <p>ass</p>
          <p>ass</p>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
