import React from "react";
import { pertanian } from "../../assets/Link";
import SidebarHeading from "../../components/SidebarHeading";

const Pertanian = () => {
  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className=" text-white">
        <SidebarHeading judul={"Pertanian"} />
      </div>

      {/* Main Content and Sidebar */}
      <div className="container mx-auto p-6 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
        
        {/* Main Content */}
        <div className="w-full sm:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pertanian.map((layanan, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
            >
              <img
                className="object-cover w-full h-48"
                src={layanan.img}
                alt={layanan.nama}
              />
              <div className="p-4">
                <p className="text-lg font-semibold capitalize mb-2">{layanan.nama}</p>
                <p className="text-sm text-gray-700 line-clamp-4">
                  {layanan.isi}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="w-full sm:w-1/4">
          <div className="bg-slate-800 text-white p-4 rounded-lg shadow-sm">
            <p className="text-lg font-semibold mb-4">Pengumuman</p>
            <SidebarHeading judul={"Pendaftaran Kartu Prakerja"} />
            <SidebarHeading judul={"Pendaftaran Informasi KK"} />
            <SidebarHeading judul={"Informasi Bantuan"} />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Pertanian;
