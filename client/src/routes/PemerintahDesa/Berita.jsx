import React from "react";
import Card from "../../components/Card";
import { berita } from "../../assets/Link";
import img from "../../assets/ex.webp";
import SidebarHeading from "../../components/SidebarHeading";
import { Link } from "react-router-dom";

const Berita = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <SidebarHeading judul={"Layanan Penduduk"} />

      <div className="lg:flex lg:space-x-6">
        {/* Konten Utama */}
        <div className="flex-1">
          <div className="">
            {berita.map((item, index) => (
              <Link to={`/halamanberita`} key={index} className="block">
                <Card judul={item.judul} tanggal={item.tanggal} img={item.img} />
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
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

export default Berita;
