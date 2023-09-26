import React from "react";
import developoing from "../assets/developing.png";
import dollar from "../assets/dollar.png";
import barchat from "../assets/bar-chart.png";
import clipboard from "../assets/clipboard.png";

const OptionSection = () => {
  return (
    <div>
      <div className="w-full p-5 bg-green-200 ">
        <div className="flex ">
          <div className="w-full flex flex-col  items-center justify-center  m-2">
            <div className="w-[6vw] h-auto  items-center">
              <img src={clipboard} className="w-full h-auto" alt="" />
            </div>
            <p className="font-bold">Pembangunan</p>
          </div>
          <div className="w-full flex flex-col  items-center justify-center  m-2">
            <div className="w-[6vw] h-auto  items-center">
              <img src={developoing} className="w-full h-auto" alt="" />
            </div>
            <p className="font-bold">Pembangunan</p>
          </div>
          <div className="w-full flex flex-col  items-center justify-center  m-2">
            <div className="w-[6vw] h-auto  items-center">
              <img src={dollar} className="w-full h-auto" alt="" />
            </div>
            <p className="font-bold">Pembangunan</p>
          </div>
          <div className="w-full flex flex-col  items-center justify-center  m-2">
            <div className="w-[6vw] h-auto  items-center">
              <img src={barchat} className="w-full h-auto" alt="" />
            </div>
            <p className="font-bold">Pembangunan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionSection;
