import React from "react";
import Card from "../../components/Card";
import { layanan } from "../../assets/Link";
import img from "../../assets/ex.webp";
import SidebarHeading from "../../components/SidebarHeading";
import OptionSection from "../../components/OptionSection";

const LayananPenduduk = () => {
  return (
    <div className="flex flex-col ">
      <div className="bg-slate-900 text-white">
        <SidebarHeading judul={"layanan penduduk"} />
      </div>
      <div className="container sm:flex flex-row justify-between p-10">
        <div className="flex flex-col">
          {layanan.map((layanan, index) => (
            <Card
              key={index}
              judul={layanan.judul}
              tanggal={layanan.tanggal}
              isi={layanan.isi}
            />
          ))}
        </div>
        <div className="w-full  mt-8 lg:mt-0">
          <div className="bg-white shadow-md rounded-lg p-5">
            <p className="bg-slate-800 text-white font-semibold p-3 rounded mb-4 text-center text-lg">
              Pengumuman
            </p>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-2">
                <SidebarHeading judul={"Pendaftaran Kartu Prakerja"} />
              </div>
              <div className="border-b border-gray-200 pb-2">
                <SidebarHeading judul={"Pendaftaran Informasi KK"} />
              </div>
              <div className="border-b border-gray-200 pb-2">
                <SidebarHeading judul={"Informasi Bantuan"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayananPenduduk;
