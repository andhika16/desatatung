import React from "react";
import { pertanian } from "../../assets/Link";
import SidebarHeading from "../../components/SidebarHeading";
import Card from "../../components/Card";
const Pertanian = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="bg-slate-900 text-white">
          <SidebarHeading judul={"pertanian"} />
        </div>
        <div className="sm:flex flex-row justify-between">
          <div className="flex flex-col m-5">
            {pertanian.map((layanan, index) => (
              <div
                key={index}
                className="border rounded  sm:flex flex-row m-2 p-2"
              >
                <div className=" sm:w-[30vw] h-[40vh] sm:h-[30vh] border rounded m-4 ">
                  <img className="object-cover w-full h-full" src={layanan.img} alt="" />
                </div>
                <div className="p-3 m-3 max-w-lg">
                  <p className="font-bold">{layanan.nama}</p>
                  <p className="text-base font-light leading-relaxed mt-0 mb-4">{layanan.isi}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="sm:w-1/4 mx-2 p-5">
            <p className="bg-slate-800 text-white font-semibold p-2 rounded">
              Pengumuman
            </p>
            <SidebarHeading judul={"Pendaftaran Kartu Prakerja"} />
            <SidebarHeading judul={"Pendaftaran Informasi KK"} />
            <SidebarHeading judul={"Informasi Bantuan"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pertanian;
