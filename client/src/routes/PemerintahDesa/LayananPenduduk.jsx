import React from "react";
import Card from "../../components/Card";
import { layanan } from "../../assets/Link";
import img from "../../assets/ex.jpeg";
import Sidebar from "../HalamanUtama/Sidebar";

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
          <div className="border">
            <h1 className="text-lg font-bold ">Pengumuman</h1>
            <h3>Musyawarah Desa</h3>
            <h3>Musyawarah Desa</h3>
            <h3>Musyawarah Desa</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayananPenduduk;
