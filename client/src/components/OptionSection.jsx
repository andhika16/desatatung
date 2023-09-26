import React from "react";
import developoing from "../assets/developing.png";
import dollar from "../assets/dollar.png";
import barchat from "../assets/bar-chart.png";
import clipboard from "../assets/clipboard.png";

const OptionSection = () => {
  return (
    <div>
      <div className="w-full p-5  ">
        <div className="sm:flex ">
          <div className="w-full flex flex-col  items-center justify-center my-5 sm:m-2 ">
            <div className="w-[10vw] sm:w-[6vw] h-auto my-2 items-center">
              <img src={clipboard} className="w-full h-auto" alt="" />
            </div>
            <p className="text-gray-500 text-sm font-poppins">Informasi</p>
          </div>
          <div className="w-full flex flex-col  items-center justify-center my-5 sm:m-2 ">
            <div className="w-[10vw] sm:w-[6vw] h-auto my-2 items-center">
              <img src={developoing} className="w-full h-auto" alt="" />
            </div>
            <p className="text-gray-500 text-sm font-poppins">Potensi Desa</p>
          </div>
          <div className="w-full flex flex-col  items-center justify-center my-5 sm:m-2 ">
            <div className="w-[10vw] sm:w-[6vw] h-auto my-2 items-center">
              <img src={dollar} className="w-full h-auto" alt="" />
            </div>
            <p className="text-gray-500 text-sm font-poppins">keuangan</p>
          </div>
          <div className="w-full flex flex-col  items-center justify-center my-5 sm:m-2 ">
            <div className="w-[10vw] sm:w-[6vw] h-auto my-2 items-center">
              <img src={barchat} className="w-full h-auto" alt="" />
            </div>
            <p className="text-gray-500 text-sm font-poppins">Pembangunan Desa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionSection;
