import React from "react";

const Card = ({ judul, tanggal, isi, img }) => {
  return (
    <div className="w-full  font-inter">
      <div className="sm:flex flex-row rounded-lg items-center   p-2 mb-2">
        <div className=" w-full h-auto md:w-[20vw] sm:h-auto ">
          <img src={img} className="w-full h-auto object-cover" />
        </div>
        <div className="max-w-md mx-5">
          <p className="font-bold text-lg ">{judul}</p>
          <span>{tanggal}</span>
          <p className="text-sm text-ellipsis overflow-hidden">{isi}</p>
          <button className="bg-slate-800  text-white text-xs p-1 rounded-md">Selengkapnya</button>
        </div>
      </div>  
    </div>
  );
};

export default Card;
