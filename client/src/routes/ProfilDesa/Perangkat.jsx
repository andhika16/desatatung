import React from "react";
import { perangkat } from "../../assets/Link";
import SidebarHeading from "../../components/SidebarHeading";

const Perangkat = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="container mx-auto px-4 py-6">
      <SidebarHeading judul={"Perangkat Desa"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {perangkat.map((item, index) => (
            <div
              key={index}
              className="bg-white  overflow-hidden flex flex-col items-center text-center"
            >
              <div className="w-full h-48">
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt={item.nama}
                />
              </div>
              <div className="bg-slate-900 text-white p-4 w-full">
                <p className="text-lg font-bold font-outfit">{item.nama}</p>
                <p className="text-sm font-outfit">{item.jabatan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perangkat;
