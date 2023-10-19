import React from "react";
import { FaChartArea, FaFolder, FaGlobe, FaInfo, FaUser } from "react-icons/fa";
import dadu from "../../assets/dad.png";

import SidebarHeading from "../../components/SidebarHeading";
const Sidebar = () => {
  return (
    <div className="sm:w-1/3">
      <div className="">
        <div className="py-2 ">
          <SidebarHeading judul={"Sistem informasi"} icon={<FaInfo />} />
          <p className="font-thin font-roboto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi amet
            cum dignissimos nam corporis, laudantium tempora vero fugit
            voluptatibus repudiandae!
          </p>
        </div>
        <div className="py-2">
          <SidebarHeading judul={"layanan informasi"} icon={<FaFolder />} />
          <div className="object-contain max-w-xs sm:w-[10vw] ">
            <img src={dadu} className="w-full h-full" />
          </div>
        </div>
        <div className="py-2">
          <SidebarHeading judul={"Agenda Kegiatan "} icon={<FaChartArea />} />
          <div className="flex w-full my-2 items-center">
            <span className="py-2 px-1 mx-2 mr-5 bg-slate-900 text-white ">
              Sep 23 2023
            </span>
            <span>
              <p >Musyawarah Pengukuran Tanah</p>
              <p className="text-sm text-gray-500">Lokasi:Balai Desa</p>
            </span>
          </div>
          <div className="flex w-full my-2 items-center">
            <span className="py-2 px-1 mx-2 mr-5 bg-slate-900 text-white ">
              Jun 10 2023
            </span>
            <span>
              <p >Rapat anggaran Taunan</p>
              <p className="text-sm text-gray-500">Lokasi:Kamituwo</p>
            </span>
          </div>
        </div>
        <div className="py-2">
          <SidebarHeading judul={"aparatur desa"} icon={<FaUser />} />
          <div className=""></div>
        </div>
        <div className="py-2">
          <SidebarHeading judul={"social media"} icon={<FaGlobe />} />
          <div className="mt-5 "></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
