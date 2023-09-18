import React from "react";
import {
  FaChartArea,
  FaFacebook,
  FaFacebookMessenger,
  FaFolder,
  FaGlobe,
  FaInfo,
  FaInstagram,
  FaNetworkWired,
  FaPeopleArrows,
  FaPeopleCarry,
  FaPhone,
  FaTwitter,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import wa from "../../assets/whatsapp.png";
import phone from "../../assets/telephone-call.png";
import ChartBar from "../../components/Chart";
import SidebarHeading from "../../components/SidebarHeading";
const Sidebar = () => {
  return (
    <>
      <div className="w-full">
        <div>
          <p className=" text-lg font-semibold uppercase text-center">
            Informasi desa
          </p>
        </div>
        <div className="p-2  my-2">
          <SidebarHeading judul={"Sistem informasi"} icon={<FaInfo />} />
        </div>
        <div className="p-2  my-2">
          <SidebarHeading judul={"layanan informasi"} icon={<FaFolder/>} />
          <div className="object-contain">
            
          </div>
        </div>
        {/* <div className=" p-2">
          <SidebarHeading judul={"statistik desa"} icon={<FaChartArea />} />
          <div className="">
            <ChartBar />
          </div>
        </div> */}
        <div className="p-2">
          <SidebarHeading judul={"aparatur desa"} icon={<FaUser />} />
          <div className=""></div>
        </div>
        <div className="p-2">
          <SidebarHeading judul={"social media"} icon={<FaGlobe />} />
          <div className="mt-5 ">
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Sidebar;
