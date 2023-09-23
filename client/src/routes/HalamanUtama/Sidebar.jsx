import React from "react";
import {
  FaChartArea,
  FaFolder,
  FaGlobe,
  FaInfo,
  FaUser,
} from "react-icons/fa";
import dadu from "../../assets/dad.png";
import SidebarHeading from "../../components/SidebarHeading";
const Sidebar = () => {
  return (
    <>
      <div className="w-lg">
        <div>
          <p className=" text-lg font-semibold uppercase text-center">
            Informasi desa
          </p>
        </div>
        <div className="p-2 ">
          <SidebarHeading judul={"Sistem informasi"} icon={<FaInfo />} />
          <p className="p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi amet
            cum dignissimos nam corporis, laudantium tempora vero fugit
            voluptatibus repudiandae!
          </p>
        </div>
        <div className="p-2">
          <SidebarHeading judul={"layanan informasi"} icon={<FaFolder />} />
          <div className="object-contain w-[10vw] ">
            <img src={dadu}  className="w-full h-full"/>
          </div>
        </div>
        <div className=" p-2">
          <SidebarHeading judul={"statistik desa"} icon={<FaChartArea />} />
          <div className="">{/* <ChartBar /> */}</div>
        </div>
        <div className="p-2">
          <SidebarHeading judul={"aparatur desa"} icon={<FaUser />} />
          <div className=""></div>
        </div>
        <div className="p-2">
          <SidebarHeading judul={"social media"} icon={<FaGlobe />} />
          <div className="mt-5 "></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
