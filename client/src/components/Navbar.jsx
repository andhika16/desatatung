import React from "react";
import logoResident from "../assets/house.png";
import drop from "../assets/down-arrow.png";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaPhoneAlt,
  FaSearch,
  FaVoicemail,
} from "react-icons/fa";
import Direct from "./Direct";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="">
      <div className="w-full h-auto  bg-slate-900 flex flex-row py-3 px-2 flex-wrap">
        <div className="order-1 w-full sm:w-0 ss:hidden  flex flex-row py-2 items-center justify-between ">
          <div
            className="order-1 cursor-pointer"
            onClick={() => setShowNav(!showNav)}
          >
            {showNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>
          <div className="flex items-center w-full">
            <div className="w-[8vw] h-auto">
              <img
                className="w-auto h-auto object-contain "
                src={logoResident}
                alt="house"
              />
            </div>
            <div className="uppercase  text-white">
              <h1 className="text-lg">Website resmi desa tatung</h1>
              <p className="text-sm">Kec.Balong Kab.Ponorogo</p>
            </div>
          </div>
        </div>
        <div className="hidden  w-full ss:flex ss:flex-row items-center justify-between">
          <div className="text-white">
            <div className="font-inter text-xs flex space-x-1 items-center">
              <FaPhoneAlt />
              <p>022-242999</p>
              <FaEnvelope />
              <p>pemdes@tatungbalong.com</p>
            </div>
          </div>
          <div className="">
            <p className="font-inter text-xs text-white">Kabupaten Ponorogo</p>
          </div>
        </div>
      </div>
      <div
        className={`w-full pr-10 bg-white ${
          showNav ? "" : "hidden"
        }  ss:flex flex-row   lg:py-4  items-center text-sm justify-between  font-semibold uppercase`}
      >
        <div className="hidden sm:flex   items-center ">
            <div className="w-[4vw] lg:w-[3vw] mx-2 h-auto">
              <img
                className="w-auto h-auto object-contain "
                src={logoResident}
                alt="house"
              />
            </div>
            <div className="uppercase  text-black">
              <h1 className="text-sm">Website resmi desa tatung</h1>
              <p className="text-xs">Kabupaten Ponorogo</p>
            </div>
        </div>
        <div className="sm:flex flex-wrap ">
          <div className="m-2 p-2">
            <Link to={"/"}>Beranda</Link>
          </div>
          <Dropdown
            nama="profil desa"
            list={["/visimisi", "/sejarah", "/tentang"]}
          />
          <Dropdown
            nama="Pemerintah Desa"
            list={["/lembagadesa", "/perangkat"]}
          />
          <Dropdown
            nama="Informasi Publik"
            list={[
              "/pengumuman",
              "/agenda kegiatan",
              "/galeri",
              "/musyawarah",
              "/berita",
            ]}
          />
          <div className="m-2 p-2 sm:hover:bg-slate-800 sm:hover:text-white  ">
            <Link>
              <p>Struktur Desa</p>
            </Link>
          </div>
          <div className="m-2 p-2 sm:hover:bg-slate-800 sm:hover:text-white">
            <Link to="/pertanian">
              <p>Pertanian</p>
            </Link>
          </div>
          <div className="m-2 p-2 sm:hover:bg-slate-800 sm:hover:text-white">
            <Link to="/layananpenduduk">
              <p>layanan kependudukan</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
