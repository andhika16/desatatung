import React from "react";
import Card from "../../components/Card";
import { layanan } from "../../assets/Link";
import img from "../../assets/ex.jpeg";
import SidebarHeading from "../../components/SidebarHeading";
import OptionSection from "../../components/OptionSection";

const LayananPenduduk = () => {
  return (
    <div className=" sm:m-[3em] flex flex-col">
      <div className="flex flex-wrap justify-center text-center">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold">Layanan Penduduk</h2>
          <p className="text-lg leading-relaxed m-4 text-gray-600">
            Layanan penduduk merupakan layanan yang diberikan oleh pemerintah
            desa kepada penduduk desa
          </p>
        </div>
      </div>
      <div className="sm:flex flex-row justify-between">
        <div className="flex flex-col">
          {layanan.map((layanan, index) => (
            <Card
              key={index}
              judul={layanan.judul}
              tanggal={layanan.tanggal}
              isi={layanan.isi}
              img={img}
            />
          ))}
        </div>
        <div className="sm:w-1/4 mx-2 p-5 ">
          <p className="bg-slate-800 text-white font-semibold p-2 rounded">Pengumuman</p>
          <SidebarHeading judul={"Pendaftaran Kartu Prakerja"} />
          <SidebarHeading judul={"Pendaftaran Informasi KK"} />
          <SidebarHeading judul={"Informasi Bantuan"} />
        </div>
      </div>
    </div>
  );
};

export default LayananPenduduk;
