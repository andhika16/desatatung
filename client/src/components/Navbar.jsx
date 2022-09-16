import React from "react";
import logoResident from "../assets/house.png";
import loupe from "../assets/loupe.png";
import Dropdown from "./Dropdown";
import square from "../assets/square.png";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className=" bg-gray-800">
        <div className="sm:hidden flex justify-between p-5">
          <div className="cursor-pointer">
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
          </div>
          <div className="w-[25px] h-[25px]">
            <img src={loupe} alt="loupe" />
          </div>
        </div>

        <div className="px-10 py-5 sm:flex items-center justify-between">
          <div
            className={`m-3 sm:flex flex-row items-center ${
              showNav ? "" : "hidden"
            }`}
          >
            <div className="w-[40px] h-[40px] mr-5">
              <img className="w-full h-full" src={logoResident} alt="house" />
            </div>
            <div className="font-inter text-white">
              <h1 className=" text-lg">Website resmi desa tatung</h1>
              <p className="text-sm">Kec.Balong Kab.Ponorogo</p>
            </div>
          </div>
          <div className="px-4 py-2 hidden sm:flex flex-row items-center bg-white ">
            <div className="w-[20px] h-[20px]">
              <img src={loupe} className="w-[100%] h-[100%]" alt="loupe" />
            </div>
            <div className="mx-2">
              <input type="search" name="" id="" placeholder="cari" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden px-10 sm:flex flex-row  items-center shadow-lg bg-gray-500 uppercase font-semibold flex-wrap">
        <div className="m-4">
          <p className="">Beranda</p>
        </div>
        <Dropdown />
        <div className="m-4">
          <p className="">Pemerintahan Desa</p>
        </div>
        <div className="m-4">
          <p className="">LEMMAS</p>
        </div>
        <div className="m-4">
          <p className="">data desa</p>
        </div>
        <div className="m-4">
          <p className="">ppid</p>
        </div>
        <div className="m-4">
          <p className="">transparansi keuangan</p>
        </div>
        <div className="m-4">
          <p className="">surat online</p>
        </div>
        <div className="m-4">
          <p className="">login</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
