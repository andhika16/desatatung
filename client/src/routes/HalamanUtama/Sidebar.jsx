import React from "react";
import { FaChartArea, FaGlobe, FaInfo, FaUser } from "react-icons/fa";
import SidebarHeading from "../../components/SidebarHeading";
import { perangkat } from "../../assets/Link";

const Sidebar = () => {
  return (
    <div className="sm:w-1/3  p-6 ">
      <div className="space-y-6">
        {/* Sistem Informasi Section */}
        <div>
          <SidebarHeading judul={"Sistem Informasi"} icon={<FaInfo />} />
          <p className="font-bold text-gray-700 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet
            cum dignissimos nam corporis, laudantium tempora vero fugit
            voluptatibus repudiandae!
          </p>
        </div>

        {/* Agenda Kegiatan Section */}
        <div>
          <SidebarHeading judul={"Agenda Kegiatan"} icon={<FaChartArea />} />
          <div className="space-y-4 mt-3">
            {[
              {
                date: "Sep 23 2023",
                title: "Musyawarah Pengukuran Tanah",
                location: "Balai Desa",
              },
              {
                date: "Jun 10 2023",
                title: "Rapat Anggaran Tahunan",
                location: "Kamituwo",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 border-b pb-2"
              >
                <span className="py-1 px-2 bg-slate-900 text-white text-sm rounded">
                  {event.date}
                </span>
                <div>
                  <p className="font-medium text-gray-800">{event.title}</p>
                  <p className="text-sm text-gray-500">
                    Lokasi: {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aparatur Desa Section */}
        <div>
          <SidebarHeading judul={"Aparatur Desa"} icon={<FaUser />} />
          <div className="mt-3 space-y-3">
            {perangkat.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 border-b pb-4"
              >
                <img
                  src={item.img}
                  alt={item.nama}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div>
                  <p className="font-semibold">{item.nama}</p>
                  <p className="text-sm text-gray-500">{item.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <SidebarHeading judul={"Social Media"} icon={<FaGlobe />} />
          <div className="mt-3">
            {/* Ikon media sosial atau informasi lainnya bisa ditambahkan di sini */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
