import React from "react";
import { FaChartArea, FaFolder, FaGlobe, FaInfo, FaUser } from "react-icons/fa";
import dadu from "../../assets/dad.png";

import SidebarHeading from "../../components/SidebarHeading";
const Sidebar = () => {
  return (
    <div className="w-lg">
      <div className="p-2 ">
        <SidebarHeading judul={"Sistem informasi"} icon={<FaInfo />} />
        <p className="p-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi amet
          cum dignissimos nam corporis, laudantium tempora vero fugit
          voluptatibus repudiandae!
        </p>
      </div>
      <div className="p-2 ">
        <SidebarHeading judul={"layanan informasi"} icon={<FaFolder />} />
        <div className="object-contain max-w-xs sm:w-[10vw] ">
          <img src={dadu} className="w-full h-full" />
        </div>
      </div>
      <div className="p-2 ">
        <SidebarHeading judul={"Agenda Kegiatan "} icon={<FaChartArea />} />
        <div className="flex w-full">
          <span className="p-1 mx-2 bg-slate-900 text-white rounded">Sep 23 2023</span>
          <p>Musyawarah Pengukuran Tanah</p>
        </div>
      </div>
      <div className="p-2 ">
        <SidebarHeading judul={"aparatur desa"} icon={<FaUser />} />
        <div className=""></div>
      </div>
      <div className="p-2 ">
        <SidebarHeading judul={"social media"} icon={<FaGlobe />} />
        <div className="mt-5 "></div>
      </div>
    </div>
  );
};

export default Sidebar;
