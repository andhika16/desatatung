import React from "react";
import {
  FaChartArea,
  FaFacebook,
  FaFacebookMessenger,
  FaFolder,
  FaGlobe,
  FaInstagram,
  FaNetworkWired,
  FaPeopleArrows,
  FaPeopleCarry,
  FaPhone,
  FaTwitter,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import wa from "../assets/whatsapp.png";
import phone from "../assets/telephone-call.png";
import ChartBar from "../components/Chart";
import SidebarHeading from "../components/SidebarHeading";
const Sidebar = () => {
  return (
    <>
      <div className="sm:my-3 sm:m-10 px-3">
        <div>
          <p className="font-inter text-lg font-semibold uppercase text-center">
            Informasi desa
          </p>
        </div>
        <div className="bg-white p-2  my-2">
          <SidebarHeading judul={"layanan informasi"} icon={<FaFolder />} />
          <div className="object-contain">
            <div className="flex flex-row my-5 w-[25px] h-[25px] items-center">
              <div className="mr-2 text-xl">
                <FaWhatsapp />
              </div>
              <p className="font-inter underline text-lg">083183539731</p>
            </div>
            <div className="flex flex-row my-5 w-[25px] h-[25px] items-center">
              <div className="mr-2 text-xl">
                <FaPhone />
              </div>
              <p className="font-inter underline text-lg">083183539731</p>
            </div>
          </div>
        </div>
        <div className=" bg-white p-2">
          <SidebarHeading judul={"statistik desa"} icon={<FaChartArea />} />
          <div className="">
            <ChartBar />
          </div>
        </div>
        <div className="p-2">
          <SidebarHeading judul={"aparatur desa"} icon={<FaUser />} />
          <div className=""></div>
        </div>
        <div className="p-2">
          <SidebarHeading judul={"social media"} icon={<FaGlobe />} />
          <div className="mt-5 ">
            <div className="flex flex-row justify-evenly">
              <p className="mx-2 text-5xl">
                {" "}
                <FaFacebook />{" "}
              </p>
              <p className="mx-2 text-5xl">
                {" "}
                <FaWhatsapp />{" "}
              </p>
              <p className="mx-2 text-5xl">
                {" "}
                <FaFacebookMessenger />{" "}
              </p>
              <p className="mx-2 text-5xl">
                {" "}
                <FaInstagram />{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <SidebarHeading judul={"Sistem informasi"} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
