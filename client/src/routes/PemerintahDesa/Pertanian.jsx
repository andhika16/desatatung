import React from "react";
import { pertanian } from "../../assets/Link";
import SidebarHeading from "../../components/SidebarHeading";
import Card from "../../components/Card";

const Pertanian = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-slate-900 text-white">
        <SidebarHeading judul={"Pertanian"} />
      </div>

      <div className="container mx-auto p-5">
        <div className="flex flex-col sm:flex-row">
          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-4">
            {pertanian.map((layanan, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row bg-white"
              >
                <div className="w-full sm:w-1/2 h-64 sm:h-48 flex-shrink-0">
                  <img
                    className="object-cover w-full h-full"
                    src={layanan.img}
                    alt={layanan.nama}
                  />
                </div>
                <div className="p-4 flex-1">
                  <p className="text-xl font-semibold mb-2">{layanan.nama}</p>
                  <p className="text-base font-light leading-relaxed line-clamp-4">
                    {layanan.isi}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="w-full sm:w-1/4 mt-6 sm:mt-0 sm:ml-6">
            <div className="bg-slate-800 text-white p-4 rounded-lg shadow-lg">
              <p className="text-lg font-semibold mb-4">Pengumuman</p>
              <SidebarHeading judul={"Pendaftaran Kartu Prakerja"} />
              <SidebarHeading judul={"Pendaftaran Informasi KK"} />
              <SidebarHeading judul={"Informasi Bantuan"} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Pertanian;
