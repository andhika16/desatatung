import React from "react";

const Card = ({ judul, tanggal, isi, img }) => {
  return (
    <div className="w-full ">
      <div className="sm:flex flex-row rounded-lg items-center   p-2 mb-2">
        <div className=" w-full h-auto sm:w-[20vw] sm:h-auto ">
          <img src={img} className="w-full h-auto object-cover" />
        </div>
        <div className="w-[40vw] sm:mx-5">
          <p className="font-semibold lg:text-white text-lg lg:border lg:bg-slate-900 lg:p-2 rounded-md">{judul}</p>
          <span className="text-xs font-bold font-inter text-blue-700 ">{tanggal}</span>
          <p className="line-clamp-3 font-light leading-relaxed mt-0 mb-2 overflow-hidden ">{isi}</p>
        </div>
      </div>  
    </div>
  );
};

export default Card;
