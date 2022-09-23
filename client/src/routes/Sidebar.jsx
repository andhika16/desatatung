import React from "react";
import wa from "../assets/whatsapp.png";
import phone from "../assets/telephone-call.png";
const Sidebar = () => {
  return (
    <>
      <div className="sm:my-3 m-10  px-2 sm:w-1/5">
        <div className="">
          <div className="flex flex-col items-center ">
            <h1 className="font-inter text-lg font-bold text-center capitalize">
              layanan surat desa
            </h1>
          </div>
          <div className="object-contain">
            <div className="flex flex-row my-5 w-[25px] h-[25px] items-center">
              <img
                src={wa}
                alt="wa"
                className="w-[100%] h-[100%] m-2 object-contain"
              />
              <p className="font-inter underline text-sm">083183539731</p>
            </div>
            <div className="flex flex-row my-5 w-[25px] h-[25px] items-center">
              <img
                src={phone}
                alt="phone"
                className="w-[100%] h-[100%] m-2 object-contain"
              />
              <p className="font-inter underline text-sm">083183539731</p>
            </div>
          </div>
        </div>
        <div className="font-inter text-lg font-bold text-center capitalize">
          <h1>Statistik desa</h1>
          <div className=" "></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
