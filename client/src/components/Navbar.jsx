import React from "react";
import logoResident from "../assets/house.png";
import drop from "../assets/down-arrow.png";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="lg:sticky top-0">
      <div className="w-full h-auto   bg-slate-900 flex flex-row py-2 px-2 flex-wrap">
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
          <div className="flex flex-row items-center">
            <div className="ss:block w-[40px] h-[40px] ss:mr-5">
              <img
                className="w-full h-full object-contain"
                src={logoResident}
                alt="house"
              />
            </div>
            <div className="ss:block ">
              <div className="uppercase  text-white ">
                <h1 className="text-lg">Website resmi desa tatung</h1>
                <p className="text-sm">Kec.Balong Kab.Ponorogo</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <FaSearch className="" />
            <input className="w-[20vw]" type="text" placeholder="cari" />
          </div>
        </div>
      </div>
      <div
        className={`w-full pr-10 bg-white ${
          showNav ? "" : "hidden"
        }  ss:flex flex-row  px-4 lg:px-10  items-center md:text-xs  flex-wrap font-semibold uppercase`}
      >
        <div className="m-2 p-2">
          <Link to={"/"}>Beranda</Link>
        </div>
        <div className="">  
          <div className="relative group m-4 ">
            <div className="flex flex-row items-center">
              <div className="flex flex-row ">
                <p>Profil</p>
              </div>

              <div className="w-[35px] h-[35px]">
                <img
                  className="w-[100%] h-[100%] object-contain"
                  src={drop}
                  alt="drop"
                />
              </div>
            </div>

            <div className="ss:absolute  z-10 hidden bg-grey-200 group-hover:block ">
              <div className="px-2 pt-2 pb-4 bg-white  shadow-lg w-[80px] text-center">
                <Link>
                  <p>Sejarah</p>
                </Link>
                <Link>
                  <p>visi misi</p>
                </Link>
                <Link>
                  <p>peraturan</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Dropdown nama="pemerintahan desa" />
        <Dropdown nama="profil desa" />
        <div className="m-2 p-2 ">
          <Link to="/strukturdesa">
            <p>Struktur Desa</p>
          </Link>
        </div>
        <div className="m-2 p-2">
          <Link to="/pertanian">
            <p>Pertanian</p>
          </Link>
        </div>
        <div className="m-2 p-2 ">
          <Link to="/layananpenduduk">
            <p>layanan kependudukan</p>
          </Link>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
