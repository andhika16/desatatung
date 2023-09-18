import React from "react";
import logoResident from "../assets/house.png";
import loupe from "../assets/loupe.png";
import Dropdown from "./Dropdown";
import square from "../assets/square.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProfilDesa, pemerintahan, informasiPublik } from "../assets/Link";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav>
      <div className="w-full  bg-slate-800 flex flex-row py-2 px-2 flex-wrap">
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
          <div className="sm:block w-[40px] h-[40px] ">
            <img
              className="w-full h-full object-contain"
              src={logoResident}
              alt="house"
            />
          <div className="">
            <div className="uppercase text-white text-center ss:text-left">
              <h1 className="text-lg">Website resmi desa tatung</h1>
              <p className="text-sm">Kec.Balong Kab.Ponorogo</p>
            </div>
          </div>
          </div>
          <div className="w-full flex ss:flex-row items-center">
            <div className="flex flex-row items-center">
              <div className="ss:block w-[40px] h-[40px] ss:mr-5">
                <img
                  className="hidden w-full h-full object-contain"
                  src={logoResident}
                  alt="house"
                />
              </div>
              <div className="ss:block ">
                <div className="uppercase text-white text-center ss:text-left">
                  <h1 className="text-lg">Website resmi desa tatung</h1>
                  <p className="text-sm">Kec.Balong Kab.Ponorogo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full pr-10  ${
          showNav ? "" : "hidden"
        }  ss:flex flex-row  px-4 lg:px-10 items-center lg:text-sm  flex-wrap  uppercase`}
      >
        <div className="m-4 p-2">
          <p>Beranda</p>
        </div>
        <Dropdown nama="bpbd" list={pemerintahan} />
        <Dropdown nama="pemerintahan desa" />
        <Dropdown nama="profil desa" />
        <div className="m-4 p-2 ">
          <Link to="/strukturdesa">
            <p>Struktur Desa</p>
          </Link>
        </div>
        <div className="m-4 p-2">
          <p>ppid</p>
        </div>
        <div className="m-4 p-2">
          <p>transparansi keuangan</p>
        </div>
        <div className="m-4 p-2 ">
          <p>surat online</p>
        </div>
        <div className="m-4 p-2 ">
          <p>login</p>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
