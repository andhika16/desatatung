import React from "react";

const Card = ({ judul, tanggal, isi, img }) => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 h-[200px] sm:h-[180px]">
          <img src={img} className="w-full h-full object-cover" alt={judul} />
        </div>
        <div className="w-full sm:w-2/3 p-4 items-center">
          <div>
            <p className="font-semibold text-xl mb-2 text-slate-900">{judul}</p>
            <span className="text-sm font-medium text-gray-600">{tanggal}</span>
          </div>
          <p className="text-gray-700 mt-2 line-clamp-2">{isi}</p>

        </div>
      </div>
    </div>
  );
};

export default Card;
